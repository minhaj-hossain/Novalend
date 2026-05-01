"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUpPage() {

    const route = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { name, email, password, image } = userData;

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
        }, {
            onSuccess: (ctx) => {
                route.push("/")
                toast.success("Registration successful! Welcome aboard!")
            },
            onError: (ctx) => {
                toast.error(ctx.error.message);
            },

        })
    };

    const handleGoogleAuth = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <Card className="border mx-auto  py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Register</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" className={'w-full rounded-lg'} />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" className={'w-full rounded-lg'} />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" className={'w-full rounded-lg'} />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" className={'w-full rounded-lg'} />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit" className={'w-full rounded-lg'}>

                        Register
                    </Button>

                </div>

                <p>
                    Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>

                <div className="flex justify-between items-center">
                    <div className="w-full h-0.5 bg-gray-300/90 rounded-full "></div>
                    <p className="px-3">Or</p>
                    <div className="w-full h-0.5 bg-gray-300/90 rounded-full"></div>
                </div>

                <Button onClick={handleGoogleAuth} variant="outline" className={'w-full flex items-center gap-2 rounded-lg font-bold bg-black text-white'}>Login with Google</Button>
            </Form>
        </Card>
    );
}