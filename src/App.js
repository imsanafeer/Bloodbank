import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css';
import Singup from './component/Singup';
import Signup2 from './component/Signup2';

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         {/* <Signup2 /> */}
          <Singup /> 
      </LocalizationProvider>
    </div>
  );
}

export default App;
