import AuthProvider from "@/contexts/auth-context";
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connexin Demo App",
  description: "For use in technical interviews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 min-h-screen`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
