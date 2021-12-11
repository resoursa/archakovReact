import './App.css';
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";


function App() {

  return (
    <div className="main-wrapper">
      <h1>Home Work B1 L9</h1>
      <br/>
      <Profile name="Вася Функциорнальный" registredAt={new Date(2021, 5, 22)} />

      <ProfileClass name="Вася Классовый" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
