function ContactUs() {
  return (
    <section className="bg-slate-50" id="contact-me">
      {/* <!-- title  --> */}
      <div className=" flex flex-col gap-3  items-center pt-16  ">
        <h5 className="font-semibold text-xl">My contact info</h5>
        <h3 className="font-semibold text-4xl md:text-5xl">Contact</h3>
      </div>
      {/* container div  */}
      <div className="max-w-7xl mx-auto p-4 md:px-8 mt-16 pb-12 ">
        {/* flex container  */}
        <div className="flex  flex-col-reverse gap-12 md:flex-row md:gap-20">
          {/* social media  */}
          <div className=" basis-3/12">
            <h5 className="font-semibold text-xl mb-6  border-dotted border-b-2 pb-2 text-center">
              Stay connected
            </h5>
            <div className="flex justify-center items-center gap-4 ">
              {/* linkedin  */}
              <span className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg">
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
              <span className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg">
                <i className="fa-brands fa-github"></i>
              </span>
              <span className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg">
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg">
                <i className="fa-brands fa-instagram"></i>
              </span>
            </div>
          </div>

          {/* contact me  */}
          <div className="basis-8/12 ">
            <form action="">
              <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center gap-6">
                  <div className="w-1/2 flex flex-col gap-1 ">
                    <label className="text-lg font-medium" htmlFor="">
                      Name
                    </label>
                    <input
                      className="mt-1 px-3 py-3 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-md hover:shadow-lg"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-1">
                    <label className="text-lg font-medium" htmlFor="">
                      Email
                    </label>
                    <input
                      className="mt-1 px-3 py-3 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-md hover:shadow-lg"
                      type="text"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-lg font-medium" htmlFor="">
                    Description
                  </label>
                  <textarea
                    className=" p-2.5  bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-xl shadow-md hover:shadow-lg"
                    placeholder="Write your thoughts here..."
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>

                {/* submit button  */}
                <div className="flex justify-center mt-4">
                  <button
                    className=" px-8 py-2 border-2 text-xl  border-blue-500 bg-blue-500 text-gray-50 font-medium rounded-lg transition-colors hover:bg-gray-100 hover:text-blue-600 shadow-md hover:shadow-lg"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
