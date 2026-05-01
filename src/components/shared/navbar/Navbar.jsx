
import Image from "next/image";
import NovalendLogo from "@/assets/Novalend-logo.png"
import NavLink from "./NavLink";
import SessionLogic from "./SessionLogic";

const Navbar = async () => {

    return (
        <div className="border-b px-2">
            <nav className="container flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-0 items-center relative">
                    <Image
                        src={NovalendLogo}
                        alt="logo"
                        loading="eager"
                        width={63}
                        height={63}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg absolute left-13">Novalend</h3>
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
                        
                        <SessionLogic />


                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;