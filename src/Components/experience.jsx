function MyExperience() {
  return (
    <>
      <h1 className="text-2xl  font-bold mb-4">Volunteer experience</h1>
      <div className="bg-[var(--background-color)] p-4 rounded-lg shadow-md">
        <header className="mb-6">
          <h1 className="text-3xl font-bold ">Ministry of Interior</h1>
          <h2 className="text-xl  font-semibold mt-2">
            Expert in Full Stack Developer & Hardware Technical
          </h2>
        </header>

        <section className="mb-8">
          <h3 className="text-xl font-semibold  mb-4 border-b pb-2">
            Frontend Development
          </h3>
          <p className=" mb-4">Developed user interfaces using:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "Tailwind CSS",
              "React.js",
              "Material UI",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold  mb-4 border-b pb-2">
            Backend Development
          </h3>
          <p className="mb-4">Built and maintained backend systems with:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Python", "Django", "SQL Databases"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <p>
            Optimized application performance to ensure a seamless user
            experience.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            Hardware & Network Expertise
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Assisted in setting up and maintaining network infrastructure and
              system administration
            </li>
            <li>
              Assembled and maintained computer hardware, including
              troubleshooting and repairing hardware issues
            </li>
            <li>
              Installed and configured operating systems and software for
              optimal performance
            </li>
            <li>
              Diagnosed and fixed hardware and network-related issues to ensure
              smooth operations
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default MyExperience;
