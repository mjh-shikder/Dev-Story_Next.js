import React from 'react';

const StoryCard = ({ story }) => {
    
     const { name, designation, company, experience, skills, story, image } = story
      
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt={name}
          className="rounded-xl h-56 w-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-6">
        <h2 className="card-title text-xl">
          {name}
          <span className="badge badge-accent ml-2">{experience}</span>
        </h2>

        <p className="text-sm text-gray-500">
          {designation} @ <span className="font-medium">{company}</span>
        </p>

        {/* Story */}
        <p className="text-sm mt-3 line-clamp-4">{story}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span key={index} className="badge badge-outline badge-primary">
              {skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm btn-primary">Read Full Story</button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;