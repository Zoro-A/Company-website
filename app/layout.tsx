import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: {
        default: "Phi-Delity | Trust Every Transaction.",
        template: "%s | Phi-Delity",
    },
    description:
        "Phi-Delity is an AI-powered fintech platform that detects and prevents fraudulent financial transactions in real time using advanced machine learning algorithms.",
    keywords: [
        "fraud detection",
        "AI fintech",
        "real-time transaction monitoring",
        "financial security",
        "machine learning fraud prevention",
    ],
    authors: [{ name: "Phi-Delity" }],
    openGraph: {
        type: "website",
        siteName: "Phi-Delity",
        title: "Phi-Delity | Trust Every Transaction.",
        description:
            "AI-powered real-time fraud detection for banks, fintech companies, and payment platforms.",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
