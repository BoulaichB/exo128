import { Chronometre } from "./components/chronometre/chronometre";
import { Compteur } from "./components/compteur/compteur";
import { Progressbar } from "./components/progressbar/progressbar";
import { Timer } from "./components/timer/timer";
import { Todolist } from "./components/todolist/todolist";
import { Animatedbutton } from "./components/animatedbutton/animatedbutton";

function App() {
  return (
    <div>
      <Chronometre/>
      <Compteur/>
      <Progressbar/>
      <Timer/>
      <Todolist/>
      <Animatedbutton/>
    </div>
  );
}

export default App;
