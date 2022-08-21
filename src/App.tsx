import * as React from "react";
import "./App.css";
import { Stepper } from "./Stepper.js";
import { Props, Options } from "./types.js";

const options: Options = {
  squared: false,
  color: "blue",
  noAnimation: false,
};

export default function App() {
  const [steps, setSteps] = React.useState<Props[]>([]);

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

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={increaseCompleted}>inc completed</button>
      <button onClick={increaseLoading}>inc loading</button>
      <button onClick={increaseEmpty}>inc empty</button>
      <button onClick={finishLoading}>finish loading</button>
      <button onClick={() => setSteps([])}>reset</button>
      <Stepper steps={steps} options={options} />
    </div>
  );
}
