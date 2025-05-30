import { FaUser, FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import AnimatedInput from "../Components/MyInput";
import SocialMedia from "../Components/socialMedia";
import { useFormik } from "formik";
import inTouchSchema from "../models/inTouchSchema";
import PhoneNumberInput from "../Components/inputPhone";
import { sendContactForm } from "../api/httpHelper";
import { useMutation } from "@tanstack/react-query";
import { Slide, toast } from "react-toastify";
function InTouch() {
  const initialValues = {
    UserName: "",
    Email: "",
    Phone: "",
    Subject: "",
    message: "",
  };
  const { mutate, isPending } = useMutation({
    mutationFn: sendContactForm,
    onMutate: () => {
      toast.loading("Sending", {
        toastId: "contactForm",
        position: "top-right",
        theme: "dark",
      });
    },
    onSuccess: () => {
      toast.update("contactForm", {
        render: `${"Thank You For Trust Me "}`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
        transition: Slide,
      });
    },
    onError: () => {
      toast.update("contactForm", {
        render: "Errors",
        type: "error",
        isLoading: false,
        autoClose: 2000,
        transition: Slide,
      });
    },
  });
  const onSubmit = (values) => {
    const body = {
      name: values.UserName,
      email: values.Email,
      phone_number: values.Phone,
      subject: values.Subject,
      message: values.message,
    };
    mutate(body);
    formik.resetForm({
      UserName: "",
      Email: "",
      Phone: "",
      Subject: "",
      message: "",
    });
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
          <PhoneNumberInput
            type="text"
            label="Phone"
            Icon={<FaPhoneAlt />}
            func={formik}
          />
          <AnimatedInput label="Subject" func={formik} Icon={<FaComments />} />

          <textarea
            className="w-full p-2 bg-[var(--secandaryColor)] outline-none rounded"
            placeholder="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="message"
            rows="8"
          ></textarea>
          {formik.errors.message && formik.touched.message ? (
            <p className="w-full text-[12px] py-3 px-[30px] text-[#e53e3e]">
              {formik.errors.message}{" "}
            </p>
          ) : (
            ""
          )}
          <button
            type="submit"
            className={`text-white p-2 rounded  mt-4 hover:bg-[var(--color-word)] active:bg-[var(--color-word)] font-bold  transition-all duration-300 ${
              isPending
                ? "bg-[var(--color-word)]"
                : "bg-[var(--secandaryColor)]"
            }`}
          >
            {!isPending ? "Send Message" : "Sending "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default InTouch;
