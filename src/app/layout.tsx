import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/lib/supabase/server";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Creators AI",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<main>{children}</main>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
