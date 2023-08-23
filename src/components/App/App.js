//React
import { useEffect, useState } from "react";

// Styles
import "../../fonts/fonts.css";
import "./App.css";

// Components
import Header from "../Header/Header";
import RandomPokemonGenerator from "../RandomGenerator/RandomPokmonGenerator";

import mockServer from "../../mockServer/mockServer";

function App() {
  const [entryData, setEntryData] = useState({});
  const [imageNumber, setImageNumber] = useState("");
  const [typeMedallionOne, setTypeMedallionOne] = useState("");
  const [typeMedallionTwo, setTypeMedallionTwo] = useState("");

  function firstToLower(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
  }

  function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 1008) + 1;
    return randomNumber;
  }

  function getData() {
    const randomNumber = generateRandom();

    console.log(mockServer[randomNumber]);

    const stringToUse = "/official-artwork/" + (randomNumber + 1) + ".png";

    const typeString_1 = `/types/${firstToLower(
      mockServer[randomNumber].type_0
    )}-m.png`;
    if (mockServer[randomNumber].type_1) {
      const typeString_2 = `/types/${firstToLower(
        mockServer[randomNumber].type_1
      )}-m.png`;
      setTypeMedallionTwo(typeString_2);
    } else {
      setTypeMedallionTwo("");
    }

    console.log(mockServer[randomNumber].type_0);
    setImageNumber(stringToUse);
    setTypeMedallionOne(typeString_1);

    setEntryData(mockServer[randomNumber]);
  }
  //
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <RandomPokemonGenerator
        entryData={entryData}
        imageNumber={imageNumber}
        typeMedallionOne={typeMedallionOne}
        typeMedallionTwo={typeMedallionTwo}
        getData={getData}
      />
    </div>
  );
}

export default App;
/*

*/
