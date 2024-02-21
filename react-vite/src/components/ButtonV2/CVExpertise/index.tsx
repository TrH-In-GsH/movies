import { myProfile } from "../../../data/myProfile"
import CVTitle from "../CVTitle"

type TExpertise = {
  name: string
  rank: number
}

const SingleItem = ({ name, rank }: TExpertise) => {
  const dots = [1, 2, 3, 4, 5]
  return (
    <li className="flex items-center justify-between w-50 ">
      <span className="name text-white ">{name}</span>
      <span className="rank flex ml-8">
        {
          dots.map((dot) => {
            if (dot <= rank) {
              return (
                <span className="w-[10px] h-[10px] rounded-full bg-amber-500 block mx-1"></span>
              )
            }
            return (
              <span key={dot} className="w-[10px] h-[10px] rounded-full bg-white block mx-1"></span>
            )
          })
        }
      </span>
    </li>
  )

}

const CVExpertise = () => {
  return (
    <div className="contract_list flex flex-col mt-10 mr-[0px]">
      <CVTitle title="EXPERTISE"/>
      <ul>
        {
          myProfile.expertise.map((item) => {
            return <SingleItem name={item.name} rank={item.rank} />
          })
        }
      </ul>
    </div>
  )
}

export default CVExpertise
