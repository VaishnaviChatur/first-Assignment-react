import './App.css';
import { Button } from './components/Button';
import {ReactBenifits} from './components/ReactBenifits';
import { ReactLogo } from "./components/ReactLogo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ReactLogo />
        <ReactBenifits/>
        <Button/>
      </header>
      
    </div>
    
  );
}

export default App;
