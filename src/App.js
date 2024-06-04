import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Products from './Components/Products'
import YourCart from './Components/YourCart'
import Counter from './redux/hooks/index'
function App() {
  
  return (
    <div className="App">
   {/* <Counter />  */}
   < Header />
   < Products />
   < YourCart />
    </div>
  );
}

export default App;
