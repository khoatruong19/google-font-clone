import Home from "./Home"

interface IPageRoute{
    name: string
    path: string
    component: () => JSX.Element
    layout?: () => JSX.Element,
    customLayoutClassName?: string
}

const APP_ROUTES : IPageRoute[] = [
    {
        name: "Homepage",
        path: "/",
        component: Home,
    }
] 

export {APP_ROUTES}