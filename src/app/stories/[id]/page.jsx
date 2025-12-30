import React from 'react';

const StoryDetailsPage = async ({ params }) => {
    
    const {id} = await params; 
    console.log(id);


        const devStorys = [
          {
            id: 1,
            name: "Arif Hasan",
            designation: "Senior Frontend Developer",
            company: "TechNova Solutions",
            experience: "6+ Years",
            skills: ["React", "Tailwind CSS", "JavaScript", "UI/UX", "Next.js"],
            story:
              "Arif started his journey as a self-taught developer while studying computer science. He spent countless nights learning JavaScript and building small projects to sharpen his skills. Over time, his passion for clean design and smooth user experiences helped him land roles in multiple startups. Arif believes that frontend development is not just about writing code but about understanding people. Today, he focuses on creating scalable, accessible, and visually appealing web applications while mentoring junior developers to grow confidently in the tech industry.",
            about:
              "Arif Hasan is a highly experienced frontend developer with a strong focus on modern JavaScript frameworks and responsive design. Over the past six years, he has worked with startups and mid-sized companies to build fast, user-friendly web applications. His expertise includes React, Tailwind CSS, and Next.js, allowing him to transform complex ideas into intuitive interfaces. Arif values clean code, performance optimization, and accessibility. Beyond technical skills, he enjoys collaborating with designers and backend developers to deliver complete solutions. In his free time, he writes technical blogs, explores new frontend tools, and contributes to open-source projects.",
            image: "https://via.placeholder.com/300x300?text=Arif",
          },
          {
            id: 2,
            name: "Nusrat Jahan",
            designation: "Product Designer",
            company: "Creative Labs",
            experience: "5 Years",
            skills: [
              "Figma",
              "UI Design",
              "UX Research",
              "Prototyping",
              "Design Systems",
            ],
            story:
              "Nusrat discovered her passion for design while working on campus projects during university. She realized that good design could simplify complex problems and improve everyday experiences. Starting as a junior designer, she learned the importance of user research and iterative design. Over the years, Nusrat has led multiple design projects, collaborating closely with developers and product managers. Her journey has been driven by curiosity, empathy, and a constant desire to create meaningful digital products that users genuinely enjoy.",
            about:
              "Nusrat Jahan is a product designer who specializes in creating intuitive and user-centered digital experiences. With five years of professional experience, she has worked on mobile apps, web platforms, and internal tools for diverse clients. She strongly believes that design decisions should be backed by user research and data. Nusrat is skilled in Figma, prototyping, and building scalable design systems. She enjoys conducting usability testing and refining designs based on feedback. Outside of work, she mentors aspiring designers and stays updated with global design trends.",
            image: "https://via.placeholder.com/300x300?text=Nusrat",
          },
          {
            id: 3,
            name: "Mahmud Rahman",
            designation: "Backend Engineer",
            company: "CloudCore Ltd.",
            experience: "7+ Years",
            skills: [
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "API Security",
            ],
            story:
              "Mahmud began his career as a backend engineer after realizing his interest in system architecture and data flow. He enjoyed solving logical problems and optimizing server performance. Early in his career, he worked on small APIs and gradually moved on to large-scale systems. Through trial and error, Mahmud learned the importance of security, scalability, and documentation. His journey reflects a deep commitment to building reliable backend services that power real-world applications used by thousands of users daily.",
            about:
              "Mahmud Rahman is a seasoned backend engineer with over seven years of experience in building scalable and secure server-side applications. He has extensive knowledge of Node.js, Express, and database systems like MongoDB and PostgreSQL. Mahmud focuses on writing clean, maintainable code and designing efficient APIs. He has worked on cloud-based architectures and performance optimization for high-traffic platforms. Passionate about learning, he regularly explores new backend technologies and best practices. He also enjoys mentoring junior developers and reviewing system designs.",
            image: "https://via.placeholder.com/300x300?text=Mahmud",
          },
        ];
    
    const singleStory = devStorys.find((story)=> story.id == id);
    if (!singleStory) {
            return <h2>Sotry Not Found</h2>
    }
     const {
       name,
       designation,
       company,
       experience,
       skills,
       story,
       about,
       image,
     } = singleStory;
    return (
      <div className="max-w-4xl mx-auto card bg-base-100 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Image */}
          <img
            src={image}
            alt={name}
            className="w-full md:w-64 h-64 object-cover rounded-xl"
          />

          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-base text-gray-500 mt-1">
              {designation} @ <span className="font-medium">{company}</span>
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="badge badge-accent">{experience}</span>
              {skills.map((skill, index) => (
                <span key={index} className="badge badge-outline badge-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="divider m-0"></div>

        {/* Story Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Story</h3>
          <p className="leading-relaxed text-sm md:text-base">{story}</p>
        </div>

        {/* About Section */}
        <div className="p-6 pt-0">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="leading-relaxed text-sm md:text-base">{about}</p>
        </div>

        {/* Footer */}
        <div className="card-actions justify-end px-6 pb-6">
          <button className="btn btn-primary">Contact</button>
          <button className="btn btn-outline">Back</button>
        </div>
      </div>
    );
};

export default StoryDetailsPage;