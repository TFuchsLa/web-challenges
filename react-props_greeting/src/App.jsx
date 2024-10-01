import "./styles.css";

export default function App() {
  return <Greeting name="Mike" />;
}

function Greeting({ name }) {
  const isCoach = name === "Mike";
  return <h1>{isCoach ? "Hello, Coach!" : `Hello ${name}!`}</h1>;
}
