
import './App.css';
import Navbar from './componets/NavBar';
import ItemListContainer from './contariners/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer greeting="Hola, Soy un greeting"/>
    
      
    </div>
  );
}

export default App;
