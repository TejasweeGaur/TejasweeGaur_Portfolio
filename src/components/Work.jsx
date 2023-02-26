/** @format */

import React from "react";
import WorkItem from "./WorkItem";
import workData from "../assets/workData.json";
import { v4 as uuidv4 } from "uuid";

const Work = () => {
  const handleAward = (awards) => {
    let awardArray = [];
    const award = awards;

    // Loop through each award in the "awards" array and extract the "title" key
    for (let j = 0; j < award.length; j++) {
      let award1 = awards[j];
      if (!(award1.title === undefined)) awardArray.push(award1);
    }

    console.log("Award Array : ", awardArray.length);
    return awardArray.length != 0 ? (
      awardArray.map((a) => {
        return (
          <div key={uuidv4()}>
            <div>{a.title}</div>
            <div>{a.issuedBy}</div>
            <div>{a.issueDate}</div>
            <div>{a.details}</div>
          </div>
        );
      })
    ) : (
      <div>None</div>
    );
  };
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 pb-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] flex justify-center pb-4'>
        Work
      </h1>
      {workData.map((work) => {
        return <WorkItem key={work.id} data={work} />;
      })}
    </div>
  );
};

export default Work;
