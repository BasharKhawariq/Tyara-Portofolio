export default function Experiences() {
  const experiencesData = [
    {
      id: 1,
      company: "Sekawan Media (Internship)",
      duration: "August 2024 - February 2025",
      roles: [
        {
          role: "UI/UX Designer",
          description: [
            "Created and maintained RESTful APIs using Django, ensuring efficient and secure data handling and communication between the front-end and back-end systems.",
            "Implemented Redis for caching to enhance the speed and performance of the applications, reducing the load on the database Used Docker to containerize applications, ensuring consistent environments across different stages of development, testing, and production.",
            "Automated deployment processes using Docker, ensuring smooth and efficient updates to the applications.",
            "Identified and resolved performance bottlenecks, security issues, and other bugs to ensure the reliability and efficiency of the applications.",
            "Worked closely with front-end developers, designers, and other team members to deliver high-quality software solutions.",
          ],
        },
      ],
    },
    {
      id: 2,
      company: "PT. Sigma Cipta Caraka (Telkomsigma)",
      duration: "July 2023 - July 2024",
      roles: [
        {
          role: "Backend Web Developer",
          description: [
            "Created and maintained RESTful APIs using Django, ensuring efficient and secure data handling and communication between the front-end and back-end systems.",
            "Implemented Redis for caching to enhance the speed and performance of the applications, reducing the load on the database Used Docker to containerize applications, ensuring consistent environments across different stages of development, testing, and production.",
            "Automated deployment processes using Docker, ensuring smooth and efficient updates to the applications.",
            "Identified and resolved performance bottlenecks, security issues, and other bugs to ensure the reliability and efficiency of the applications.",
            "Worked closely with front-end developers, designers, and other team members to deliver high-quality software solutions.",
          ],
        },
      ],
    },
    {
      id: 3,
      company: "CV. Sinara Sukses Bersama (Internship)",
      duration: "June 2022 - November 2022",
      roles: [
        {
          role: "Programmer",
          description: [
            "Collaborated with design team to create user-friendly interfaces, providing feedback for better user experience. Participated in brainstorming and design reviews to ensure best UI/UX practices.",
            "Collaborated on JavaScript development, integrating interactive elements and optimizing performance. Gathered and applied user feedback to enhance interface design and functionality.",
            "Documented design and development processes, ensuring clear communication and project alignment.",
          ],
        },
        {
          role: "Graphic Designer and Content Creator",
          description: [
            "Created visually engaging content for social media platforms, including Instagram and TikTok, using Adobe Illustrator, Figma, and Canva.",
            "Designed graphics, illustrations, and videos tailored for each platform's audience.",
            "Developed creative concepts and ideas for daily content updates, aligning with brand identity and marketing goals.",
            "Designed posters for open hiring announcements and promotional campaigns, ensuring professional and attractive visual communication.",
            "Collaborated with the marketing team to ensure consistency across visual and written content.",
            "Analyzed content performance metrics to optimize engagement and reach on social media channels.",
          ],
        },
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="relative min-h-screen bg-white h-auto w-full text-[#42434F] py-10 flex flex-col items-center"
    >
      <h2 className="text-7xl text-[#945F7D] font-bold mb-12 font-[family-name:var(--font-AlomaniByCattobiens-Regular)]">experience</h2>
      <div className="max-w-6xl w-full">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="mb-12 relative">
            <h3 className="text-lg ml-2 md:ml-0 lg:ml-0 font-semibold">{exp.company}</h3>
            {/* Timeline Connector */}
            <div className="absolute ml-2 md:ml-0 lg:ml-0 left-3 top-7 h-full border-l-2 border-[#42434F]"></div>
            {/* Timeline Dot */}
            <div className="absolute ml-2 md:ml-0 lg:ml-0 left-[0.3rem] top-11 w-4 h-4 bg-[#42434F] rounded-full"></div>
            <div className="ml-10">
              <p className="text-xs font-semibold text-gray-400 mt-4">
                {exp.duration}
              </p>
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">{role.role}</h4>
                  <ul className="list-disc mb-4">
                    {role.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
