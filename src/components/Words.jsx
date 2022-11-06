import React from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDotCircle } from "@fortawesome/free-solid-svg-icons";


const style = {
  overallDiv: ``,
  li: `border-b-[1px] table-fixed w-full`,
  tr: `w-full`,
  liComplete: `border-b-[1px] table-fixed w-full line-through`,
  
  textEn: `text-[0.50rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl p-2`,
  textRu: `text-[0.50rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl p-2`,
  textCn: `text-[0.50rem]  sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl p-2`,
  // textComplete: ` cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,

  // textComplete: `text-red-900 cursor-pointer line-through `
};

const Word = ({ word, toggleComplete, deleteWord }) => {
  return (
    <>
      <div className={style.overallDiv}>
        <table className={word.completed ? style.liComplete : style.li}>
          <thead>
            <tr className={style.tr}>
              <th className="w-2">
                <input
                className="h-5 w-5 rounded-xl"
                  onChange={() => toggleComplete(word)}
                  type="checkbox"
                  checked={word.completed ? "checked" : ""}
                />
              </th>

              <th
                // onClick={() => toggleComplete(word)}
                className={word.completed ? style.textComplete : style.textEn}
              >
                {word.english}
              </th>
              
              <th
                // onClick={() => toggleComplete(word)}
                className={word.completed ? style.textComplete : style.textRu}
              >
                {word.russian}
              </th>
              <th
                // onClick={() => toggleComplete(word)}
                className={word.completed ? style.textComplete : style.textCn}
              >
                {word.chinese}  {word.pinyin}
                
              </th>
              {/* <th className="w-6">
                <button onClick={() => deleteWord(word.id)}>
                  {<FaRegTrashAlt />}
                </button>
              </th> */}
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Word;
