
interface NavBarProps { img: string; name: string;}

const NavBar:React.FC<NavBarProps>=({img,name})=>{
    
    return <div className="first-row">
                <img src={img} alt="" />
                <h3>{name}</h3>
            </div>
    
}

export default NavBar;