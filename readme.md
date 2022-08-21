## React-stepper

Basic react stepper component:

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
