  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/signUp';
import Profile from './pages/profile';
import { SingIN } from './pages/sigin';


function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signUp' element= {<SignUp />} />
          <Route path="/profile/:id" element={<Profile />}/>
          <Route path='/login' element={<SingIN />}/>
        </Routes>
      </Router> 
    </>
  );
}

export default App;
