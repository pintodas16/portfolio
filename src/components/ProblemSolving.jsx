import { onlineJudges } from "../utils/skills";
import OnlineJudgeCard from "./OnlineJudgeCard";
function ProblemSolving() {
  const judges = onlineJudges.map((judge) => (
    <OnlineJudgeCard judge={judge} key={judge.index} />
  ));
  return (
    <section id="problem-solving" className="bg-slate-50">
      {/* <!-- title  --> */}
      <div className=" flex flex-col gap-3  items-center pt-16 pb-12 ">
        <h5 className="fnt-custom font-normal text-xl">
          solved around 450+ problems
        </h5>
        <h3 className="font-custom font-semibold text-4xl md:text-5xl">
          problem solving
        </h3>
      </div>

      {/* <!-- languages  --> */}
      <div className=" ">
        {/* <!-- container  --> */}
        <div className="max-w-7xl mx-auto p-4 md:px-8">
          {/* <!-- problem solving  --> */}
          <div className=" mb-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">
              {judges}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProblemSolving;
