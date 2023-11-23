"use client"
import Layout from "@/app/dashboard/layout";
import { Button, Typography } from "@material-tailwind/react";

const page = () => {
    return (
        <Layout>
            <main className="w-full px-5 md:px-20">
                <Typography className="text-center m-4 text-2xl font-semibold">Faculty Count - PENDING</Typography>
                <form action="#" className="flex justify-center flex-col my-8">
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
                            <label htmlFor="">No. of Male Students (FULL TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students (FULL TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Male Students (PART TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students (PART TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Male Students awarded Ph.D. (FULL TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students awarded Ph.D. (FULL TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Male Students awarded Ph.D. (PART TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students awarded Ph.D. (PART TIME)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>

                    <Button className="w-24 mt-4">Submit</Button>
                </form>
            </main>
        </Layout>
    );
}

export default page;