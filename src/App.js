import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Word from './Word';
import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `p-2 justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const [words, setWords] = useState([]);
  const [english, setEnglish] = useState('');
  const [russian, setRussian] = useState('');
  const [chinese, setChinese] = useState('');
  const [pinyin, setPinyin] = useState('');
  // Search 
  const [searchTerm, setSearchTerm] = useState('')

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

  // Read 'word' from firebase
  useEffect(() => {
    const q = query(collection(db, 'words'));
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
    await updateDoc(doc(db, 'words', word.id), {
      completed: !word.completed,
    });
  };

  // Delete word
  const deleteWord = async (id) => {
    await deleteDoc(doc(db, 'words', id));
  };



  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Words App</h3>
        <form onSubmit={createWord} className={style.form}>

          <input
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            className={style.input}
            type='text'
            placeholder='English word'
          />
                    
          <input
            value={russian}
            onChange={(e) => setRussian(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Russian word'
          />

          <input
            value={chinese}
            onChange={(e) => setChinese(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Chinese word'
          />

          <input
            value={pinyin}
            onChange={(e) => setPinyin(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Pinyin'
          />

          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          <input 
          onChange={event => {
            setSearchTerm(event.target.value)
            }} 
            className={style.input} 
            type="text" 
            placeholder="Search..."  
          />

          {words.filter((word) => {
            if (searchTerm === "") {
              return word
            } else if (
              word.english.toLowerCase().includes(searchTerm.toLowerCase())
              || word.russian.toLowerCase().includes(searchTerm.toLowerCase())
              || word.chinese.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
              return word
            }
            return ''
          }).map((word, index) => {
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
          <p className={style.count}>{`You have ${words.length} words`}</p>
        )}
      </div>
    </div>
  );
}

export default App;