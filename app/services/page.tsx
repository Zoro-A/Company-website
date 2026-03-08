import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Phi-Delity's AI-powered fraud prevention services: real-time transaction monitoring, fraud risk scoring API, analytics dashboard, and custom AI models.",
};

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        tag: "Core Platform",
        title: "Real-Time Transaction Monitoring",
        description:
            "Our flagship service continuously analyzes every transaction across your payment infrastructure using multi-layered AI models. We detect anomalies in spending patterns, geolocation inconsistencies, device fingerprinting mismatches, and velocity abuse — all in milliseconds.",
        highlights: [
            "Sub-5ms decision latency",
            "99.97% detection accuracy",
            "24/7 autonomous monitoring",
            "Behavioral pattern analysis",
            "Multi-channel coverage",
        ],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        tag: "Developer API",
        title: "Fraud Risk Scoring API",
        description:
            "A low-latency RESTful API that returns a real-time fraud risk score (0–100) for any transaction. Embed risk intelligence directly into your checkout flow, mobile app, or backend with just a few lines of code. Comes with SDKs for Python, Node.js, Java, and Go.",
        highlights: [
            "RESTful JSON API",
            "SDKs for 4+ languages",
            "Explainable AI decisions",
            "Webhook event support",
            "99.99% uptime SLA",
        ],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        tag: "Operations Tool",
        title: "Fraud Analytics Dashboard",
        description:
            "A powerful command center for your fraud operations team. Visualize fraud trends, investigate flagged transactions, manage case queues, and generate compliance reports — all from a single intuitive interface with role-based access controls.",
        highlights: [
            "Real-time fraud heatmaps",
            "Case management workflows",
            "Custom alert rules",
            "Regulatory reporting",
            "Team collaboration tools",
        ],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
            </svg>
        ),
        tag: "Enterprise AI",
        title: "AI Model Customization",
        description:
            "Off-the-shelf models don't fit every business. Our ML engineering team works with you to train custom fraud detection models on your proprietary transaction data, fine-tuned to your specific industry, customer base, and risk tolerance.",
        highlights: [
            "Custom model training",
            "Domain-specific feature engineering",
            "Continuous model retraining",
            "A/B testing framework",
            "Model performance SLAs",
        ],
    },
];

const trustedBy = ["Banks", "Neobanks", "Payment Gateways", "E-Commerce", "Crypto Platforms", "Insurance"];

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden hero-glow">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
                        Our Services
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                        Fraud Prevention,{" "}
                        <span className="text-gradient-cyan">Reimagined</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Four powerful AI-driven products designed to eliminate fraud at
                        every layer of your financial infrastructure.
                    </p>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-12 bg-[#060a14] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-slate-500 text-sm text-center mb-6 uppercase tracking-widest">
                        Trusted across sectors
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {trustedBy.map((item) => (
                            <span key={item} className="text-slate-400 font-semibold text-lg">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            className={`glass-card p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center group hover:border-cyan-500/25 transition-all duration-300 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Text */}
                            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                                <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-4">
                                    {service.tag}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                    {service.title}
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2.5">
                                    {service.highlights.map((h) => (
                                        <li key={h} className="flex items-center gap-3 text-slate-300 text-sm">
                                            <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                                <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Icon Panel */}
                            <div className={`flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <div className="relative w-full max-w-xs aspect-square rounded-3xl bg-gradient-to-br from-[#0e2040] to-[#061028] border border-cyan-500/15 flex items-center justify-center group-hover:border-cyan-500/30 transition-all duration-300">
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />
                                    <div className="relative text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    {/* Decorative circles */}
                                    <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-cyan-400/30 animate-pulse" />
                                    <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-blue-400/40" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                        Talk to our team and find the right solution for your business.
                    </p>
                    <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                        Request a Demo
                    </Link>
                </div>
            </section>
        </>
    );
}
