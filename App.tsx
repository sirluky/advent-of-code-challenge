import * as React from 'react';
import { Advent1 } from './adventOfCode/advent1';
import { Advent2 } from './adventOfCode/advent2';
import './style.css';

export default function App() {
  const [activeChallenge, setActiveChallenge] = React.useState(
    ~~localStorage.getItem('round')
  );
  const challenges = [<Advent1 />, <Advent2 />];

  return (
    <div>
      {challenges.map((v, i) => (
        <button
          onClick={() => {
            setActiveChallenge(i);
            localStorage.setItem('round', i);
          }}
        >
          Day {i + 1}
        </button>
      ))}
      {challenges[activeChallenge]}
    </div>
  );
}
