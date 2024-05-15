function OnlineJudgeCard({ judge }) {
  return (
    <div className=" flex   items-center gap-4 p-4 border rounded-lg shadow-lg bg-gray-50">
      {/* <!-- image  --> */}
      <div>
        <img className="h-18 w-16" src={judge.src} alt="" />
      </div>
      <div className="w-0.5 h-full bg-gray-300"></div>
      {/* <!-- content  --> */}
      <div className="">
        <h5 className="text-2xl font-medium capitalize">{judge.name}</h5>
        <p className="text-base ">Handle:P_D_5( Max rating: 1381 )</p>
        <div className="flex justify-end mt-2">
          <a
            href="https://codeforces.com/profile/P_D_5"
            className="px-4 py-1 border border-gray-300 rounded-xl text-lg  capitalize "
          >
            more details
          </a>
        </div>
      </div>
    </div>
  );
}

export default OnlineJudgeCard;
