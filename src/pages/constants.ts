import Home from "./Home"
import { IPageRoute } from "./interfaces"

const APP_ROUTES : IPageRoute[] = [
    {
        name: "Homepage",
        path: "/",
        component: Home,
        customLayoutClassName: "max-w-[100vw] px-0 md:px-0 lg:px-0"
    }
] 

export {APP_ROUTES}