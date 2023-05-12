import './App.css';
import { Button } from '../Button/Button';
import { User } from '../User/User';
import { ConditionalRender } from '../ConditionalRender';
import { List } from '../List';
import { Count } from '../Count';

function App() {
  return (
    <div className="App">
      <h1>React DOC - inicio rapido!!</h1>
      <hr/>
      <Button text="PropTypes" className="btn-green" />
      <hr/>
      <List />
      <hr/>
      <Count />
      <Count />
      <hr/>
      <ConditionalRender />
      <hr/>
      <User />
      <hr/>
      <h2>Crear y anidar componentes</h2>
      <Button text="Props" className="btn-green" />
    </div>
  );
}

export default App;
