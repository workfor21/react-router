import { useAppRouterContext } from "../contexts/AppRouterProvider";
import Home from "./Home";

export default function AppContent() {
    const { currRoute } = useAppRouterContext();
  
    // Assuming currRoute is a component
    return <>{currRoute ?? <Home/>}</>;
  }