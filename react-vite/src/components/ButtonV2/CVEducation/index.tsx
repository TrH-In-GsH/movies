
import { myProfile } from "../../../data/myProfile"
import CVTitleBlack from "../CVTitleBlack";

type TEducation = {
    major: string;
    type: string;
    time: string
};

const EducationItem = ( {major, type , time}:TEducation) =>{
    return(
        <li className="flex justify-between mb-4 text-neutral-500">
            <div>
                <p className="font-medium">{major}</p>
                <p>{type}</p>
            </div>
            <div>{time}</div>
        </li>
    )
}



const CVEducation = () => {
  return (
    <div className="ml-[72px] contract_list flex flex-col mt-10 mr-[0px]">
        <CVTitleBlack titleblack="EDUCATION"/>
        <ul>
            {
                myProfile.education.map((edu)=>{
                    return <EducationItem major={edu.major} type={edu.type} time={edu.time}/>
                })
            }
        </ul>
        
    </div>
  )
}

export default CVEducation

