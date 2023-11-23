"use client"
import Layout from "@/app/dashboard/layout";
import { Typography, Button, Input } from "@material-tailwind/react";


const page = () => {

    return (
        <Layout>
            <main className="w-full px-5 md:px-20">
                <Typography className="text-center m-4 text-2xl font-semibold">Academic Peers</Typography>
                <form action="#" className="flex justify-center flex-col my-8">
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">Name</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Last</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">Academic Year</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Department ID</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">Department Name</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Title</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">First Name</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Last Name</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">Job Title</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Institution</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">Department</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Location</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">Email</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Phone</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    {/* SINGLE FIELD  */}
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full flex flex-col">
                            <label htmlFor="">Type</label>
                            <select type="text" name="" className="bg-gray-100 w-full md:max-w-[45%] rounded-sm p-1 mt-1 md:p-2">
                                <option value="Select">Select</option>
                                <option value="Indian">Indian</option>
                                <option value="Foreigner">Foreigner</option>

                            </select>
                        </div>
                    </section>
                    <Button className="w-24 mt-4">Submit</Button>
                </form>
            </main>
        </Layout>
    );
}

export default page;