import * as React from 'react';
import { advent2data } from '../adventOfCode/data/advent2-data';

// const data = `A Y
// B X
// C Z`;
const data = advent2data;

const typesOpp = ['A', 'B', 'C'];
const typesMe = ['X', 'Y', 'Z'];

const rounds = data.split('\n');

function compareTypes(opp, me) {
  const oppI = typesOpp.findIndex((v) => opp === v);
  // const meI = typesMe.findIndex((v) => me === v);
  let meI;
  switch (me) {
    case 'X':
      meI = (oppI - 1) % 3;
      if (meI < 0) {
        meI = 2;
      }
      break;
    case 'Y':
      meI = oppI;
      break;
    case 'Z':
      meI = (oppI + 1) % 3;
      break;
  }

  const roundScore = meI + 1;

  let score = 0;

  if ((oppI + 1) % 3 === meI) {
    score += 6;
  } else if (oppI === meI) {
    score += 3;
  } else if (oppI === (meI + 1) % 3) {
    score += 0;
  }

  return roundScore + score; //[roundScore, score];
}

export function Advent2() {
  return (
    <>
      <h1>Rock, Paper, Scissors</h1>
      <pre>
        {rounds
          .map((v) => {
            const f = v.split(' ').map((v) => v[0]);
            return compareTypes(f[0], f[1]); // + ` ${f[0]} ${f[1]}`;
          })
          .reduce((v, n = 0) => v + n)}
        {/* .join('\n\n')} */}
      </pre>
    </>
  );
}
