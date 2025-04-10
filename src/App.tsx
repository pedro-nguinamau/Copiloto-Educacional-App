  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/signUp';
import Profile from './pages/profile';
import { SingIN } from './pages/sigin';
import { Chatjs } from './pages/chat';


function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signUp' element= {<SignUp />} />
          <Route path="/profile/:id" element={<Profile />}/>
          <Route path='/' element={<SingIN />}/>
          <Route path='/chat/:id' element={<Chatjs />}/>
        </Routes>
      </Router> 
    </>
  );
}

export default App;
