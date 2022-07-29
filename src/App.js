import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Right from './components/Right';


function App() {
  const [sidebar, setSidebar] = useState(false)

  const toggle = (() => {
    setSidebar(!sidebar)
  })

  return (
    <div className="App">

      <Sidebar sidebar={sidebar} closeSidebar={toggle}/>
      <Main />
      <Right openSidebar={toggle}/>
    </div>
  );
}

export default App;
