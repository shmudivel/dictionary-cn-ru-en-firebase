import React from "react";

const TableHeadWords = () => {
  return (
    <>
      <div class="  overflow-x-auto relative shadow-md">
        <table class="table-fixed w-full ">
          <thead class="text-md uppercase bg-stone-700 text-slate-200 ">
            <tr>
              <th scope="col" class="py-3 text-left px-[60px] ">
                English
              </th>
              <th scope="col" class="text-left px-[70px] ">
                Russian
              </th>
              <th scope="col" class="text-left px-[72px] ">
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
