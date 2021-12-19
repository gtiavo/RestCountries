import { Routes, Route } from 'react-router-dom'
import Sidebar from './home/Sidebar';
import Countries from './elements/Countries';
import CountriesDetail from './elements/CountriesDetail';
import Footer from './home/Footer';
import '../App.css';
import Asia from './elements/Asia';
import SurAmerica from './elements/SurAmerica';
import NorteAmerica from './elements/NorteAmerica';
import Europa from './elements/Europa';
import Africa from './elements/Africa';
import Oceania from './elements/Oceania';

function App() {
  return (
    <div className="App">
      <Sidebar />     
      <Routes >
      <Route path = '/' element = {<Countries />} />
      < Route path = '/coutriesAsia' element ={< Asia/> } />
      <Route path = '/coutriesSurAmerica' element={< SurAmerica />} />
      <Route path = '/coutriesNorteAmerica' element={< NorteAmerica />} />
      <Route path = '/coutriesEuropa' element={< Europa />} />
      <Route path = '/coutriesAfrica' element={< Africa />} />
      <Route path = '/coutriesOceania' element={< Oceania />} />
      <Route path = '/countriesDetail/:name' element ={ <CountriesDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
