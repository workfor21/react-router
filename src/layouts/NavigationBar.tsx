import { useEffect } from "react"
import { useAppRouterContext } from "../contexts/AppRouterProvider"
import { Link } from "react-router-dom"

export default function NavigationBar() {
    // console.log(window.location.pathname)
    return <nav className="flex justify-between items-center mx-10 my-5">
        <Link className="text-lg text-blue-900" to="/">React Router</Link>
        <div className="flex gap-10">
        <Link className="text-md text-yellow-900" to="/about">About</Link>
        <Link className="text-md text-yellow-900" to="/projects">Projects</Link>
        </div>
    </nav>
}
// export default function NavigationBar() {
//     const {toggle} = useAppRouterContext()
//     const routeName = window.location.pathname
//     console.log(routeName)
//     useEffect(() => {
//         toggle(routeName)
//         return
//     },[routeName])
//     return <nav className="flex justify-between items-center mx-10 my-5">
//         <a className="text-lg text-blue-900" href="/">React Router</a>
//         <div className="flex gap-10">
//         <a className="text-md text-yellow-900" href="/about">About</a>
//         <a className="text-md text-yellow-900" href="/projects">Projects</a>
//         </div>
//     </nav>
// }