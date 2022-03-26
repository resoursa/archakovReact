import './App.css';
import React from "react";

import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";


function App() {

  const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый"
  ];

  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак"
  ];

  const [curPhraseArr, setCurPhraseArr] = React.useState([]);

  let curPhrase

  // Random generator
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const generateClick = () => {
    // Select random item from arrays
    curPhrase = adjectivesArr[getRandomInt(adjectivesArr.length - 1)] + " " + nounsArr[getRandomInt(nounsArr.length - 1)]

    // Push generated phrase to array
    setCurPhraseArr([
      ...curPhraseArr,
      curPhrase
    ]);

    console.log(curPhrase);
    console.log(curPhraseArr);
  }

  // Clean array of phrases
  const cleanCurPhraseArr = () => {
    setCurPhraseArr([]);
  }

  const phraseList = curPhraseArr.map((phrase, index) =>
    <Phrase text={phrase} key={index}/>
  )

  return (
    <div className="wrapper">

      //Check if phrase is generated
      {curPhraseArr.length > 0 ? phraseList : <EmptyBlock />}

      <div className="text-center">
        <button className="btn btn_generate" onClick={generateClick}>Сгенерировать</button>

        <button className="btn btn_clear" onClick={cleanCurPhraseArr}>Очистить</button>
      </div>

    </div>
  );
}

export default App;
