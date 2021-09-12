import './App.css';
import CardProduct from './components/cardProduct';
import checkoutItems from './components/checkoutItems';

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <body id="App">      
        <Header/>              
        <CardProduct/> 
        <checkoutItems/>       
    </body>
    <Footer/> 
    </>
  );
}

export default App;
