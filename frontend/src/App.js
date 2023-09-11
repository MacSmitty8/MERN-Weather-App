import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ZipCodeSearch from './components/ZipCodeSearch';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
        <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <ZipCodeSearch />
        </div>
      </Router>
    </div>
  );
}

export default App;
