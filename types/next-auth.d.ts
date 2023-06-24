import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User | unknown | any; // temp fix
    expires: string;
  }
}
