
<>
    {/* FORM TITLE */}
    <Typography className="text-center m-4 text-2xl">Academic Peers</Typography>


    {/* FORM ROW */}
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

    {/* SINGLE FIELD  */}
    <section className="container w-full mb-3 flex flex-col gap-3 sm:flex-row sm:justify-around md:gap-16 md:mb-8 lg:gap-28">
        <div className="fields w-full flex flex-col">
            <label htmlFor="">Type</label>
            <input type="text" name="" className="bg-gray-100 w-full md:max-w-[45%] rounded-sm p-1 mt-1 md:p-2" />
        </div>
    </section>

    {/* DROP DOWN  */}
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

    {/* BUTTON  */}
    <button className="w-fit px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-50 text-blue-600 inline-block">
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
        <span className="relative group-hover:text-white">Submit</span>
    </button>
</>

