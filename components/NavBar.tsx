export default function NavBar({img,name}){
    return <div className="first-row">
                <img src={img} alt="" />
                <h3>{name}</h3>
            </div>
    
}