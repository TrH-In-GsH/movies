import { myProfile } from "../../../data/myProfile"
import CVTitle from "../CVTitle"

type TContract = {
    name: string;
    content: string;
};

const ContractItem = ({ name, content }: TContract) => {
    return (
        <li className="flex items-center mb-2 ml-2">
            <div className="w-[10px] h-[10px] rounded-full bg-white block mr-6 mb-6"></div>
            <div className="">
                <p className="name text-white">{name}</p>
                <p className="content text-white">{content}</p>
            </div>
        </li>
    );
};

const CVContract = () => {
    return (
        <div className="contract_list flex flex-col mt-10">
            <CVTitle title="CONTRACT"/>
            <ul>
                    {myProfile.contract.map((contractChild) => {
                        return <ContractItem name={contractChild.name} content={contractChild.content} />;
                    })}
            </ul>

        </div>
    )
}

export default CVContract
