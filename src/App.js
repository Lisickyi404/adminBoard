
import './App.css';
import  Header  from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Itemslist from './Components/Itemslist/Itemslist';
import StaticsPage from './Pages/StatisticsPage/StatisticsPage';
import UsersPage from './Pages/UsersPage/UsersPage';
import ProductList from './Pages/Productlist/ProductList';
import ProductPage from './Pages/ProductPage/ProductPage';

import {
  Routes,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    
      <Navbar/>

      <div className='wrapper'>
     
      <Header/>
        <Routes>

          <Route path='/users' element={ <UsersPage />}/>
          
     

          <Route path='statistic' element={ <StaticsPage/>}/>
          <Route path='products' element={ <ProductList/>}/>

          <Route path={`productPage/:id`} element={<ProductPage/>}/>
        
        </Routes>
     

      </div>
      

      
    </div>
  );
}

export default App;
