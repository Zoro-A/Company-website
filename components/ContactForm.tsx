"use client";
import { useState } from "react";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="glass-card p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-3xl mb-6">
                    ✅
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Message Sent!</h3>
                <p className="text-slate-400 max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 24
                    hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-2"
                    >
                        Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Ayesha Khan"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:bg-cyan-500/5 transition-all duration-200 text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-2"
                    >
                        Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="ayesha@yourcompany.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:bg-cyan-500/5 transition-all duration-200 text-sm"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-300 mb-2"
                >
                    Company
                </label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:bg-cyan-500/5 transition-all duration-200 text-sm"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                >
                    Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fraud prevention needs..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:bg-cyan-500/5 transition-all duration-200 text-sm resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </>
                )}
            </button>
        </form>
    );
}
