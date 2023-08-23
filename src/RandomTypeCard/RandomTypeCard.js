import { useEffect, useState } from "react";
import "./RandomTypeCard.css";

function RandomTypeCard({
  type_0,
  doubleDamageTo,
  halfDamageFrom,
  noDamageFrom,
  halfDamageTo,
  noDamageTo,
  doubleDamageFrom,
}) {
  return (
    <div className='typecard'>
      <h1>{type_0}</h1>
      <h2>Strengths</h2>
      {doubleDamageTo[0] ? (
        <>
          <p>Does Double Damage To:</p>
          <div className='typecard__type-wrapper'>
            {doubleDamageTo.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {halfDamageFrom[0] ? (
        <>
          <p>Take Half Damage From:</p>
          <div className='typecard__type-wrapper'>
            {halfDamageFrom.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {noDamageFrom[0] ? (
        <>
          <p>Takes No Damage From:</p>
          <div className='typecard__type-wrapper'>
            {noDamageFrom.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      <h2>Weaknesses</h2>
      {halfDamageTo[0] ? (
        <>
          <p>Does Half Damage To:</p>
          <div className='typecard__type-wrapper'>
            {halfDamageTo.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {noDamageTo[0] ? (
        <>
          <p>Does No Damage To:</p>
          <div className='typecard__type-wrapper'>
            {noDamageTo.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
      {doubleDamageFrom[0] ? (
        <>
          <p>Takes Double Damage from:</p>
          <div className='typecard__type-wrapper'>
            {doubleDamageFrom.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default RandomTypeCard;
