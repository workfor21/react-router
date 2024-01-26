import { Route, Routes } from 'react-router-dom';
import { AppRouterProvider, useAppRouterContext } from './contexts/AppRouterProvider';
import './index.css'
import About from "./layouts/About";
import AppContent from './layouts/AppContent';
import NavigationBar from './layouts/NavigationBar';
import Projects from "./layouts/Projects";
import Home from './layouts/Home';

function App() {
  return <>

  <NavigationBar/>
  <Routes>
    <Route path={'/'} element={<Home/>}></Route>
    <Route path={'/about'} element={<About/>}></Route>
    <Route path={'/projects'} element={<Projects/>}></Route>
  </Routes>

  </>
}
// function App() {
//   return <>
//   <AppRouterProvider>

//   <NavigationBar/>
//   <AppContent/>
//   </AppRouterProvider>

//   </>
// }

export default App