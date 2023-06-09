import { useEffect, useState } from 'react'
import { INavItem } from '../interfaces'
import { Link, useLocation } from 'react-router-dom'

interface IProps{
    item: INavItem
}

const NavItem = ({item}: IProps) => {
    const [isActive, setIsActive] = useState(false)
    const location = useLocation()

    const {path, title} = item

    useEffect(() => {
        if(location.pathname === path) setIsActive(true)
        else setIsActive(false)
    }, [location.pathname,path])

  return (
    <div className={`h-16 cursor-pointer px-7 border-b-4 dark:border-secondaryColorDark/30
    ${isActive ? "border-primaryColor dark:border-tertiaryColorDark hover:bg-red-50" : "bg-gray-100"}
     border-collapse flex items-center justify-center dark:bg-primaryColorDark dark:text-secondaryColorDark/30`}>
        <Link to={path}> 
            <span className={`font-medium text-xl ${isActive ? "text-primaryColor dark:text-tertiaryColorDark" : ""}`}>
                {title}
            </span>
        </Link>
    </div>
  )
}

export default NavItem