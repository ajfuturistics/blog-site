import Nav from "@/components/Navbar/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider/Provider";

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
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
