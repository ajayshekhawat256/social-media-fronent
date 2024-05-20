import { useSelector } from 'react-redux';
import './App.css';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user=useSelector((state)=>state.auth.authData);

  {console.log(user,"this is user");}
  return (
    <>
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      {/* <Home /> */}
      <Routes>
        {/* <Auth/> */}
        <Route path="/" element={user ? <Navigate to="home"/>:<Navigate to="auth" />}/>
        <Route path="/home" element={user? <Home/>:<Navigate to='../auth'/>}/>
        <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />}/>
        <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to='../auth' />} />    
      </Routes>
      {/* <Profile/> */}
    </>
  );
}

export default App;
