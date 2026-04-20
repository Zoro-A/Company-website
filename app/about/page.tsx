import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Phi-Delity's mission to make every financial transaction trustworthy through AI-powered fraud detection. Meet our founding team.",
};

const values = [
    {
        icon: "🛡️",
        title: "Trust First",
        description:
            "Every product decision is guided by one question: does this make our clients' customers safer?",
    },
    {
        icon: "⚡",
        title: "Speed Matters",
        description:
            "Fraud happens in milliseconds. Our systems think and act at machine speed.",
    },
    {
        icon: "🔬",
        title: "Science-Driven",
        description:
            "We invest heavily in ML research to stay ahead of constantly evolving fraud strategies.",
    },
    {
        icon: "🌐",
        title: "Global Reach",
        description:
            "Deployed across 40+ countries, our platform understands regional fraud patterns deeply.",
    },
];

const team = [
    {
        initials: "MIA",
        name: "Mahhee Ibn Ahmar Bukhari",
        role: "Chief Executive Officer",
        bio: "A visionary leader driving Phi-Delity's mission to make every financial transaction trustworthy. With a deep passion for AI and financial technology, Mahhee founded Phi-Delity to bring next-generation fraud detection to enterprises worldwide.",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        initials: "HH",
        name: "Hamza Hussain",
        role: "Chief Financial Officer",
        bio: "A seasoned finance strategist overseeing Phi-Delity's financial operations, growth planning, and investor relations. Hamza brings sharp analytical acumen and a proven track record in scaling fintech ventures across global markets.",
        gradient: "from-blue-500 to-purple-600",
    },
    {
        initials: "MF",
        name: "Muhammad Faizan",
        role: "Chief Technology Officer",
        bio: "An expert in machine learning and distributed systems, Muhammad leads Phi-Delity's engineering and AI research teams. He architects the core fraud detection engine and ensures the platform remains at the cutting edge of AI-powered security.",
        gradient: "from-purple-500 to-cyan-500",
    },
];

const milestones = [
    { year: "2019", event: "Phi-Delity founded in Lahore by Ayesha and Kamran." },
    { year: "2020", event: "Seed funding of $3.2M. First enterprise client onboarded." },
    { year: "2021", event: "Launched Fraud Risk Scoring API. Series A — $18M." },
    { year: "2022", event: "Expanded to 20 countries. Crossed $500M fraud prevented." },
    { year: "2023", event: "Released AI Model Customization. Series B — $55M." },
    { year: "2024", event: "$2.4B+ in cumulative fraud prevented. 150+ enterprise clients." },
];

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden hero-glow">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
                        About Us
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                        We Are <span className="text-gradient-cyan">Phi-Delity</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        A team of ML engineers, fintech veterans, and security experts on a
                        mission to make every financial transaction trustworthy.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="glass-card p-10">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl mb-6">
                                🎯
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-slate-400 leading-relaxed">
                                To protect the integrity of the global financial system by
                                providing AI-powered fraud detection that is faster, smarter,
                                and more accessible than anything that has come before. We
                                believe that trust is the foundation of finance — and we exist
                                to make every transaction worthy of it.
                            </p>
                        </div>
                        <div className="glass-card p-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl mb-6">
                                🔭
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-slate-400 leading-relaxed">
                                A world where fraud is so rare it barely registers — where no
                                customer&apos;s account is drained overnight, no business loses
                                revenue to chargebacks, and no bank faces regulatory fines over
                                preventable losses. We envision a financial ecosystem where AI
                                keeps pace with threats so humans don&apos;t have to.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story / Timeline */}
            <section className="py-20 bg-[#060a14] border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                            Our Story
                        </span>
                        <h2 className="section-heading">
                            Built on <span className="text-gradient-cyan">Conviction</span>
                        </h2>
                        <p className="section-subheading">
                            From a two-person team in Karachi to a global AI security
                            platform.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/40 to-transparent" />

                        <div className="space-y-10">
                            {milestones.map((m, i) => (
                                <div
                                    key={m.year}
                                    className={`relative flex items-start gap-6 ${i % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#060a14] mt-1.5" />

                                    {/* Content */}
                                    <div
                                        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-5 ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                                            }`}
                                    >
                                        <span className="text-cyan-400 font-bold text-xl block mb-1">
                                            {m.year}
                                        </span>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            {m.event}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="section-heading">
                            What We <span className="text-gradient-cyan">Stand For</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="feature-card text-center">
                                <div className="text-4xl mb-4">{v.icon}</div>
                                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-[#060a14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                            Leadership
                        </span>
                        <h2 className="section-heading">
                            Meet the <span className="text-gradient-cyan">Founding Team</span>
                        </h2>
                        <p className="section-subheading">
                            World-class expertise at the intersection of AI, finance, and
                            security.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="glass-card p-8 text-center group hover:-translate-y-2 hover:border-cyan-500/25 transition-all duration-300"
                            >
                                {/* Avatar */}
                                <div className="relative inline-block mb-6">
                                    <div
                                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-black text-3xl mx-auto shadow-xl`}
                                    >
                                        {member.initials}
                                    </div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-cyan-400 text-sm font-semibold mb-4">
                                    {member.role}
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black text-white mb-4">
                        Join Our Mission
                    </h2>
                    <p className="text-slate-400 text-lg mb-8">
                        Protect millions of transactions with AI. Let&apos;s build together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                            Get in Touch
                        </Link>
                        <Link href="/services" className="btn-secondary px-8 py-4 text-base">
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
