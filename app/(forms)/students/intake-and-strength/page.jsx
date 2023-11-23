"use client"
import Layout from "@/app/dashboard/layout";
import { Button, Typography } from "@material-tailwind/react";

const page = () => {
    return (
        <Layout>
            <main className="w-full px-5 md:px-20">
                <Typography className="text-center m-4 text-2xl font-semibold">Student Intake and Strength</Typography>
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
                            <label htmlFor="">Program Code</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Student Intake</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students within State (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students within State (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students outside State (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students outside State (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students within Country (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students within Country (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Economically Backward (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Economically Backward (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Socially Backward (SC/ST/OBC) (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Socially Backward (ST/SC/OBC) (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students receiving Schlorship from Government (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students receiving Schlorship from Government (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Students receiving Schlorship from Institution Funds (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Students receiving Schlorship from Institution Funds (FEMALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Students receiving Schlorship from Private Bodies (MALE)</label>
                            <input type="text" name="" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Students Students receiving Schlorship from Private Bodies (FEMALE)</label>
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