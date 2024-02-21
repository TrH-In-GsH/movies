import { myProfile } from "../../../data/myProfile"
import CVTitle from "../CVTitle"

type TSkill = {
    name: string
}

const SkilItem = ({ name }: TSkill) => {
    return (
        <li className="flex items-center mb-2 ml-2">
            <div className="w-[10px] h-[10px] rounded-full bg-white block mr-6 mb-0"></div>
            <p className="text-white">{name}</p>
        </li>
    )
}

const CvPersonalSkill = () => {
    return (
        <div className="contract_list flex flex-col mt-10">
            <CVTitle title="PERSONAL SKILL"/>
            <ul>
                {
                    myProfile.personalskill.map((skillChild)=>{
                        return <SkilItem name={skillChild.name}/>
                    })
                }
            </ul>
        </div>
    )
}

export default CvPersonalSkill
