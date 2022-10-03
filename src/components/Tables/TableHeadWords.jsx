import React from "react";

const TableHeadWords = () => {
  return (
    <>
      <div class="overflow-x-auto relative">
        <table class="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="text-left px-[60px] ">
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
