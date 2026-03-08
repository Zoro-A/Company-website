"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-9 h-9">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                            <div className="relative flex items-center justify-center w-full h-full">
                                <span className="text-white font-black text-lg">Φ</span>
                            </div>
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">
                            Phi<span className="text-gradient-cyan">-Delity</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link text-sm ${pathname === link.href
                                        ? "text-cyan-400 font-semibold"
                                        : "text-slate-300"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/contact" className="btn-primary text-sm py-2 px-5">
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-[#0a0f1e]/98 backdrop-blur-md border-t border-white/5 px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${pathname === link.href
                                    ? "text-cyan-400 bg-cyan-500/10"
                                    : "text-slate-300 hover:text-cyan-400 hover:bg-white/5"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link href="/contact" className="btn-primary w-full justify-center">
                            Request Demo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
