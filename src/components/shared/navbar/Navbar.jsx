
import Image from "next/image";
import Link from "next/link";
import NovalendLogo from "@/assets/Novalend-logo.png"
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={NovalendLogo}
                        alt="logo"
                        loading="eager"
                        width={60}
                        height={60}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">Novalend</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/all-books"}>All Books</NavLink>
                    <NavLink href={"/my-profile"}>My Profile</NavLink>

                </ul>

                <div className="flex ">
                    <ul className="flex items-center gap-4 text-sm">
                        {/* <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li> */}
                        <li>
                            <Link href={"/login"}>LogIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;