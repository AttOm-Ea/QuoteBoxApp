import {useState, useEffect} from "react";
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {

  const colorFloor = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'f13', 'f14', 'f15'];
  let [isNumWallpaper, setNumWallpaper] = useState(Math.round(Math.random()*14));
  const [isFloor, setFloor] = useState(colorFloor[isNumWallpaper]);

  useEffect(() => {
    setFloor(colorFloor[isNumWallpaper]);
  }, [isNumWallpaper])
  
  const newFloor = () => {
    if (isNumWallpaper < 14) {
      setNumWallpaper(isNumWallpaper + 1 );
    }else{
      setNumWallpaper(isNumWallpaper = 0);
    }
  }
  
  return (
    <div className="App">
      <header className={isFloor}>
        <QuoteBox fIsFloor={newFloor}/>
      </header>
    </div>
  );
}

export default App;
