import { FaUser, FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import AnimatedInput from "../Components/MyInput";
import SocialMedia from "../Components/socialMedia";
import { useFormik } from "formik";
import inTouchSchema from "../models/inTouchSchema";

function InTouch() {
  const initialValues = {
    UserName: "",
    Email: "",
    Phone: "",
    Subject: "",
    message: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema: inTouchSchema,
    onSubmit,
  });
  return (
    <div className="w-[80%]  m-auto gap-4 bg-[var(--background-color)] p-4">
      <div className="masseg  text-white mb-4">
        <h4 className="text-[20px] font-bold capitalize test tracking-[2px] mb-4">
          Feel free to drop me a line
        </h4>
        <p>
          If you have any suggestion, project or even you want to say Hello..
          please fill out the form below and I will reply you shortly.
        </p>
        <SocialMedia />

        <form
          onSubmit={formik.handleSubmit}
          className="mt-3 bg-[var(--primary-color)] p-4 rounded flex flex-wrap justify-center "
        >
          <AnimatedInput
            type="text"
            label="UserName"
            Icon={<FaUser />}
            func={formik}
          />
          <AnimatedInput
            type="Email"
            label="Email"
            Icon={<FaEnvelope />}
            func={formik}
          />
          <AnimatedInput
            type="text"
            label="Phone"
            Icon={<FaPhoneAlt />}
            func={formik}
          />
          <AnimatedInput
            type="text"
            label="Subject"
            Icon={<FaComments />}
            func={formik}
          />
          {formik.errors.message && formik.touched.message ? (
            <p className="w-full text-[12px] py-3 px-[30px] text-[#e53e3e]">
              {formik.errors.message}{" "}
            </p>
          ) : (
            ""
          )}
          <textarea
            className="w-full p-2 bg-[var(--secandaryColor)] outline-none rounded"
            placeholder="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="message"
            rows="8"
          ></textarea>
          <button
            type="submit"
            className="bg-[var(--secandaryColor)]  text-white p-2 rounded  mt-4 hover:bg-[var(--color-word)] active:bg-[var(--color-word)] font-bold  transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default InTouch;
