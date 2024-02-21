import CVIntro from "../../CVIntro";
import CVAboutMe from "../CVAboutMe";
import CVContract from "../CVContract";
import CVEducation from "../CVEducation";
import CVExperience from "../CVExperience";
import CVExpertise from "../CVExpertise";
import CvPersonalSkill from "../CvPersonalSkill";

const MyCV = () => {
  return (
    <div className="flex w-200 mt-2 mb-20 drop-shadow-2xl bg-white rounded	">
      <div className="col_left w-[350px] bg-indigo-600 flex flex-col items-center	drop-shadow-2xl ">
        <img className="w-[210px] h-[210px] rounded-full mt-10" src="https://i.wpimg.pl/1280x/filerepo.grupawp.pl/api/v1/display/embed/617a50b7-514b-4944-aac8-3dca16aa2aec" alt="" />
        <CVContract/>
        <CVExpertise />
        <CvPersonalSkill/>
      </div>

      <div className="col_right flex-1 pr-8">
        <CVIntro firstname="AMANDA" lastname="CASSIE" job="WEB DEVELOPER"/>
        <CVAboutMe/>
        <CVEducation/>
        <CVExperience/>
      </div>
    </div>
  );
};

export default MyCV;