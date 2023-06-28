import React from "react";
import { ExpertOne, ExpertTwo, ExpertThree } from "../assets/Image";
import { ExpertCard, Heading } from "./subcomponents";

const OurExperts = () => {
  return (
    <section className="mt-[9rem]">
      <div className="w-11/12 mx-auto">
        <Heading
          plaintext={"OUR"}
          colored={"EXPERTS"}
          desc={"we are a combination of trained investment professionals"}
        />
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-9">
          <ExpertCard
            image={ExpertOne}
            name={"Jason McScott"}
            position={"C.E.O / founder"}
          />
          <ExpertCard
            image={ExpertTwo}
            name={"Darren Will"}
            position={"Trades consultant"}
          />
          <ExpertCard
            image={ExpertThree}
            name={"Lyon James"}
            position={"Trades expert"}
          />
        </section>
      </div>
    </section>
  );
};

export default OurExperts;
