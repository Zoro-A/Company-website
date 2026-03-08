import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Phi-Delity | Trust Every Transaction.",
    description:
        "AI-powered fraud detection for banks, fintechs, and payment platforms. Detect and prevent fraudulent financial transactions in real time.",
};

const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
            </svg>
        ),
        title: "Real-Time Detection",
        description:
            "Analyze millions of transactions per second with sub-millisecond latency, catching fraud before it completes.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Adaptive ML Models",
        description:
            "Self-learning models that continuously adapt to new fraud patterns, staying ahead of evolving attack vectors.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: "Enterprise Security",
        description:
            "Bank-grade encryption and compliance with PCI-DSS, SOC 2, and GDPR standards for complete data protection.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Instant API Integration",
        description:
            "Deploy in minutes with our RESTful API and SDKs for major languages. No complex infrastructure required.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        title: "Full Visibility",
        description:
            "Comprehensive analytics dashboards providing complete transaction visibility and actionable fraud insights.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Human-in-the-Loop",
        description:
            "Intelligent case management that escalates high-risk cases to your fraud analysts with full context.",
    },
];

const stats = [
    { value: "99.97%", label: "Detection Accuracy" },
    { value: "<5ms", label: "Response Latency" },
    { value: "$2.4B+", label: "Fraud Prevented" },
    { value: "150+", label: "Enterprise Clients" },
];

const services = [
    {
        icon: "📡",
        title: "Real-Time Transaction Monitoring",
        description:
            "Monitor every transaction 24/7 with AI-powered behavioral analysis that flags suspicious activity instantly.",
    },
    {
        icon: "🎯",
        title: "Fraud Risk Scoring API",
        description:
            "Embed a risk score into any transaction flow via our low-latency REST API with comprehensive documentation.",
    },
    {
        icon: "📊",
        title: "Fraud Analytics Dashboard",
        description:
            "Visualize trends, patterns, and anomalies with an intuitive dashboard built for fraud operations teams.",
    },
    {
        icon: "🤖",
        title: "AI Model Customization",
        description:
            "Train custom ML models on your specific transaction data to maximize detection rates for your use case.",
    },
];

export default function HomePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow grid-bg">
                {/* Decorative orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        AI-Powered Fraud Detection Platform
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6">
                        Protect Every
                        <br />
                        <span className="text-gradient-cyan">Transaction.</span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
                        <span className="text-white font-semibold italic">&quot;Trust Every Transaction.&quot;</span>
                    </p>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Phi-Delity uses advanced machine learning to detect and prevent
                        fraudulent financial transactions in real time — protecting banks,
                        fintechs, and payment platforms worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn-primary text-base px-8 py-4">
                            Request Demo
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link href="/services" className="btn-secondary text-base px-8 py-4">
                            Learn More
                        </Link>
                    </div>

                    {/* Floating stats row */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="glass-card p-5 text-center">
                                <div className="text-3xl font-black text-gradient-cyan mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                            Why Phi-Delity
                        </span>
                        <h2 className="section-heading">
                            Built for the Complexity of{" "}
                            <span className="text-gradient-cyan">Modern Fraud</span>
                        </h2>
                        <p className="section-subheading">
                            Our AI platform is engineered to stay one step ahead of
                            fraudsters, delivering unmatched protection with minimal friction
                            for legitimate users.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="feature-card group">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {f.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-[#060a14] relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                            Our Solutions
                        </span>
                        <h2 className="section-heading">
                            End-to-End Fraud{" "}
                            <span className="text-gradient-cyan">Protection Suite</span>
                        </h2>
                        <p className="section-subheading">
                            A complete toolkit of AI-driven services to eliminate fraud across
                            your entire payment lifecycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((s, i) => (
                            <div
                                key={s.title}
                                className="glass-card p-8 flex gap-5 group hover:-translate-y-1 hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="text-4xl shrink-0">{s.icon}</div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">
                                        {s.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/services" className="btn-primary">
                            View All Services
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e2040] via-[#0a1535] to-[#061028] border border-cyan-500/20 p-12 text-center glow-cyan">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        <div className="absolute inset-0 hero-glow opacity-50" />
                        <div className="relative">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Ready to Eliminate Fraud?
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                                Join 150+ financial institutions who trust Phi-Delity to protect
                                their customers and revenue.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                                    Request a Free Demo
                                </Link>
                                <Link href="/about" className="btn-secondary px-8 py-4 text-base">
                                    Meet the Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
