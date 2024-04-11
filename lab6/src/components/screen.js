//I got the stopwatch with the lap feature from geeksforgeeks. Modified it to fit my needs better.
import { useState } from "react";
import Rep from "./repExercise";
import Rep2 from "./repExercise2";
import Count from "./count";
function ComponentOne() {
  //setting the four states: menu, exercise1, exercise2, exercise3.
  const [menuScreen, setMenuScreen] = useState(true);
  const [exercise1Screen, setExercise1Screen] = useState(false);
  const [exercise2Screen, setExercise2Screen] = useState(false);
  const [exercise3Screen, setExercise3Screen] = useState(false);

  //setting what to do when each button is clicked. changing flags etc

  const menuHandler = () => {
    setMenuScreen(true);
    setExercise1Screen(false);
    setExercise2Screen(false);
    setExercise3Screen(false);
  };
  const exercise1Handler = () => {
    setMenuScreen(false);
    setExercise1Screen(true);
    setExercise2Screen(false);
    setExercise3Screen(false);
  };
  const exercise2Handler = () => {
    setMenuScreen(false);
    setExercise2Screen(true);
    setExercise1Screen(false);
    setExercise3Screen(false);
  };
  const exercise3Handler = () => {
    setMenuScreen(false);
    setExercise3Screen(true);
    setExercise1Screen(false);
    setExercise2Screen(false);
  };
  //what to display according to flags

  if (menuScreen === true) {
    return (
      <div>
        <ul>
          <li>
            <button onClick={menuHandler}>HOME</button>
          </li>
          <li>
            <button onClick={exercise1Handler}>RUN</button>
          </li>
          <li>
            <button onClick={exercise2Handler}>PLANK</button>
          </li>
          <li>
            <button onClick={exercise3Handler}>AB CIRCUIT</button>
          </li>
        </ul>
      </div>
    );
  } else if (exercise1Screen === true) {
    return (
      <div>
        <ul>
          <li>
            <button onClick={menuHandler}>BACK TO HOME</button>
          </li>
        </ul>
        <h1>LETS TIME YOUR RUN</h1>
        <Rep></Rep>
      </div>
    );
  } else if (exercise2Screen === true) {
    return (
      <div>
        <ul>
          <li>
            <button onClick={menuHandler}>BACK TO HOME</button>
          </li>
        </ul>
        <h1>LETS TIME YOUR PLANK</h1>
        <Rep2></Rep2>
      </div>
    );
  } else if (exercise3Screen === true) {
    return (
      <div>
        <ul>
          <li>
            <button onClick={menuHandler}>BACK TO HOME</button>
          </li>
        </ul>
        <h1>HOW MANY SITUPS CAN YOU DO?</h1>
        <Count></Count>
      </div>
    );
  }
}
export default ComponentOne;
