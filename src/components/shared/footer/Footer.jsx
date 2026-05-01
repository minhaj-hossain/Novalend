import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import novalendImg from "@/assets/Novalend-logo.png";

export default function Footer() {
    return (
        <footer className="relative mt-24 border-t border-gray-200 dark:border-white/10">

            <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />
            <div className="absolute inset-0 -z-10 bg-linear-to-tr from-purple-500/5 via-transparent to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="space-y-5">
                        <div className="flex items-center gap-3 relative">
                            <Image
                                src={novalendImg}
                                alt="Novalend logo"
                                width={68}
                                height={68}
                                className="dark:brightness-200"
                            />
                            <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white absolute left-14">
                                Novalend
                            </h2>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                            Create production-ready AI visuals in seconds. Built for speed,
                            scale, and creativity.
                        </p>


                        <div className="flex items-center gap-4 pt-2">
                            {[
                                { icon: FaTwitter, href: "#", label: "Twitter" },
                                { icon: FaGithub, href: "#", label: "GitHub" },
                                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                                { icon: FaInstagram, href: "#", label: "Instagram" },
                            ].map(({ icon: Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="text-gray-500 hover:text-black dark:hover:text-white transition transform hover:scale-110"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link href="/generate" className="hover:text-black dark:hover:text-white transition">
                                    Generate
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-photos" className="hover:text-black dark:hover:text-white transition">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-black dark:hover:text-white transition">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-black dark:hover:text-white transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-black dark:text-white">
                            Contact Us
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Have questions or feedback? Reach out to our team anytime.
                        </p>

                        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <p>Email: support@novalend.ai</p>
                            <p>Location: Remote, Worldwide</p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.03] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
                        >
                            Message Us
                        </Link>
                    </div>
                </div>


                <div className="mt-14 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} Novalend. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}