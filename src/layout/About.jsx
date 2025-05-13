import MyExperience from "../Components/experience";
import InterestsSection from "../Components/InterestsSection";
import PersonInfo from "../Components/personInfo";
import MySkills from "../Components/slider/Skills";

function About() {
  return (
    <div className="w-[80%] m-auto text-white">
      <PersonInfo />
      <div className="h-[2px]  bg-[#333] w-full my-[50px] "></div>
      <MySkills />
      <div className="h-[2px] bg-[#333] w-full my-[50px] "></div>
      <MyExperience />
      <div className="h-[2px] bg-[#333] w-full my-[50px] "></div>
      <InterestsSection />
    </div>
  );
}

export default About;
