import { createContext, useContext, useState } from "react"
import Home from "../layouts/Home"
import About from "../layouts/About"
import Projects from "../layouts/Projects"

type AppRouterProviderProps = {
    children: any
}

type AppRouterContextProps = {
    toggle: (route:string) => void
    currRoute?: JSX.Element
}

const AppRouterContext = createContext<AppRouterContextProps | null>(null)


export function AppRouterProvider({children}: AppRouterProviderProps) {
    const [currRoute, setCurrRoute] = useState<JSX.Element>()

    function toggle(route:string) {
       if(route =="/about") {
            setCurrRoute(<About/>)
        }
        else if(route =="/projects") {
            setCurrRoute(<Projects/>)
        } else {
            setCurrRoute(<Home/>)
        }
        }

    
    return <AppRouterContext.Provider value={{toggle,currRoute}}>
        {children}
    </AppRouterContext.Provider>
    
}

export const useAppRouterContext = () => {
    const context = useContext(AppRouterContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
  };