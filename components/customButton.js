import React from 'react';

const CustomButton = ({ text, color }) => {
    return (
        <div className="flex justify-center relative mt-12 font-bold">
            <div className={`${color} pb-2 mt-1 mr-2 border border-black w-[175px] h-[42px]`} />
            <div className="absolute">
                <button className="border px-9 py-2 border-neutral-900 font-caprasimo text-xl bg-white w-[175px] h-[42px]">
                    {text}
                </button>
            </div>
        </div>
    );
};

export default CustomButton;
