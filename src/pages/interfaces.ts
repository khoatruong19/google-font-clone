export interface IPageRoute{
    name: string
    path: string
    component: () => JSX.Element
    layout?: () => JSX.Element,
    customLayoutClassName?: string
}