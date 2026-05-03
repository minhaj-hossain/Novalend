'use client'

import React, { useState } from 'react';

const faqs = [
    {
        q: "Is the platform completely free to use?",
        a: "Yes — browsing, borrowing, and returning books costs nothing. There are no membership fees, no late fees, and no hidden charges.",
    },
    {
        q: "Do I need an account to browse books?",
        a: "You can browse and search the full collection without logging in. However, viewing book details and borrowing requires a free account.",
    },
    {
        q: "How many books can I borrow at once?",
        a: "You can borrow multiple books at a time as long as copies are available. The available quantity is shown on each book's detail page.",
    },
    {
        q: "How do I return a book?",
        a: "Head to My Profile and find the book in your borrowing history. Hit the return button and the copy goes back to the library instantly.",
    },
    {
        q: "Can I borrow a book that shows 0 copies available?",
        a: "Not right now — if a title shows zero available copies it means all copies are currently borrowed. Check back later as returns happen daily.",
    },
    {
        q: "Is my personal data safe?",
        a: "Absolutely. We use BetterAuth for secure authentication and never share your data with third parties. Passwords are never stored in plain text.",
    },
    {
        q: "Can I sign in with Google?",
        a: "Yes. You can register and log in using your Google account with a single click — no password needed.",
    },
];

const Accordion = () => {

    const [open, setOpen] = useState(null);

    function toggle(i) {
        setOpen((prev) => (prev === i ? null : i));
    }
    return (
        <section className="py-20 px-4 bg-base-200">
            <div className="max-w-3xl mx-auto">


                <div className="text-center mb-12">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                        Got questions?
                    </span>
                    <h2 className="text-4xl font-bold mt-2 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base-content/50 text-base">
                        Everything you need to know before your first borrow.
                    </p>
                </div>


                <div className="flex flex-col gap-3">
                    {faqs.map((faq, index) => {
                        const isOpen = open === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border bg-base-100 transition-all duration-200 ${isOpen ? "border-primary/30 shadow-sm" : "border-base-300"
                                    }`}
                            >
                                <button
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                    onClick={() => toggle(index)}
                                >
                                    <span className={`font-semibold text-sm leading-snug ${isOpen ? "text-primary" : "text-base-content"}`}>
                                        {faq.q}
                                    </span>
                                    <span
                                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen
                                            ? "bg-primary border-primary text-primary-content rotate-45"
                                            : "border-base-300 text-base-content/40"
                                            }`}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </button>


                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="px-6 pb-5 text-sm text-base-content/60 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <p className="text-center text-sm text-base-content/40 mt-10">
                    Still have questions?{" "}
                    <a href="#contact" className="text-primary font-medium hover:underline">
                        Contact us
                    </a>
                </p>

            </div>
        </section>
    );
};

export default Accordion;