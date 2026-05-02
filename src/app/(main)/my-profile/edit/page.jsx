'use client'

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditProfile = () => {

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        try {
            await authClient.updateUser({
                image,
                name,
            })
            router.push('/my-profile')
            toast.success("Profile updated successfully!");

        } catch (error) {
            toast.error("Failed to update profile.");
        }
    }

    return (
        <div className="flex justify-center items-center mt-10">
            <Form className="flex w-96 flex-col  gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (value.trim() === "") {
                            return "Name is required";
                        }
                    }}


                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired

                    name="image"
                    type="url"

                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image URL" />
                    <FieldError />
                </TextField>


                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Update Profile
                    </Button>

                </div>
            </Form>

        </div>
    );
};

export default EditProfile;