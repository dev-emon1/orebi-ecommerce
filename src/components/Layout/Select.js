import React from "react";

const Select = ({ handleChange, options, title, className }) => {
  return (
    <div className="items-center gap-x-3.5 md:flex">
      <span className="text-base font-normal text-[#767676]">{title}:</span>
      <select onChange={handleChange} className={className}>
        {options?.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

// <Flex className="items-center gap-x-3.5">
//   <span className="text-base font-normal text-[#767676]">Sort by:</span>
//   <div>
//     <select
//       id="countries"
//       class="block w-[239px] border border-[#f0f0f0] bg-gray-50 p-2.5 text-base font-normal text-[#767676] "
//     >
//       <option selected>Feature</option>
//       <option value="US">United States</option>
//     </select>
//   </div>
// </Flex>
