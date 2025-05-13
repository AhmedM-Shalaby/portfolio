import { Link, useParams } from "react-router-dom";
import projects from "../models/dataProject";
import { objectLanguage } from "../models/iconsModels";
import Breadcrumb from "./BreadCrumb/BreadCrumb";

function ProjectDetails() {
  const { projectId } = useParams();
  const projectIdx = projects.findIndex((element) => element.id == projectId);
  const project = projects[projectIdx];
  const lengthProjects = projects.length;
  const nextProject = projectIdx + 1 < lengthProjects ? projectIdx + 1 : 0;
  const prevProject = projectIdx - 1 >= 0 ? projectIdx - 1 : lengthProjects - 1;
  const Mycrumbs = [
    { name: "Home", path: "/" },
    { name: "portfolio", path: "/portfolio" },
    { name: project.nameRepo, path: `/portfolio/${project.id}` },
  ];

  return (
    <section className="p-8 bg-[var(--secandaryColor)]">
      <div className="mb-4 w-fit">
        <Breadcrumb crumbs={Mycrumbs} />
      </div>
      <div className="sm:grid grid-cols-1 lg:grid-cols-2  h-screen gap-4 ">
        <img
          alt={project.nameRepo}
          src={project.imgSite}
          className=" w-full  h-[400px] md:h-[600px] lg:h-[800px]"
        />
        <div className="lg:p-8">
          <div className="mx-auto max-w-6xl  my-4">
            <h2 className="text-[18px] font-bold text-gray-900 md:text-3xl dark:text-white">
              Name Repo : {project.nameRepo}
            </h2>
            <p className="text-gray-500 md:mt-4 md:block dark:text-gray-400 text-[18px]">
              Category : {project.categroy}
            </p>
            <div className="text-gray-500 md:mt-4  dark:text-gray-400 text-[18px] flex gap-4">
              Language :{" "}
              {project.topicsLang.map((lang) => (
                <span key={lang}>{objectLanguage[lang]}</span>
              ))}
            </div>

            <p className=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
              Description : {project.description}
            </p>

            <div className="flex gap-3 mt-4 text-[12px] md:text-base ">
              <a
                target="_blank"
                href={project.LiveDemo}
                className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded text-white "
              >
                GO To Live
              </a>
              <a
                target="_blank"
                href={project.linkCode}
                className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded  text-white"
              >
                GO To See Code
              </a>
            </div>
          </div>
        </div>
        <div className="text-[var(--color-word)] flex flex-col md:flex-row justify-between  items-start md:items-center gap-4 text-[12px] md:text-base ">
          <Link
            className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded text-white w-fit"
            to={`/portfolio/${projects[prevProject].id}`}
          >
            Previous Repositories : {projects[prevProject].nameRepo}
          </Link>
          <Link
            className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded text-white  w-fit"
            to={`/portfolio/${projects[nextProject].id}`}
          >
            Next Repositories: {projects[nextProject].nameRepo}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
