import './App.css';
import Shair from './Components/Shair';
import Searchbar from './Components/Searchbar';
import Socials from './Components/Socials';

function App() {
  return (
    <div className="wrapper">
      <Shair />
      <div className="landing">
        <Searchbar />
      </div>
      <Socials />
    </div>
  );
}

export default App;
