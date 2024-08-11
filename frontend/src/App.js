import logo from './logo.svg';
import './App.css';
import { Educational } from './components/education/education';
import { Personal } from './components/personal/personal';
import { Skills } from './components/skills/skills';
import { SignUp } from './components/signup/signup';
import { SignIn } from './components/signin/signin';
import { ForgetPassword } from './components/forgetpassword/forgetpassword';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import { StudentsData } from './components/students/students';

function App() {
  return (
    <>
    {/* <h1>Resume</h1>
     <Educational/>
     <Personal/>
     <Skills/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path='/studentsdata' element={<StudentsData/>}></Route>
        </Routes>
        </BrowserRouter> 

   
            
     
    </>
   
  );
}

export default App;
