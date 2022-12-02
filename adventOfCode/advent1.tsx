import * as React from 'react';
import { advent1data } from '../adventOfCode/data/advent1-data';

const data = advent1data;

const elves = data.split('\n\n').map((v) => {
  const calories = v.split('\n').map((v) => Number(v));
  return calories;
});

const elvesSorted = elves.sort((elf, elfB) => {
  return getTotalCaloriesOfElf(elfB) - getTotalCaloriesOfElf(elf);
});

function getTotalCaloriesOfElf(elf: number[]) {
  return elf.reduce((v, n = 0) => {
    return v + n;
  });
}

// const

export function Advent1() {
  const top3Elves = elvesSorted.slice(0, 3);
  let sumTop3 = 0;
  for (const elf of top3Elves) {
    sumTop3 += getTotalCaloriesOfElf(elf);
  }

  return (
    <>
      <h1>Total Calories: {sumTop3}</h1>

      <ul>
        {top3Elves.map((elf) => {
          return <li>{getTotalCaloriesOfElf(elf)}</li>;
        })}
        {/* <li>{getTotalCaloriesOfElf(elves[0])}</li> */}
      </ul>
      {/* <pre>{el}</pre> */}
    </>
  );
}
