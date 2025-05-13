import { Link } from "react-router-dom";

function Breadcrumb({ crumbs }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex overflow-hidden rounded border-4 border-[#333333] bg-[var(--secandaryColor)] text-sm text-gray-700   dark:text-gray-200">
        {crumbs.map((element, index) => {
          const isLast = index + 1 === crumbs.length;
          return (
            <li
              key={index}
              className={`${
                isLast ? "" : "relative flex items-center"
              } text-[12px] md:text-[16px]`}
            >
              {!isLast && (
                <span className="absolute inset-y-0 -start-px h-10 w-4 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 bg-[#333333] "></span>
              )}

              <Link
                to={element.path}
                className={`block h-10 leading-10 transition-colors hover:text-gray-900 dark:hover:text-white ${
                  isLast ? "px-4 bg-[var(--color-word)]" : "pr-4 pl-6"
                }`}
                aria-label={element.name}
              >
                {element.name}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
