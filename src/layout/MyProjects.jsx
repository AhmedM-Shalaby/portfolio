import projects from "../models/dataProject";
import { Link } from "react-router-dom";

function MyProjects() {
  return (
    <div className="relative w-[90%] flex flex-wrap gap-4 m-auto truncate">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="block lg:w-[calc((100%/3)-12px)] sm:w-[calc((100%/2)-8px)] w-full"
          >
            <Link to={`/portfolio/${project.id}`}>
              <img
                alt=""
                src={project.imgSite}
                className=" w-full rounded-tr-3xl rounded-tl-3xl object-cover sm:h-64 lg:h-72"
              />
            </Link>
            <div className="mb-4 p-2 flex items-center justify-center gap-4 text-white bg-[var(--primary-color)]">
              <strong className="font-medium">{project.nameRepo}</strong>
              <span className=" block h-[2px] w-20 bg-[var(--color-word)]"></span>
              <a
                className="test text-white"
                target="_blank"
                rel="noopener noreferrer"
                href={project.LiveDemo}
              >
                <span className="rounded-full  px-2.5 py-0.5 text-sm whitespace-nowrap bg-[var(--color-word)]">
                  Live
                </span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyProjects;
