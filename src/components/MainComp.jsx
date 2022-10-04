import React, { useState, useEffect } from "react";
//import { AiOutlinePlus } from 'react-icons/ai';
import Word from "./Words";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import NewWordForm from "./Form /NewWordForm";
import TableHeadWords from "./Tables/TableHeadWords";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-l from-rose-900 to-purple-800`,
  container: `bg-slate-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `p-2 justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border text-2xl p-2 w-full bg-gradient-to-r from-rose-900 to-purple-400 hover:from-purple-400 hover:to-rose-900 text-slate-100`,
  count: `text-center p-2`,
};

const MainComp = () => {
  const [words, setWords] = useState([]);
  // Search
  const [searchTerm, setSearchTerm] = useState("");
  // show form button
  const [isForm, setIsForm] = useState(false);

  // Read 'word' from firebase
  useEffect(() => {
    const q = query(collection(db, "words"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let wordsArr = [];
      querySnapshot.forEach((doc) => {
        wordsArr.push({ ...doc.data(), id: doc.id });
      });
      setWords(wordsArr);
    });
    return () => unsubscribe();
  }, []);

  // Update word in firebase
  const toggleComplete = async (word) => {
    await updateDoc(doc(db, "words", word.id), {
      completed: !word.completed,
    });
  };

  // Delete word
  const deleteWord = async (id) => {
    await deleteDoc(doc(db, "words", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Air-supply shaft dictionary</h3>
        <button
          className={style.button}
          onClick={() => {
            setIsForm(!isForm);
          }}
        >
          {isForm ? "Close form" : "Add new word"}
        </button>

        {isForm ? <NewWordForm /> : " "}

        <ul>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className={style.input}
            type="text"
            placeholder="Search..."
          />

          <TableHeadWords />

          {words
            .filter((word) => {
              if (searchTerm === "") {
              } else if (
                word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.russian.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.chinese.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
              }
              return word;
            })
            .map((word, index) => {
              return (
                <Word
                  key={index}
                  word={word}
                  toggleComplete={toggleComplete}
                  deleteWord={deleteWord}
                />
              );
            })}
        </ul>

        {words.length < 1 ? null : (
          <p
            className={style.count}
          >{`Dictionary have ${words.length} words`}</p>
        )}
      </div>
    </div>
  );
};

export default MainComp;
