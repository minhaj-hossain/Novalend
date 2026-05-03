"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import SessionLogic from "./SessionLogic";
import { Xmark } from "@gravity-ui/icons";
import { BiMenu } from "react-icons/bi";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="sm:hidden">
            <button onClick={() => setOpen(!open)}>
                {open ? <Xmark size={28} /> : <BiMenu size={28} />}
            </button>

            {open && (
                <div className="absolute left-0 top-full w-full bg-white shadow-xl border-b z-50">
                    <ul className="flex flex-col gap-4 text-sm p-4">
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/all-books"}>All Books</NavLink>
                        <NavLink href={"/my-profile"}>My Profile</NavLink>
                        <SessionLogic />
                    </ul>
                </div>
            )}
        </div>
    );
}