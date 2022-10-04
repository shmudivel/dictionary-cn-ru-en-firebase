import React, { useState } from "react";
import { db } from '../firebase';
import { 
    collection,
    addDoc, 
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `p-2 justify-between`,
  input: `border p-3 w-full text-xl`,
  button: `text-2xl p-2 w-full bg-stone-700 text-slate-200`,
  count: `text-center p-2`,
};

const NewWordForm = () => {
    // States
    const [english, setEnglish] = useState('');
    const [russian, setRussian] = useState('');
    const [chinese, setChinese] = useState('');
    const [pinyin, setPinyin] = useState('');



      // Create word
  const createWord = async (e) => {
    e.preventDefault(e);
    if (english === '' || russian === '' || chinese === '' || pinyin === '') {
      alert('Please enter a word');
      return;
    }
    await addDoc(collection(db, 'words'), {
      english: english,
      russian: russian,
      chinese: chinese,
      pinyin: pinyin,
      completed: false,
    });
    setEnglish('');
    setRussian('');
    setChinese('');
    setPinyin('');
  };

 


  return (
    <div>
      <form onSubmit={createWord} className={style.form}>
        <input
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          className={style.input}
          type="text"
          placeholder="English word"
        />

        <input
          value={russian}
          onChange={(e) => setRussian(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Russian word"
        />

        <input
          value={chinese}
          onChange={(e) => setChinese(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Chinese word"
        />

        <input
          value={pinyin}
          onChange={(e) => setPinyin(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Pinyin"
        />

        <button className={style.button}>Submit</button>
      </form>
    </div>
  );
};

export default NewWordForm;
