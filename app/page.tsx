
import React from "react";
import Bubble from "./bubble/Bubble";
import Header from "./layout/Header";
import ProjectSection from "./projects/ProjectSection";

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-primary-dark min-h-screen w-full">
        <div className="relative w-11/12 flex flex-col justify-center max-w-[1600px] m-auto">
          <Header />
          <Bubble />
        </div>
      </div>
      <div>
        <ProjectSection />
      </div>
    </React.Fragment>
  );
}
