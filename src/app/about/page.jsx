import Link from "next/link";
import Title from "../../components/Title";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>Welcome to About</Title>
      <nav className="space-x-3.5">
        <Link href={'/about/contact'}>Contact</Link>
        <Link href={'/about/teams'}>Teams</Link>
      </nav>
    </div>
  );
};

export default About;
