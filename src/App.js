import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
   <Header/>
   <Main className="main"/>
   <Footer/>

    </div>
  );
}

export default App;
