export interface IPageRoute{
    name: string
    path: string
    component: () => JSX.Element
    layout?: () => JSX.Element,
    customLayoutClassName?: string
}

export interface IOption {
    title: string
    value: string
}

export interface ICheckboxOption {
    title: string
    value: boolean
}