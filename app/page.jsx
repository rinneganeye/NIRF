'use client'
import SignIn from "@/Components/SignIn";
import Topnav from "@/Components/Topnav";

export default function Home() {
  return (
    <>
      <Topnav />
      <main className="mx-auto mt-7 w-4/5 h-screen flex items-center flex-col justify-center md:flex-row-reverse md:justify-around md:mt-0 md:h-[89vh]">
        {/* Sign In  */}
        <SignIn />
        {/* Latest News  */}
        <section className="w-full mt-7 h-2/4 rounded-md overflow-hidden overflow-y-scroll min-w-[18rem] scrollbar-none md:w-2/5 lg:shadow-xl">
          <h2 className=" py-4 text-center sticky top-0 bg-white text-lg font-medium">Latest news</h2>
          <ul className="flex flex-col gap-4 pl-5 pt-3">
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et.</li>
          </ul>
        </section>
      </main>
    </>
  )
}
