  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/signUp';
import Profile from './pages/profile';
import { SingIN } from './pages/sigin';
import Home from './pages/home';
import { Chatjs } from './pages/chat';


function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signUp' element= {<SignUp />} />
          <Route path="/profile/:id" element={<Profile />}/>
          <Route path='/signIN' element={<SingIN />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/chat/:id' element={<Chatjs />}/>
        </Routes>
      </Router> 
    </>
  );
}

export default App;
