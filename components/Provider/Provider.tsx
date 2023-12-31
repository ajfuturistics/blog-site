"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session;
}) => <SessionProvider session={session}>{children}</SessionProvider>;

export default Provider;
