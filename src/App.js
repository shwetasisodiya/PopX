import {Route, Routes} from "react-router-dom";

import LandingScreen from './components/LandingScreen';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';




function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<LandingScreen/>} />
        <Route path='/Registration' element={<Registration/>} />
        <Route path='/LoginForm' element={<LoginForm/>} />
      </Routes>
    </div>
  );
}

export default App;
