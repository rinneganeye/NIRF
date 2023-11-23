"use client"

import {
    Card,
    Input,
    Alert,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";



const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, seterror] = useState('')
    const [open, setOpen] = useState(true);


    const handleSubmit = (e) => {

        if (!email || !password) {
            seterror("All fields are required")
        }

        e.preventDefault()
        const data = {
            'email': email,
            'password': password
        }
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <main className="grid mx-5">
                <Card className="mb-2" shadow={false} >
                    <Typography variant="h4" className="text-center" color="blue-gray" >
                        Sign In
                    </Typography>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input size="lg" label="Email" onChange={(e) => setEmail(e.target.value)} />
                            <Input type="password" size="lg" label="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <Button className="filled" color="blue" fullWidth size="md" onClick={handleSubmit} >Login</Button>
                        <Button className="mt-3" fullWidth size="md" onClick={handleSubmit}>Login as Nodal Officer</Button>
                    </form>
                    {
                        error &&
                        <Alert className="bg-red-600 text-white" open={open} onClose={() => setOpen(false)}>
                            {error}
                        </Alert>
                    }
                </Card>

            </main>

        </>
    )
}

export default SignIn;