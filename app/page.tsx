
import React from "react";
import Bubble from "./bubble/Bubble";
import Header from "./layout/Header";

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-primary-dark">
        <Header />
        <Bubble />
      </div>
      <div>
        projects section
      </div>
    </React.Fragment>
  );
}
