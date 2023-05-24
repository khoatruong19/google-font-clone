import FontDetail from "./FontDetail"
import Home from "./Home"
import { IPageRoute } from "./interfaces"   

const APP_ROUTES : IPageRoute[] = [
    {
        name: "Homepage",
        path: "/",
        component: Home,
    },
    {
        name: "FontDetail",
        path: "/font/:fontFamily",
        component: FontDetail,
    }
] 

export {APP_ROUTES}