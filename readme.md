## React-stepper

Basic react stepper component:

![image](https://user-images.githubusercontent.com/43625217/185811038-4e479d4e-5836-4ea9-93d7-aab02526ea79.png)

[Demo!](https://react-stepper.vercel.app/)

### Install:

```sh
$ npm i @aspnxdd/react-stepper
```
[Npm link](https://www.npmjs.com/package/@aspnxdd/react-stepper)

### Example:

```ts
const options: Options = {
  squared: false,
  color: "blue",
  noAnimation: false,
  distance: 9,
};

const defaultSteps: Props[] = [
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

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function App() {
  const [steps, setSteps] = useState<Props[]>([]);

  async function simulation() {
    setSteps(defaultSteps);
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
    <>
      <button onClick={simulation}>Simulation</button>
      <Stepper steps={steps} options={options} />
    </>
  );
}
```