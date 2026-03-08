import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Phi-Delity to request a demo, discuss enterprise pricing, or learn more about our AI fraud detection platform.",
};

const contactInfo = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: "Email",
        value: "hello@phi-delity.com",
        link: "mailto:hello@phi-delity.com",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: "Sales",
        value: "sales@phi-delity.com",
        link: "mailto:sales@phi-delity.com",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Headquarters",
        value: "Lahore, Pakistan",
        link: "#",
    },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden hero-glow">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
                        Contact Us
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                        Let's <span className="text-gradient-cyan">Connect</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-xl mx-auto">
                        Ready to protect your transactions? Our team is standing by to help
                        you get started.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Left Info Panel */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Info */}
                            <div className="glass-card p-8">
                                <h2 className="text-white font-bold text-xl mb-6">
                                    Get in Touch
                                </h2>
                                <div className="space-y-5">
                                    {contactInfo.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.link}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                                                    {item.label}
                                                </p>
                                                <p className="text-slate-200 text-sm group-hover:text-cyan-400 transition-colors">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {/* Social */}
                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">
                                        Follow Us
                                    </p>
                                    <div className="flex items-center gap-3">
                                        {socialLinks.map((s) => (
                                            <a
                                                key={s.label}
                                                href={s.href}
                                                aria-label={s.label}
                                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
                                            >
                                                {s.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mini Map Placeholder */}
                            <div className="glass-card p-6 overflow-hidden">
                                <div className="w-full h-48 rounded-xl bg-[#0d1a2e] relative flex items-center justify-center overflow-hidden">
                                    {/* Stylized map grid */}
                                    <div className="absolute inset-0 grid-bg opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                                    {/* Map pin */}
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center animate-float">
                                            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 px-3 py-1 bg-[#0a1525] border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium">
                                            Lahore, Pakistan
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Time Note */}
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl shrink-0">
                            ⏱️
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Quick Response Guaranteed</h3>
                            <p className="text-slate-400 text-sm">
                                Our sales team responds to all demo requests within 24 business hours.
                                Enterprise inquiries get a dedicated response within 4 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
