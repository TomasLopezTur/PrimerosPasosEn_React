import './App.css';
import { Button } from '../Button/Button';
import { User } from '../User/User';

function App() {
  return (
    <div className="App">
      <h1>React DOC - inicio rapido!!</h1>
      <hr/>
      <User />
      <hr/>
      <h2>Crear y anidar componentes</h2>
      <Button />
    </div>
  );
}

export default App;
