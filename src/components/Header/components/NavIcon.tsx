type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & React.RefAttributes<SVGSVGElement>
type IconProps = IconSVGProps & {
      className?: string
 }

 type Icon = React.FC<IconProps>

interface IProps {
  Icon: Icon;
  iconContainerClass?: string;
  iconClass?: string;
  onClick?: () => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NavIcon = ({ Icon, iconContainerClass = '', iconClass = '', onClick = () => {} }: IProps) => {
  return (
    <div onClick={onClick} className={`h-12 w-12 flex items-center justify-center rounded-full hover:bg-secondaryColor/10 cursor-pointer
    ${iconContainerClass}`}>
      <Icon className={`h-6 w-6 ${iconClass}`} />
    </div>
  );
};

export default NavIcon;
