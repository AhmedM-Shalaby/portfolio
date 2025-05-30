import { Link, useParams } from "react-router-dom";
import { objectLanguage } from "../models/iconsModels";
import Breadcrumb from "./BreadCrumb/BreadCrumb";
import { FetchApi } from "../api/httpHelper";
import { useQuery } from "@tanstack/react-query";
import MyLoader from "./Loading";

function ProjectDetails() {
  const { projectId } = useParams();
  const EndPoint = `projects/${projectId}`;
  const { data, isLoading } = useQuery({
    queryKey: ["sigelProject", projectId],
    queryFn: () => FetchApi(EndPoint),
  });

  if (isLoading) {
    return <MyLoader />;
  }
  const repo = data?.data.data;

  const nextProject = data?.data.next_Project;

  const prevProject = data?.data.previous_Project;

  const Mycrumbs = [
    { name: "Home", path: "/" },
    { name: "portfolio", path: "/portfolio" },
    { name: repo?.name, path: `/portfolio/${repo.id}` },
  ];

  return (
    <section className="container m-auto p-8 bg-[var(--secandaryColor)]  ">
      <div className="mb-4 w-fit">
        <Breadcrumb crumbs={Mycrumbs} />
      </div>
      <div className="sm:grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-130px)] gap-4 items-center ">
        <div className="lg:p-8 ">
          <div className=" my-4">
            <h2 className="text-[18px] font-bold text-gray-900 md:text-3xl dark:text-white">
              Name Repo : {repo.name}
            </h2>
            <p className="text-gray-500 md:mt-4 md:block dark:text-gray-400 text-[18px]">
              Category : {repo.category}
            </p>
            <div className="text-gray-500 md:mt-4  dark:text-gray-400 text-[18px] flex gap-4">
              Language :{" "}
              {repo.languages_used.map((lang) => (
                <span key={lang}>{objectLanguage[lang]}</span>
              ))}
            </div>

            <p className=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
              Description : {repo.description}
            </p>

            <div className="flex gap-3 mt-4 text-[12px] md:text-base ">
              <a
                target="_blank"
                href={repo.live_demo}
                className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded text-white "
              >
                GO To Live
              </a>
              <a
                target="_blank"
                href={repo.code_link}
                className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded  text-white"
              >
                GO To See Code
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full col-span-2">
          <img alt={repo.name} src={repo.images[0].image} className="h-full" />
          <div className="text-[var(--color-word)] flex flex-col md:flex-row justify-between  items-start md:items-center gap-4 text-[12px] md:text-base mt-5 ">
            <Link
              className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded text-white w-fit"
              to={`/portfolio/${prevProject.id}`}
            >
              Previous Repositories : {prevProject.name}
            </Link>
            <Link
              className="inline-block bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded text-white  w-fit"
              to={`/portfolio/${nextProject.id}`}
            >
              Next Repositories: {nextProject.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
