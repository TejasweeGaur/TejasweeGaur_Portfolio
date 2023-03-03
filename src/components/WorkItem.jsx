/** @format */

import React from "react";
import { v4 as uuidv4 } from "uuid";

const WorkItem = (work) => {
  let data = work.data;
  const handleAward = (awards) => {
    let awardArray = [];
    const award = awards;

    // Loop through each award in the "awards" array and extract the "title" key
    for (let j = 0; j < award.length; j++) {
      let award1 = awards[j];
      if (!(award1.title === undefined)) awardArray.push(award1);
    }

    return awardArray.length != 0
      ? awardArray.map((a) => {
          return (
            <ol key={uuidv4()} className='flex flex-col md:flex-row relative'>
              <li className='ml-4'>
                <p className='flex flex-wrap gap-4 flex-row  items-center justify-start text-xs md:text-sm'>
                  <span className='w-32 text-center inline-block px-1.5 py-0.5 text-sm font-semibold text-white bg-[#001b5e] rounded-md'>
                    {a.issueDate}
                  </span>
                  <span className='text-lg font-semibold text-[#001b5e]'>
                    {a.title}
                  </span>
                  <span className='my-1 text-sm font-medium leading-none text-stone-500'>
                    {a.issuedBy}
                  </span>
                </p>
                <p className='my-2 text-base font-normal text-stone-600'>
                  {a.details}
                </p>
              </li>
            </ol>
          );
        })
      : undefined;
  };
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li key={data.id} className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-500 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-4 flex-row  items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
            {data.year}
          </span>
          <span className='text-lg font-semibold text-[#001b5e]'>
            {data.title}
          </span>
        </p>
        <p className='flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm'>
          <span className='text-md font-semibold text-[#001b5e] ml-16'>
            {data.organization}
          </span>
          <span className='my-1 text-sm font-medium leading-none text-stone-500'>
            {data.duration}
          </span>
        </p>
        <p className='my-2 text-base font-normal text-stone-600'>
          {data.details}
        </p>
        {data.pointer.length > 1 ? (
          <div className='text-md font-semibold text-[#001b5e]'>
            Responsibilities: <br />
          </div>
        ) : undefined}
        {data.pointer.length > 1
          ? data.pointer.map((item) => {
              return (
                <ul
                  key={uuidv4()}
                  className='flex flex-col md:flex-row relative list-disc ml-4'
                >
                  <li className='ml-4 my-1 text-sm font-medium leading-none text-stone-500'>
                    {item}
                  </li>
                </ul>
              );
            })
          : undefined}
        {data.skills.length > 1 ? (
          <div className='text-md font-semibold text-[#001b5e]'>
            Skills: <br />
          </div>
        ) : undefined}
        {data.skills.length > 1
          ? data.skills.map((skill) => {
              return (
                <ul
                  key={uuidv4()}
                  className='flex flex-col md:flex-row relative list-disc ml-4'
                >
                  <li className='ml-4 my-1 text-sm font-medium leading-none text-stone-500'>
                    {skill}
                  </li>
                </ul>
              );
            })
          : undefined}
        {data.awards.length > 1 ? (
          <div className='text-md font-semibold text-[#001b5e]'>
            Awards: <br />
          </div>
        ) : undefined}
        {data.awards.length >= 1 ? (
          <div>{handleAward(data.awards)}</div>
        ) : undefined}
      </li>
    </ol>
  );
};

export default WorkItem;
