import Nav from "@/components/Navbar/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Site",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam dicta possimus voluptatem laboriosam quidem fugiat expedita ipsam officia animi!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
