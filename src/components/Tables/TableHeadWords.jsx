import React from "react";

const TableHeadWords = () => {
  return (
    <>
      <div className="overflow-x-auto relative shadow-md">
        <table className="table-fixed w-full ">
          <thead className="sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase bg-stone-700 text-slate-200 ">
            <tr>
              <th scope="col" className="w-fit text-xs  ">
                English
              </th>
              <th scope="col" className="w-fit text-xs  ">
                Russian
              </th>
              <th scope="col" className="w-fit text-xs   ">
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
