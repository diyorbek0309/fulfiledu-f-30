import "./App.css";
import Welcome from "./Welcome";
import Button from "./Button";

function App() {
  return (
    <div>
      <Welcome ism="Ismatulla" familiya="Qo'yliyev" />
      <Welcome ism="Hayotilla" familiya="Numonov" />
      <Welcome ism="Diyorbek" familiya="Olimov" />
      <Button>Jonatish</Button>
      {/* <Button children="Jonatish"/> */}
    </div>
  );
}

// const test = "test";
// const test2 = 34;

// export { App, test, test2 };

export default App;
