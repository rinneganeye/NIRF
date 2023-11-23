'use client'
import { Sidebar } from "@/Components/Sidebar";
import Topnav from "@/Components/Topnav";

const Layout = ({ children }) => {
    return (
        <>
            <Topnav />
            <div className="h-screen flex">
                <Sidebar />
                <div className="flex justify-center h-fit min-h-screen w-full overflow-hidden">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;