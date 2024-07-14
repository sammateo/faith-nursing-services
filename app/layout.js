import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "Faith Nursing Services",
	description:
		"Get the support you need with professional and compassionate eldercare and baby care",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children} <Footer />
			</body>
		</html>
	);
}
