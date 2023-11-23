"use client"
import Layout from "@/app/dashboard/layout";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";


const page = () => {

    const initialDetails = {
        academicYear: "",
        deptId: "",
        numOfMaleStudentsFt: "",
        numOfFemaleStudentsFt: "",
        numOfMaleStudentsPt: "",
        numOfFemaleStudentsPt: "",
        numOfMaleStudentsPhdFt: "",
        numOfFemaleStudentsPhdFt: "",
        numOfMaleStudentsPhdPt: "",
        numOfFemaleStudentsPhdPt: "",
    }
    const [details, setdetails] = useState(initialDetails)

    const handleChange = (e) => {
        const { name, value } = e.target
        setdetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(),
            console.log(details);

    }

    return (
        <Layout>
            <main className="w-full px-5 md:px-20">
                <Typography className="text-center m-4 text-2xl font-semibold">PHD Details</Typography>
                <form onSubmit={handleSubmit} className="flex justify-center flex-col my-8">
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">Academic Year</label>
                            <input type="text" name="academicYear" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">Department ID</label>
                            <input type="text" name="deptId" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Male Students (FULL TIME)</label>
                            <input type="text" name="numOfMaleStudentsFt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students (FULL TIME)</label>
                            <input type="text" name="numOfFemaleStudentsFt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Male Students (PART TIME)</label>
                            <input type="text" name="numOfMaleStudentsPt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students (PART TIME)</label>
                            <input type="text" name="numOfFemaleStudentsPt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Male Students awarded Ph.D. (FULL TIME)</label>
                            <input type="text" name="numOfMaleStudentsPhdFt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students awarded Ph.D. (FULL TIME)</label>
                            <input type="text" name="numOfFemaleStudentsPhdFt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                    </section>
                    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
                        <div className="fields w-full">
                            <label htmlFor="">No. of Male Students awarded Ph.D. (PART TIME)</label>
                            <input type="text" name="numOfMaleStudentsPhdPt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                        <div className="fields w-full">
                            <label htmlFor="">No. of Female Students awarded Ph.D. (PART TIME)</label>
                            <input type="text" name="numOfFemaleStudentsPhdPt" className="bg-gray-100 w-full rounded-sm p-1 mt-1 md:p-2" onChange={handleChange} />
                        </div>
                    </section>
                    <button className="w-fit px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-50 text-blue-600 inline-block">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white">Submit</span>
                    </button>
                </form>
            </main>
        </Layout>
    );
}

export default page;