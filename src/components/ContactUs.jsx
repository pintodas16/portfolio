import emailjs from "@emailjs/browser";
import { toast, Bounce } from "react-toastify";
import { useRef, useState } from "react";
function ContactUs() {
  const serviceKey = import.meta.env.VITE_SERVICE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceKey}`, `${templateId}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setDescription("");
          toast.success("I will contact you within very short while!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("There is something wrong happen!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };
  return (
    <section className="bg-zinc-100" id="contact-me">
      <div className=" flex  gap-2 justify-center  items-center pt-16  ">
        <span className="w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
        <h3 className="font-custom font-semibold text-xl sm:text-2xl md:text-4xl lg:text-5xl">
          Contact Me
        </h3>
        <span className="w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
      </div>
      <div className="max-w-7xl mx-auto p-4 md:px-8 mt-16 pb-12 ">
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-20">
          {/* social media  */}
          <div className=" basis-3/12 flex flex-col gap-6">
            {/* social media  */}
            <div>
              <h5 className="font-custom uppercase font-semibold text-xl mb-4  border-dotted border-b-2 pb-2 ">
                Stay connected
              </h5>
              <div className="flex justify-start items-center gap-4 ">
                {/* linkedin  */}
                <a
                  href="https://www.linkedin.com/in/pinto-das-01425a196/"
                  target="_blank"
                  className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/pintodas16"
                  target="_blank"
                  className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/pintodas/"
                  target="_blank"
                  className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/pintodas/"
                  target="_blank"
                  className="px-3 py-1 text-xl  border border-slate-300 hover:border-sky-500 hover:ring-sky-500  rounded-md  hover:ring-1 shadow-md hover:shadow-lg"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* email  */}
            <div>
              <h5 className="font-custom uppercase font-semibold text-xl mb-3  border-dotted border-b-2 pb-2 ">
                Email
              </h5>
              <div className="">
                <a
                  href="mailto:pinto.cse.lu"
                  target="_blank"
                  className="flex items-center gap-2 text-lg font-custom font-semibold hover:text-sky-500"
                >
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <p className="">pinto.cse.lu@gmail.com</p>
                </a>
              </div>
            </div>
          </div>

          {/* contact me  */}
          <div className="basis-8/12 ">
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                  <div className="w-full md:w-1/2 flex flex-col gap-2 ">
                    <label
                      className="text-lg font-custom uppercase font-medium"
                      htmlFor=""
                    >
                      Name
                    </label>
                    <input
                      className="mt-1 px-3 py-3 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-md hover:shadow-lg text-xl font-medium"
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col gap-2">
                    <label
                      className="text-lg font-custom uppercase font-medium"
                      htmlFor=""
                    >
                      Email
                    </label>
                    <input
                      className="mt-1 px-3 py-3 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-md hover:shadow-lg text-xl font-medium"
                      type="text"
                      name="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-lg font-custom uppercase font-medium"
                    htmlFor=""
                  >
                    Description
                  </label>
                  <textarea
                    className=" p-2.5  bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-xl font-medium shadow-md hover:shadow-lg "
                    placeholder="Write your thoughts here..."
                    id="w3review"
                    name="message"
                    rows="5"
                    cols="50"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* submit button  */}
                <div className="flex justify-center mt-4">
                  <button
                    className=" px-8 py-2 border-2 text-xl  border-blue-500 bg-blue-500 text-gray-50 font-medium rounded-lg transition-colors hover:bg-gray-100 hover:text-blue-600 shadow-md hover:shadow-lg font-custom "
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
