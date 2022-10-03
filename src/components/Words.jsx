import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  overallDiv: `overflow-x-auto relative`,
  li: `  w-full text-gray-500 dark:text-gray-400`,
  // liComplete: `w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-slate-400 capitalize`,
  textEn: `max-w-[60px] px-[60px]`,
  textRu: `max-w-[70px] px-[70px]`,
  textCn: `max-w-[72px] px-[72px]`,
  // textComplete: ` cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  tr: `bg-white  dark:bg-gray-800 dark:border-gray-700`
};

const Word = ({ word, toggleComplete, deleteWord }) => {
  return (
    <>
    <div className={style.overallDiv}>
      <table className={word.completed ? style.liComplete : style.li}>
        <thead>
          {/* <input
            onChange={() => toggleComplete(word)}
            type="checkbox"
            checked={word.completed ? "checked" : ""}
          /> */}
          <tr className={style.tr}>
            <th
              onClick={() => toggleComplete(word)}
              className={word.completed ? style.textComplete : style.textEn}
            >
              {word.english}
            </th>
            <th
              onClick={() => toggleComplete(word)}
              className={word.completed ? style.textComplete : style.textRu}
            >
              {word.russian}
            </th>
            <th
              onClick={() => toggleComplete(word)}
              className={word.completed ? style.textComplete : style.textCn}
            >
              {word.chinese} {word.pinyin}
            </th>
          </tr>
          {/* <button onClick={() => deleteWord(word.id)}>
            {<FaRegTrashAlt />}
          </button> */}
        </thead>
      </table>
      </div>
    </>
  );
};

export default Word;
