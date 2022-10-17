import React from "react";

const TableHeadWords = () => {
  return (
    <>
      <div className="overflow-x-auto relative shadow-md">
        <table className="table-fixed w-full ">
          <thead className="text-md uppercase bg-stone-700 text-slate-200 ">
            <tr>
              <th scope="col" className="py-3 text-left px-[60px] ">
                English
              </th>
              <th scope="col" className="text-left px-[70px] ">
                Russian
              </th>
              <th scope="col" className="text-left px-[72px] ">
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
