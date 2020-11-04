import logo from '../../assets/Logo/Logo-brainflix.svg'
import './Logo.scss'

function Logo() {
    return(
        <div className="logo__container">
             <a className="logo-link" href= "../../App"><img className="logo" src={logo} alt="brainflix logo"/></a>
        </div>
    )
}

export default Logo;