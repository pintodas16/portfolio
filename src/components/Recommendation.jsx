function Recommendation() {
  return (
    <section id="recommendation" className="border border-sky-600">
      {/* <!-- title  --> */}
      <div className=" flex flex-col gap-3  items-center mt-24 pb-12 ">
        <h5 className="font-semibold text-xl">My recommendations</h5>
        <h3 className="font-semibold text-4xl md:text-5xl">What people say</h3>
      </div>
      <div>
        {/* <!-- container  --> */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto p-4 md:px-8">
            {/* <!-- grid container  --> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {/* <!-- single recommendation  --> */}
              <div className=" lg:mt-12 ">
                <div className="bg-white relative border rounded-xl shadow-lg mt-16 mb-12 md:mb-32 md:max-w-sm mx-auto">
                  <div className="absolute -mt-14 w-full flex justify-center">
                    <div className="w-28 h-28">
                      <img
                        className="ring-1 w-28 h-28 rounded-full "
                        src="./images/pinto.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="px-6 mt-16 mb-6 text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora dolorem quo enim animi, at minus expedita nihil
                    excepturi architecto iure reiciendis fuga officia sunt ullam
                    cumque! Numquam quaerat dolores delectus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Quod aliquid
                    perferendis maxime exercitationem eius perspiciatis iure
                    nobis hic debitis sit quia minima illo distinctio numquam
                    nam sequi voluptates, voluptate esse vitae maiores, a rem
                    saepe, suscipit dolorem. Illo, dolores mollitia?
                  </p>
                  <div className=" h-0.5 bg-gray-100"></div>
                  <div className=" pt-2 pb-8 flex flex-col justify-center items-center">
                    <h5 className="text-2xl font-semibold capitalize">
                      Amzad hussain Tamim
                    </h5>
                    <p>Software Engineer</p>
                    <p>New Boxes</p>
                  </div>
                </div>
              </div>
              {/* <!-- single recommendation wrapper  --> */}

              <div className="">
                {/* <!-- single recommendation  --> */}
                <div className="bg-white relative border rounded-xl shadow-lg mt-16 mb-12 md:mb-32 md:max-w-sm mx-auto">
                  <div className="absolute -mt-14 w-full flex justify-center">
                    <div className="w-28 h-28">
                      <img
                        className="ring-1 w-28 h-28 rounded-full "
                        src="./images/pinto.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="px-6 mt-16 mb-6 text-center text-gray-600 text-base pt-3 font-normal  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora dolorem quo enim animi, at minus expedita nihil
                    excepturi architecto iure reiciendis fuga officia sunt ullam
                    cumque! Numquam quaerat dolores delectus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Quod aliquid
                    perferendis maxime exercitationem eius perspiciatis iure
                    nobis hic debitis sit quia minima illo distinctio numquam
                    nam sequi voluptates, voluptate esse vitae maiores, a rem
                    saepe, suscipit dolorem. Illo, dolores mollitia?
                  </p>
                  <div className="px-2 w-full h-0.5 bg-gray-100"></div>
                  <div className=" pt-2 pb-8 flex flex-col justify-center items-center">
                    <h5 className="text-2xl font-semibold capitalize">
                      shafakat kibria{" "}
                    </h5>
                    <p>Assosiate professor</p>
                  </div>
                </div>
              </div>

              <div className="lg:mt-12">
                {/* <!-- single recommendation  --> */}
                <div className="bg-white relative border rounded-xl shadow-lg mt-16 mb-12 md:mb-32 md:max-w-sm mx-auto">
                  <div className="absolute -mt-14 w-full flex justify-center">
                    <div className="w-28 h-28">
                      <img
                        className="ring-1 w-28 h-28 rounded-full "
                        src="./images/pinto.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="px-6 mt-16 mb-6 text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora dolorem quo enim animi, at minus expedita nihil
                    excepturi architecto iure reiciendis fuga officia sunt ullam
                    cumque! Numquam quaerat dolores delectus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Quod aliquid
                    perferendis maxime exercitationem eius perspiciatis iure
                    nobis hic debitis sit quia minima illo distinctio numquam
                    nam sequi voluptates, voluptate esse vitae maiores, a rem
                    saepe, suscipit dolorem. Illo, dolores mollitia?
                  </p>

                  <div className="px-2 w-full h-0.5 bg-gray-100"></div>

                  <div className=" pt-2 pb-8 flex flex-col justify-center items-center">
                    <h5 className="text-2xl font-semibold capitalize">
                      Ebrahim hossain
                    </h5>
                    <p>Assosiate professor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendation;
