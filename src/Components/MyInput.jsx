const AnimatedInput = ({ type = "text", label, Icon, func }) => {
  const { handleChange, values, errors, handelBlur, touched } = func;
  return (
    <div className="w-[100%] md:w-[50%]">
      <label className="group flex items-center ">
        <span className="mx-2 transition-colors duration-300 group-focus-within:text-[var(--color-word)] hidden sm:block ">
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



















// {
//     "status": "success",
//     "message": "Hello Ahmed you have successfully logged in.",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODNiNzUwMWU4YzYwYjIyM2QwYjM2OTkiLCJpYXQiOjE3NDg3NTY4MDUsImV4cCI6MTc0OTEwMjQwNX0.pyovqCfio9zC_OfCZN_yO6f9SKAkugmt8PS04i9NmRE",
//     "user": {
//         "_id": "683b7501e8c60b223d0b3699",
//         "name": "Ahmed",
//         "email": "boka@admin.com",
//         "phone": "01000207559"
//     }
//     numOfCartItems : 10,
//     idWishList :["id" , "id"]
// }
