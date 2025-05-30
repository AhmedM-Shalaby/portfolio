import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function PhoneNumberInput({ label, func }) {
  const { handleChange, values, errors, handelBlur, touched } = func;

  return (
    <div className="w-[100%] md:w-[50%]">
      <PhoneInput
        placeholder={label}
        value={values[label]}
        onChange={(value) => handleChange({ target: { name: label, value } })}
        onBlur={handelBlur}
        defaultCountry="EG"
        international
        countryCallingCodeEditable={false}
        className="w-full p-2 bg-[var(--secandaryColor)]  mb-2 outline-none  focus:border-l focus:border-[var(--color-word)]"
      />
      {errors[label] && touched[label] ? (
        <p className="text-[12px] px-[30px] text-[#e53e3e]">{errors[label]}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default PhoneNumberInput;
