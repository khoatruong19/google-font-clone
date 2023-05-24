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

const CONVERT_SPECIAL_FONT_WEIGHTS = {
    "regular": "400",
    "italic": "400"
}

export {APP_ROUTES, CONVERT_SPECIAL_FONT_WEIGHTS}