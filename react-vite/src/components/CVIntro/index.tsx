

type TIntro = {
  firstname: string
  lastname: string
  job: string
}

const CVIntro = ({ firstname, lastname, job }: TIntro) => {
  return (
    <div className="mt-[90px] ml-[72px] text-sky-700	">
      <h1 className="text-5xl font-semibold		">{firstname}</h1>
      <h1 className="text-4xl my-1 font-normal	">{lastname}</h1>
      <p className="text-lg font-bold ">{job}</p>
    </div>
  )
}

export default CVIntro
