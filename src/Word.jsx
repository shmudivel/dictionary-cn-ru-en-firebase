import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Word = ({ word, toggleComplete, deleteWord }) => {
  return (
    <li className={word.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input onChange={() => toggleComplete(word)} type='checkbox' checked={word.completed ? 'checked' : ''} />


        
        
        <p onClick={() => toggleComplete(word)} className={word.completed ? style.textComplete : style.text}>
          {word.english}
        </p>
        <p onClick={() => toggleComplete(word)} className={word.completed ? style.textComplete : style.text}>
          {word.russian}
        </p>
        <p onClick={() => toggleComplete(word)} className={word.completed ? style.textComplete : style.text}>
          {word.chinese}
        </p>
      </div>
      <button onClick={() => deleteWord(word.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Word;