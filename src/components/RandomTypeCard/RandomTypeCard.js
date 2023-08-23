import { useEffect, useState } from "react";
import "./RandomTypeCard.css";

function RandomTypeCard({
  type_0,
  typeMedallionOne,
  doubleDamageTo,
  halfDamageFrom,
  noDamageFrom,
  halfDamageTo,
  noDamageTo,
  doubleDamageFrom,
  getMedallion,
}) {
  return (
    <div className='typecard'>
      <img
        className='rand__type-emblem_type_large'
        src={process.env.PUBLIC_URL + typeMedallionOne}
        alt='type1'
      />
      <h1 className='rand__heading'>{type_0}</h1>
      <h2 className='rand__heading_type_underline'>Strengths</h2>
      {doubleDamageTo[0] ? (
        <>
          <p className='rand__attribute-title rand__attribute-title_type_underline'>
            Does Double Damage To:
          </p>
          <div className='typecard__type-wrapper'>
            {doubleDamageTo.map((item) => {
              const medString = getMedallion(item);
              return (
                <div key={item} className='typecard__item-wrapper'>
                  <img
                    className='rand__type-emblem_type_small'
                    src={process.env.PUBLIC_URL + medString}
                    alt='type1'
                  />
                  <p className='typecard__type-item'>{item}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {halfDamageFrom[0] ? (
        <>
          <p className='rand__attribute-title rand__attribute-title_type_underline'>
            Take Half Damage From:
          </p>
          <div className='typecard__type-wrapper'>
            {halfDamageFrom.map((item) => {
              const medString = getMedallion(item);
              return (
                <div key={item} className='typecard__item-wrapper'>
                  <img
                    className='rand__type-emblem_type_small'
                    src={process.env.PUBLIC_URL + medString}
                    alt='type1'
                  />
                  <p className='typecard__type-item'>{item}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {noDamageFrom[0] ? (
        <>
          <p className='rand__attribute-title rand__attribute-title_type_underline'>
            Takes No Damage From:
          </p>
          <div className='typecard__type-wrapper'>
            {noDamageFrom.map((item) => {
              const medString = getMedallion(item);
              return (
                <div key={item} className='typecard__item-wrapper'>
                  <img
                    className='rand__type-emblem_type_small'
                    src={process.env.PUBLIC_URL + medString}
                    alt='type1'
                  />
                  <p className='typecard__type-item'>{item}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      <h2>Weaknesses</h2>
      {halfDamageTo[0] ? (
        <>
          <p className='rand__attribute-title rand__attribute-title_type_underline'>
            Does Half Damage To:
          </p>
          <div className='typecard__type-wrapper'>
            {halfDamageTo.map((item) => {
              const medString = getMedallion(item);
              return (
                <div key={item} className='typecard__item-wrapper'>
                  <img
                    className='rand__type-emblem_type_small'
                    src={process.env.PUBLIC_URL + medString}
                    alt='type1'
                  />
                  <p className='typecard__type-item'>{item}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {noDamageTo[0] ? (
        <>
          <p className='rand__attribute-title rand__attribute-title_type_underline'>
            Does No Damage To:
          </p>
          <div className='typecard__type-wrapper'>
            {noDamageTo.map((item) => {
              const medString = getMedallion(item);
              return (
                <div key={item} className='typecard__item-wrapper'>
                  <img
                    className='rand__type-emblem_type_small'
                    src={process.env.PUBLIC_URL + medString}
                    alt='type1'
                  />
                  <p className='typecard__type-item'>{item}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
      {doubleDamageFrom[0] ? (
        <>
          <p className='rand__attribute-title rand__attribute-title_type_underline'>
            Takes Double Damage from:
          </p>
          <div className='typecard__type-wrapper'>
            {doubleDamageFrom.map((item) => {
              const medString = getMedallion(item);
              return (
                <div key={item} className='typecard__item-wrapper'>
                  <img
                    className='rand__type-emblem_type_small'
                    src={process.env.PUBLIC_URL + medString}
                    alt='type1'
                  />
                  <p className='typecard__type-item'>{item}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default RandomTypeCard;
