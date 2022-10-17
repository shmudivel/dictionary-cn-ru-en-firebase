
import React, { useState,  } from "react";


import TableHeadWords from "./Tables/TableHeadWords";
import Word from "./Words";

import { db } from "../firebase";
import {
  
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-zinc-800`,
  container: `bg-zinc-500 max-w-[600px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-[#fffffe] p-2`,
  form: `p-2 justify-between`,
  input: `p-2 w-full text-xl bg-slate-100 text-white-200`,
  button: ` text-2xl p-2 w-full bg-stone-700 text-slate-200`,
  count: `text-center p-2`,
};

const SearchBar = () => {
    const [words, setWords] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault()


  }
    // Search
    const [searchTerm, setSearchTerm] = useState("");

      // Update word in firebase
  const toggleComplete = async (word) => {
    await updateDoc(doc(db, "words", word.id), {
      completed: !word.completed,
    });
  };

  // Delete word from firebase
  const deleteWord = async (id) => {
    await deleteDoc(doc(db, "words", id));
  };

  return (
    <div>
              <ul>
          <form onSubmit={handleSearchSubmit}>
            <label htmlFor="search">Search</label>
            <input
              className={style.input}
              type="text"
              id="search"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              required
            />
            <button>Search</button>
          </form>

          <TableHeadWords />

          {words
            .filter((word) => {
              if (searchTerm === "") {
              } else if (
                word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.russian.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.chinese.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return word;
              }
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
    </div>
  )
}

export default SearchBar
