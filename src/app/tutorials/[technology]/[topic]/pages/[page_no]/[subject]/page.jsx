import React from "react";

const TutorialPage = async ({ params }) => {
  const { technology, topic, page_no, subject } = await params;

  console.log({ technology, topic, page_no, subject });

  return (
    <div className="space-y-5">
      <div className="bg-linear-60 from-sky-50 to-sky-200 p-3 rounded text-gray-700 ">
        <h2 className="text-5xl font-bold ">{technology} Tutorials</h2>
      </div>
        <h2 className="text-5xl font-bold ">{topic} Tutorials</h2> <hr />
        <div className="flex justify-between ">
          <h3 className="font-bold ">{subject}</h3>
          <p>Page no: {page_no}</p>
        </div>
    </div>
  );
};

export default TutorialPage;
