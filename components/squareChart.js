import React from "react";



const SquareChart =({total,month,today,sTotal,sMonth,sToday,src})=>{
    
    return(
      <div className="">

        <div className="w-[180px] h-[158px] bg-white mt-16 ml-10  border-2 border-gray-100 text-gray-600">
            <div className="mb-2 mt-3 ml-3 ">
                <h2 className="font-medium  text-lg ">{total}</h2>
                <h1 className="font-bold  text-xl ">{sTotal} TND</h1>

            </div>
            <div className="  ">
              <div className="flex justify-between relative mt-4 pb-5">
                <div className="ml-2">
                  <p className="font-semibold text-[12px] ">{month} </p>
                  <h1 className="font-bold">{sMonth} TND</h1>
                </div>
                <div>
                  <h2 className="font-semibold text-[12px]">{today} </h2>
                  <h1 className="font-bold">{sToday} TND</h1>
                </div>
                <img src={src} className="absolute mt-8 ml-6 w-[145px]"/>
              </div>
                

            </div>
        </div>
      </div>

    );
};
export default SquareChart;