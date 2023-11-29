import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <>
      <Header home="Home" products="Products" gallery="Gallery" contact="Contact" Login="Login" />
      <Main preorder="PRE-ORDER" future="FUTURE"/>
    </>
  );
}

export default App;
