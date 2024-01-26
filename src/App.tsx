import { AppRouterProvider, useAppRouterContext } from './contexts/AppRouterProvider';
import './index.css'
import About from "./layouts/About";
import AppContent from './layouts/AppContent';
import NavigationBar from './layouts/NavigationBar';
import Projects from "./layouts/Projects";

function App() {
  return <>
  <AppRouterProvider>

  <NavigationBar/>
  <AppContent/>
  </AppRouterProvider>

  </>
}

export default App