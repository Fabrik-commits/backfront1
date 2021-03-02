import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Componente from '../src/component/component';
import useVisibility from '../src/customHooks/useVisibility';

function App() {
  const [ComponenteVisible, toggleVisibility] = useVisibility(<Componente/>, true);
  return (
    <div className="App">
      <br/>
      <button className="btn btn-primary" onClick={toggleVisibility}> Toggle Visibility </button>
      {ComponenteVisible}
      
    </div>
  );
}

export default App;
