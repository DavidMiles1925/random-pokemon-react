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

  const [doubleDamageToTwo, setDoubleDamageToTwo] = useState([]);
  const [halfDamageFromTwo, setHalfDamageFromTwo] = useState([]);
  const [noDamageFromTwo, setNoDamageFromTwo] = useState([]);
  const [halfDamageToTwo, setHalfDamageToTwo] = useState([]);
  const [noDamageToTwo, setNoDamageToTwo] = useState([]);
  const [doubleDamageFromTwo, setDoubleDamageFromTwo] = useState([]);

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
        return counter;
      }
      counter = counter + 1;
    });

    const medString = `/types/${firstToLower(typeServer[position].name)}-m.png`;
    return medString;
  }

  function newGetTypeData(type) {
    const singleItemList = typeServer.filter((item) => item.name === type);

    let typeObject = {};
    if (singleItemList[0]) {
      typeObject = singleItemList[0];
    } else {
      console.log("nothing in singleItemList");
    }
    return typeObject;
  }

  function getTypeData(randomNumber) {
    const singleItemList = typeServer.filter(
      (filter_item) =>
        firstToUpper(filter_item.name) === mockServer[randomNumber].type_0
    );
    const typeObject = singleItemList[0];

    setDoubleDamageTo(typeObject.double_damage_to);
    setHalfDamageFrom(typeObject.half_damage_from);
    setNoDamageFrom(typeObject.no_damage_from);
    setHalfDamageTo(typeObject.half_damage_to);
    setNoDamageTo(typeObject.no_damage_to);
    setDoubleDamageFrom(typeObject.double_damage_from);
    if (mockServer[randomNumber].type_1) {
      const singleItemListTwo = typeServer.filter(
        (filter_item) =>
          firstToUpper(filter_item.name) === mockServer[randomNumber].type_1
      );
      const typeObjectTwo = singleItemListTwo[0];

      setDoubleDamageToTwo(typeObjectTwo.double_damage_to);
      setHalfDamageFromTwo(typeObjectTwo.half_damage_from);
      setNoDamageFromTwo(typeObjectTwo.no_damage_from);
      setHalfDamageToTwo(typeObjectTwo.half_damage_to);
      setNoDamageToTwo(typeObjectTwo.no_damage_to);
      setDoubleDamageFromTwo(typeObjectTwo.double_damage_from);
    }
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
        newGetTypeData={newGetTypeData}
        doubleDamageTo={doubleDamageTo}
        halfDamageFrom={halfDamageFrom}
        noDamageFrom={noDamageFrom}
        halfDamageTo={halfDamageTo}
        noDamageTo={noDamageTo}
        doubleDamageFrom={doubleDamageFrom}
        doubleDamageToTwo={doubleDamageToTwo}
        halfDamageFromTwo={halfDamageFromTwo}
        noDamageFromTwo={noDamageFromTwo}
        halfDamageToTwo={halfDamageToTwo}
        noDamageToTwo={noDamageToTwo}
        doubleDamageFromTwo={doubleDamageFromTwo}
      />
    </div>
  );
}

export default App;
