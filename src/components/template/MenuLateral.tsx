import MenuItem from "./MenuItem";
import {graphIcon, iconList, NotificationsIcon, LogoutIcon} from "../icons"
import UserAvatar from "./UserAvatar"
import useAuth from "../../data/hook/useAuth";


export default function MenuLateral(){
    const { logout } = useAuth()
    return (
        <aside className={`
           flex flex-col
           bg-gray-600 text-white
           dark:bg-gray-900
           shadow-lg rounded-md h-full
        `}>
            <div className={`h-1/6 flex justify-center items-center`}>
                 
                 <UserAvatar className=" block md:hidden" />
            </div>
            <ul className="flex flex-col flex-grow justify-center items-center">
                <MenuItem url="/" texto="Gráficos"  icone={graphIcon}/>
                <MenuItem url="/listproducts" texto="Produtos"  icone={iconList}/>
                <MenuItem url="/notifications" texto="Notifications" icone={NotificationsIcon}  />
            </ul>
            <ul>
                <MenuItem 
                texto="Logout"  icone={LogoutIcon}
                onClick={logout}
                clasName={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 hover:text-white
                    dark:hover:text-white 

                `}
                
                />
            </ul>
        </aside>
    )
}