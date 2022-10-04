import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  overallDiv: ``,
  li: `border-b-2 table-fixed w-full`,
  tr: ``,
  // liComplete: `w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-slate-400 capitalize`,
  textEn: `py-5 px-5`,
  textRu: `py-5 px-5`,
  textCn: `py-5 px-5`,
  // textComplete: ` cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Word = ({ word, toggleComplete, deleteWord }) => {
  return (
    <>
      <div className={style.overallDiv}>
        <table className={word.completed ? style.liComplete : style.li}>
          <thead>
            <tr className={style.tr}>
              <th className="w-6">
                <input
                  onChange={() => toggleComplete(word)}
                  type="checkbox"
                  checked={word.completed ? "checked" : ""}
                />
              </th>
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
                {word.chinese}  {word.pinyin}
                
              </th>
              <th className="w-6">
                <button onClick={() => deleteWord(word.id)}>
                  {<FaRegTrashAlt />}
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Word;
