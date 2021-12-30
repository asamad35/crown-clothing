import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';

import {Route,Routes} from 'react-router-dom' 

const HatsPage = ()=>{ 
  return (
  <div>
    <h1>hats page</h1>
  </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/shop' element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
