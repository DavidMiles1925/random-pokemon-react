import { useEffect, useState } from "react";
import RandomTypeCard from "../../RandomTypeCard/RandomTypeCard";
import "./RandomPokemonGenerator.css";

function RandomPokemonGenerator({
  entryData,
  imageNumber,
  typeMedallionOne,
  typeMedallionTwo,
  getData,
  doubleDamageTo,
  halfDamageFrom,
  noDamageFrom,
  halfDamageTo,
  noDamageTo,
  doubleDamageFrom,
}) {
  return (
    <div className='page-wrapper'>
      <div className='rand'>
        <button className='rand__button' onClick={getData}>
          New Pokemon!
        </button>

        <h1 className='rand__heading'>{entryData.name}</h1>
        <p className='rand__attribute'></p>
        <img
          className='rand__sprite'
          src={process.env.PUBLIC_URL + imageNumber}
          alt='sprite'
        ></img>
        <div className='rand__info-wrapper'>
          <p className='rand__attribute-title'>Pokedex Number: </p>
          <p className='rand__attribute'>{entryData.number}</p>
          <p className='rand__attribute-title'>Description: </p>
          <p className='rand__attribute'>{entryData.description}</p>
          <div className='rand__type-wrapper'>
            <p className='rand__attribute-title'>Type 1:</p>
            <img
              className='rand__type-emblem'
              src={process.env.PUBLIC_URL + typeMedallionOne}
              alt='type1'
            />
            <p className='rand__attribute_type_type'>{entryData.type_0}</p>
          </div>
          {entryData.type_1 ? (
            <div className='rand__type-wrapper'>
              <p className='rand__attribute-title'>Type 2:</p>
              <img
                className='rand__type-emblem'
                src={process.env.PUBLIC_URL + typeMedallionTwo}
                alt='type1'
              />
              <p className='rand__attribute_type_type'>{entryData.type_1}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <RandomTypeCard
        type_0={entryData.type_0}
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

export default RandomPokemonGenerator;
