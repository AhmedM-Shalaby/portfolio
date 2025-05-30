const AnimatedInput = ({ type = "text", label, Icon, func }) => {
  const { handleChange, values, errors, handelBlur, touched } = func;
  return (
    <div className="w-[100%] md:w-[50%]">
      <label className="group flex items-center ">
        <span className="mx-2 transition-colors duration-300 group-focus-within:text-[var(--color-word)]">
          {Icon}
        </span>
        <input
          type={type}
          placeholder={label}
          name={label}
          value={values[label]}
          onChange={handleChange}
          onBlur={handelBlur}
          className="w-full p-2 bg-[var(--secandaryColor)]  mb-2 outline-none  focus:border-l focus:border-[var(--color-word)]"
        />
      </label>

      {errors[label] && touched[label] ? (
        <p className="text-[12px] px-[30px] text-[#e53e3e]">{errors[label]}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default AnimatedInput;
