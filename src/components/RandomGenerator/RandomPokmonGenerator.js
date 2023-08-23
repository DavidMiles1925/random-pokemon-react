import { useEffect, useState } from "react";
import "./RandomPokemonGenerator.css";

function RandomPokemonGenerator({
  entryData,
  imageNumber,
  typeMedallionOne,
  typeMedallionTwo,
  getData,
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
    </div>
  );
}

export default RandomPokemonGenerator;
// <TypeCard type_0={entryData.type_0} />
