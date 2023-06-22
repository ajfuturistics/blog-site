import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await connectToDB();
          //Find user with the email
          const result: User | null = await User.findOne({
            username: credentials?.username,
          });
          //Not found - send error res
          if (!result) {
            throw new Error("No user found with the email");
          }

          //Check hased password with DB password
          const checkPassword = await compare(
            credentials?.password || "",
            result.password
          );
          //Incorrect password - send response
          if (!checkPassword) {
            throw new Error("Password doesnt match");
          }
          return {
            id: result?.id,
            username: result?.username || "",
            role: result?.role || "",
          };
        } catch (error: any) {
          throw new Error(error?.message || "Failed to connect to database");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      //   update token if user is returned
      if (user) {
        token.user = user;
      }
      //   return final_token
      return token;
    },
    async session({ session, token, user }) {
      //  update session from token
      session.user = token.user; // you can add the properties you want instead of overwriting the session.user
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
