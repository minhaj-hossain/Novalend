

import Image from "next/image";
import NovalendLogo from "@/assets/Novalend-logo.png"
import NavLink from "./NavLink";
import SessionLogic from "./SessionLogic";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = async () => {

    return (
        <div className="border-b px-2 flex items-center justify-between relative">
            <nav className="flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-0 items-center relative"><Link href={"/"} className="flex items-center gap-0 animate__animated animate__fadeInLeft">
                    <Image
                        src={NovalendLogo}
                        alt="logo"
                        loading="eager"
                        width={63}
                        height={63}
                        className="object-cover h-auto w-auto"
                    />

                    <h3 className="font-black text-lg absolute left-13">Novalend</h3>
                </Link>
                </div>

                <ul className="hidden  sm:flex items-center gap-5 text-sm">
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/all-books"}>All Books</NavLink>
                    <NavLink href={"/my-profile"}>My Profile</NavLink>

                </ul>

                <div className="hidden sm:flex ">
                    <ul className="flex items-center gap-4 text-sm">
                        {/* <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li> */}
                        <SessionLogic />

                    </ul>
                </div>

                {/* for mobile menu  */}
                <MobileMenu />
            </nav>

        </div>
    );
};

export default Navbar;