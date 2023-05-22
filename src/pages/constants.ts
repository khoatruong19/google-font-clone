import Home from "./Home"
import { IPageRoute } from "./interfaces"

const APP_ROUTES : IPageRoute[] = [
    {
        name: "Homepage",
        path: "/",
        component: Home,
    }
] 

export {APP_ROUTES}