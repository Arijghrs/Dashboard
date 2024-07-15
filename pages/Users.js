"use client";

import { useState } from "react";
import SinglMentor from "../components/singleMentor";



const Mentors = () => {
  const [checked, isChecked] = useState(false);

  return (
    <div className="flex bg-neutral-50 ml-5 w-[1100px]">
      <div>
      <div className="mt-8 ml-14 ">
        <h1 className="font-semibold text-3xl mb-8 text-gray-700">Users</h1>
      </div>
      <div className="bg-white w-[975px] h-[813px] ml-20  border-2s">
        <div className="flex justify-between mb-7 mt-12 ml-4 mr-20">
            <div className="flex gap-1">
        <div>
            <select className=" w-28 mt-10 text-gray-500 bg-white border rounded-sm shadow-sm outline-none  ">
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
              <option>option4</option>
            </select>
          </div>
         
          </div>
          <div className="flex  relative mt-10">
            <input
              placeholder="Search by name , email or phone number..."
              type="text"
              className="w-[411px] h-9 pl-7  bg-neutral-100  rounded-sm shadow-sm outline-none"
            />

            <div className="absolute w-5 h-5 mt-2 ml-1">
              <img src="./assets/searchIcon.png" className="" />
            </div>
          </div>
        </div>

        <div className="ml-4">
          <table className="border-2 w-[900px]">
            <thead className="">
              <tr className="grid grid-cols-12 gap-4 justify-items-start py-2 bg-neutral-50 text-gray-700 ">
                <th className="col-span-1 w-[47px]  ">
                  <input type="checkbox" />
                </th>
                <th className="col-span-3 font-semibold">Name</th>
                <th className="col-span-3 font-semibold">Email</th>
                <th className="col-span-2 font-semibold">Phone</th>
                <th className="col-span-2 font-semibold">Creation date</th>
                <th className="col-span-1 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="">
              <SinglMentor />
              <SinglMentor />
              <SinglMentor />
              <SinglMentor />
              <SinglMentor />
            </tbody>
          </table>
        </div>
        <div className="w-[900px] h-[52px] mt-10 ml-4  bg-neutral-50 flex justify-between items-center">
          
          <div className="w-[161px] ml-4 flex">
          <h1 className=" pl-1 text-gray-600  font-semibold">5 </h1>
          <h1 className=" pl-2 text-gray-600  ">Results</h1>
          </div>
          <div className="">
            <button className="w-20  p-2 mr-4  bg-white border border-gray-100 text-gray-600 font-semibold text-sm">Previous</button>
            <button className="w-14  p-2 mr-4 bg-white border border-gray-100 text-gray-600 font-semibold text-sm">Next</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Mentors;
