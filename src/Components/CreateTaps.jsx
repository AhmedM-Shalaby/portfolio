import { Link } from "react-router-dom";

export const CreateTaps = ({ tap, func, active }) => {
  const { id, title, animationStyle, link } = tap;
  const TextContnet = title.split("-");
  const isActive = active === null;

  return (
    <Link
      to={link}
      className={`Box flex justify-center items-center bg-[var(--secandaryColor)]  cursor-pointer ${
        !isActive ? "hidden-tab " + animationStyle : animationStyle
      } `}
      onClick={() => func(id)}
    >
      <div
        className={`text-[var(--color-text)] lg:text-[40px] md:text-[30px] font-black relative truncate `}
      >
        <span data-hover={TextContnet[0]}>{TextContnet[0]} &nbsp;</span>
        <span className="text-[var(--color-word)]" data-hover={TextContnet[1]}>
          {TextContnet[1]}
        </span>
      </div>
    </Link>
  );
};
