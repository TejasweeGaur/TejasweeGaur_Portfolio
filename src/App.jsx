/** @format */

import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import Work from "./components/Work";

function App() {
  return (
    <div className='app'>
      <SideNav />
      <Main />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
