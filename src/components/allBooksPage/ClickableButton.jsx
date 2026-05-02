"use client";

import { Button } from "@heroui/react";
import { toast } from "react-toastify";

export default function ClickableButton({ available_quantity }) {
    return (
        <Button
            size="lg"
            radius="full"
            className="bg-black text-white dark:bg-white dark:text-black w-full md:w-auto px-10"
            isDisabled={available_quantity === 0}
            onClick={() => toast.success("You have successfully borrowed this book!")}
        >
            Borrow This Book
        </Button>
    );
}