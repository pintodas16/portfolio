function Footer() {
  return (
    <section className="bg-slate-50 ">
      <div className="max-w-7xl mx-auto py-10 md:px-8 ">
        <div>
          <p className="capitalize text-md text-center font-custom font-semibold ">
            {" "}
            &copy; {new Date().getFullYear()} All rights reserved{" "}
          </p>
          <p className="capitalize text-md text-center mr-2 font-custom font-semibold">
            Designed & Developed by{" "}
            <span className=" text-blue-600  ">Pinto Das</span>
            {/* <a
              href=""
              target="_blank"
              className="ml-2 text-blue-600 hover:border-b hover:border-b-gray-400 hover:pb-1"
            >
              pinto das
            </a> */}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
