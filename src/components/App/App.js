//React
import { useEffect, useState } from "react";

// Styles
import "../../fonts/fonts.css";
import "./App.css";

// Components
import Header from "../Header/Header";
import RandomPokemonGenerator from "../RandomPokemonGenerator/RandomPokmonGenerator";

import mockServer from "../../mockServer/mockServer";
import typeServer from "../../mockServer/typeServer";

function App() {
  const [entryData, setEntryData] = useState({});
  const [imageNumber, setImageNumber] = useState("");
  const [typeMedallionOne, setTypeMedallionOne] = useState("");
  const [typeMedallionTwo, setTypeMedallionTwo] = useState("");

  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [noDamageFrom, setNoDamageFrom] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);
  const [noDamageTo, setNoDamageTo] = useState([]);
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);

  function firstToUpper(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function firstToLower(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
  }

  function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 1008) + 1;
    return randomNumber;
  }

  function getMedallion(type) {
    let counter = 0;
    let position = 0;

    typeServer.map((item) => {
      if (item.name === type) {
        position = counter;
      }
      counter = counter + 1;
      return 0;
    });

    const medString = `/types/${firstToLower(typeServer[position].name)}-m.png`;
    console.log(medString);
    return medString;
  }

  function getTypeData(randomNumber) {
    const singleItemList = typeServer.filter(
      (filter_item) =>
        firstToUpper(filter_item.name) === mockServer[randomNumber].type_0
    );
    const typeObject = singleItemList[0];
    console.log(typeObject.double_damage_from);

    setDoubleDamageTo(typeObject.double_damage_to);
    setHalfDamageFrom(typeObject.half_damage_from);
    setNoDamageFrom(typeObject.no_damage_from);
    setHalfDamageTo(typeObject.half_damage_to);
    setNoDamageTo(typeObject.no_damage_to);
    setDoubleDamageFrom(typeObject.double_damage_from);
  }

  function getData() {
    const randomNumber = generateRandom();
    setEntryData(mockServer[randomNumber]);

    const stringToUse = "/official-artwork/" + (randomNumber + 1) + ".png";
    setImageNumber(stringToUse);

    const typeString_1 = `/types/${firstToLower(
      mockServer[randomNumber].type_0
    )}-m.png`;
    setTypeMedallionOne(typeString_1);

    if (mockServer[randomNumber].type_1) {
      const typeString_2 = `/types/${firstToLower(
        mockServer[randomNumber].type_1
      )}-m.png`;
      setTypeMedallionTwo(typeString_2);
    } else {
      setTypeMedallionTwo("");
    }

    getTypeData(randomNumber);
  }

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
        getMedallion={getMedallion}
        doubleDamageTo={doubleDamageTo}
        halfDamageFrom={halfDamageFrom}
        noDamageFrom={noDamageFrom}
        halfDamageTo={halfDamageTo}
        noDamageTo={noDamageTo}
        doubleDamageFrom={doubleDamageFrom}
      />
    </div>
  );
}

export default App;
