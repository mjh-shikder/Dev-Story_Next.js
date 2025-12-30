import React from 'react';

const TitleTwo = ({children}) => {
    return (
      <div className="bg-linear-60 from-sky-50 to-sky-200 p-3 rounded text-gray-700 ">
        <h2 className="text-5xl font-bold ">{children}</h2>
      </div>
    );
};

export default TitleTwo;