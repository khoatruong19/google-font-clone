import FontDetail from "./FontDetail"
import Home from "./Home"
import { IPageRoute } from "./interfaces"   

const APP_ROUTES : IPageRoute[] = [
    {
        name: "Homepage",
        path: "/",
        component: Home,
        customLayoutClassName: "max-w-[100vw] px-0 md:px-0 lg:px-0"
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