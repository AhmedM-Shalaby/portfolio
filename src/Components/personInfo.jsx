import { FaUser, FaCloudDownloadAlt } from "react-icons/fa";
function PersonInfo() {
  const linkCV =
    "https://drive.google.com/file/d/1hC8R-_0Mz0oLRqg8MbQKZWsckQ1tmbdH/view?usp=drive_link";
  const handleClick = async () => {
    window.open(linkCV, "_blank");
    const response = await fetch(linkCV);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Ahmed_Shalaby_CV.pdf";
    link.click();
  };

  return (
    <>
      <div className="conent  mb-4 ">
        <h1 className="flex gap-2 items-center text-2xl my-4">
          <span>
            <FaUser />
          </span>
          Personal Info
        </h1>
        <p className="text-sm leading-8">
          I'm Ahmed Mohamed Shalaby Ahmed, a Freelance Front-End Developer from
          Obour City, Egypt. I love crafting user-friendly designs, clean code,
          and interactive web apps. With experience in React.js, Tailwind CSS,
          Bootstrap, and Django, I'm passionate about building modern and
          efficient websites.
        </p>
      </div>
      <div className="  rounded-lg  md:grid md:grid-cols-2    ">
        <div className="space-y-5 mb-5">
          <p>
            <strong>Name:</strong> Ahmed Mohamed Shalaby Ahmed
          </p>
          <p>
            <strong>Date of birth:</strong> 2001 / 12 / 7
          </p>
          <p>
            <strong>Nationality:</strong> Egyptian
          </p>
          <p>
            <strong>Freelance:</strong> Available
          </p>
        </div>

        <div className="space-y-5 mb-5">
          <p>
            <strong>Phone:</strong> 01000207559
          </p>
          <p>
            <strong>Address:</strong> Obour City, Egypt
          </p>
          <p>
            <strong>Email:</strong> shalabya279@gmail.com
          </p>
          <p>
            <strong>Spoken Languages:</strong> Arabic - English
          </p>
        </div>

        <div className="col-span-2 flex gap-4 mt-6">
          <button
            onClick={() => handleClick()}
            className="bg-yellow-500 hover:bg-yellow-600  font-semibold py-2 px-4 rounded flex items-center gap-2"
          >
            DOWNLOAD RESUME
            <FaCloudDownloadAlt />
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonInfo;
