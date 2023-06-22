import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User | unknown; // temp fix
    expires: string;
  }
}
