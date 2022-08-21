import React, { useState } from "react";
import "./App.css";
import { Stepper } from "./Stepper.js";
import { Props, Options } from "./types.js";

const options: Options = {
  squared: false,
  color: "blue",
  noAnimation: false,
  distance: 9,
};

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function App() {
  const [steps, setSteps] = useState<Props[]>([]);

  function increaseCompleted() {
    const obj: Props = {
      text: "hello",
      status: "completed",
      id: steps.length + 1,
    };
    setSteps((p) => [...p, obj]);
  }

  function increaseLoading() {
    const obj: Props = {
      text: "hello",
      status: "loading",
      id: steps.length + 1,
    };
    setSteps((p) => [...p, obj]);
  }

  function increaseEmpty() {
    const obj: Props = {
      text: "hello",
      id: steps.length + 1,
    };
    setSteps((p) => [...p, obj]);
  }

  function finishLoading() {
    const loadedState = steps.map((e) => ({
      ...e,
      status: "completed",
    })) as Props[];
    setSteps(loadedState);
  }

  async function simulation() {
    let _steps: Props[] = [
      {
        text: "Fetching users",
        status: "loading",
        id: 1,
      },
      {
        text: "Fetching data",
        status: "loading",
        id: 2,
      },
      {
        text: "Uploading data",
        status: "loading",
        id: 3,
      },
    ];
    setSteps(_steps);
    await sleep(2000);
    setSteps((e) => {
      e[0].status = "completed";
      return [...e];
    });
    await sleep(2000);
    setSteps((e) => {
      e[1].status = "completed";
      return [...e];
    });
    await sleep(2000);
    setSteps((e) => {
      e[2].status = "completed";
      return [...e];
    });
  }

  return (
    <div>
      <button onClick={increaseCompleted}>inc completed</button>
      <button onClick={increaseLoading}>inc loading</button>
      <button onClick={increaseEmpty}>inc empty</button>
      <button onClick={finishLoading}>finish loading</button>
      <button onClick={() => setSteps([])}>reset</button>
      <button onClick={simulation}>simulate</button>
      <Stepper steps={steps} options={options} />
    </div>
  );
}
