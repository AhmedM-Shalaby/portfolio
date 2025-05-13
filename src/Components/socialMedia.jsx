import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
function SocialMedia() {
  return (
    <>
      <div
        title="Hyper Links"
        className="w-fit bg-[var(--primary-color)] p-2 rounded flex gap-4  items-center mt-8"
      >
        <a href="https://wa.me/201000207559" target="_blank" rel="noreferrer">
          <FaWhatsapp size={24} color="#25D366" className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-shalaby-26b326247/"
          target="_blank"
        >
          <FaLinkedin size={24} color="#0A66C2" className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/AhmedM-Shalaby"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={24} color="#fff" className="cursor-pointer" />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
