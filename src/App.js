import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TalentDashboard from './components/Pages/TalentDashboard';
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import './components/styles/app.css'
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';
import Landing from './components/Pages/Landing';
function App() {
  return (
    <>
    <BrowserRouter>
    <PostProvider>
      <AuthProvider>
      <Navbar/>
    <Routes>
        <Route path="/" element={ <Login/> }/>
        <Route path="/home" element={ <Landing/> }/>
        <Route path="/clogin" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/csignup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/tdashboard" element={<TalentDashboard/>} />
    </Routes>
    </AuthProvider>
    </PostProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
