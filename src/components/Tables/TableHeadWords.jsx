import React from "react";

const TableHeadWords = () => {
  return (
    <>
      <div className="overflow-x-auto relative shadow-md">
        <table className="table-fixed w-full ">
          <thead className=" uppercase bg-stone-700 text-slate-200 ">
            <tr>
              <th scope="col" className="w-fit sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl  ">
                English
              </th>
              <th scope="col" className="w-fit sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl  ">
                Russian
              </th>
              <th scope="col" className="w-fit sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl   ">
                Chinese
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default TableHeadWords;
