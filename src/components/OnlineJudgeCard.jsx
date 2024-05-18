function OnlineJudgeCard({ judge }) {
  return (
    <div className="relative group flex items-center gap-4 p-4 border  rounded-lg shadow-md hover:shadow-xl bg-gray-50">
      {/* <!-- image  --> */}
      <div>
        <img className="h-18 w-16" src={judge.src} alt="" />
      </div>
      <div className="w-0.5 h-full bg-gray-300"></div>
      {/* <!-- content  --> */}
      <div className="">
        <h5 className="text-2xl font-medium capitalize">{judge.name}</h5>
        <p className="text-base mb-8">
          Handle: {judge.handle}{" "}
          {judge.maxRating ? `(Max rating: ${judge?.maxRating})` : ``}{" "}
        </p>
        <div className="absolute bottom-3 right-4 ">
          <a
            href={judge.link}
            target="_blank"
            className="  border-2 border-blue-500 bg-gray-50 text-blue-600 hover:bg-blue-500 hover:text-gray-50 rounded-md text-lg  capitalize "
          >
            <span className=" px-6 py-1 ">
              <i className="fa-solid fa-link"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OnlineJudgeCard;
