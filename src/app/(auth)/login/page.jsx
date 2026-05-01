"use client";
import { authClient } from "@/lib/auth-client";
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
import { toast } from "react-toastify";


export default function SignInPage() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { email, password } = userData;

        const { data, error } = await authClient.signIn.email({
            email,
            password,

            callbackURL: "/",
        }, {
            onSuccess: (ctx) => {

                toast.success("Login successful! Welcome back!")
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

        <div className="h-screen flex justify-center items-center">

            <Card className="border mx-auto   py-10 mt-5 ">
                <h1 className="text-center text-2xl font-bold">Login</h1>

                <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
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
                        <Input placeholder="john@example.com" className={'rounded-lg'} />
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
                        <Input placeholder="Enter your password" className={'rounded-lg'} />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className={'w-full rounded-lg'}>
                            Login
                        </Button>

                    </div>
                </Form>
                <p>
                    Don&rsquo;t have an account? <Link href="/signup" className="text-blue-500 hover:underline">Register</Link>
                </p>

                <div className="flex justify-between items-center">
                    <div className="w-full h-0.5 bg-gray-300/90 rounded-full "></div>
                    <p className="px-3">Or</p>
                    <div className="w-full h-0.5 bg-gray-300/90 rounded-full"></div>
                </div>

                <Button onClick={handleGoogleAuth} variant="outline" className={'w-full flex items-center gap-2 rounded-lg font-bold bg-black text-white'}>Login with Google</Button>
            </Card>

        </div>
    );
}