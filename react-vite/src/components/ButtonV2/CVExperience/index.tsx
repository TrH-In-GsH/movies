import { myProfile } from "../../../data/myProfile";
import CVTitleBlack from "../CVTitleBlack";


type TExperience = {
    job: string;
    company: string;
    time: string;
    desc: string;
};

const ExperienceItem = ({ job, company, time, desc }: TExperience) => {
    return (
        <li className=" mb-8 text-neutral-500">
            <div className="flex justify-between mb-2">
                <div>
                    <p className="font-medium">{job}</p>
                    <p>{company}</p>
                </div>
                <div>{time}</div>
            </div>
            <p>{desc}</p>
        </li>
    )
}


const CVExperience = () => {
  return (
    <div className="ml-[72px] contract_list flex flex-col mt-10 mr-[0px]">
      <CVTitleBlack titleblack="WORK EXPERIENCE"/>
      <ul>
        {
            myProfile.experience.map((exp)=>{
                return <ExperienceItem job={exp.job} company={exp.company} time={exp.time} desc={exp.desc}/>
            })
        }
      </ul>
    </div>
  )
}

export default CVExperience
