import Link from "next/link";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex  justify-center items-center text-8xl ">
      <h2 className="text-8xl">
        L<span className="animate-spin">🎯</span>
      </h2>
      <h2 className="text-8xl">ADING Stories</h2>
    </div>
  );
};

export default loading;
