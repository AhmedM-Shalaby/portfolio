import PropTypes from "prop-types";
import "./Box.css";
export default function Box({ content }) {
  const x = content.split("-");
  function CreatModel() {}

  return (
    <div
      className="Box flex justify-center items-center bg-secandaryColor cursor-pointer"
      onClick={CreatModel}
    >
      <div className="text-colorText lg:text-[40px] md:text-[30px] font-black relative truncate ">
        <span data-hover={x[0]}>{x[0]} &nbsp;</span>
        <span className="text-colorWord" data-hover={x[1]}>
          {x[1]}
        </span>
      </div>
    </div>
  );
}

Box.propTypes = {
  content: PropTypes.string,
};
