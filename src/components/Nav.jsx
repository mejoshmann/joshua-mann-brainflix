import '../App.scss';
import logoImage from '../assets/Logo/BrainFlix-logo.svg'
import avatar from '../assets/images/Mohan-muruge.jpg';


function Navigation() {
    return (
            <>
                <nav className="nav">   
                    <div className="nav__head">
                        <img src={logoImage} alt="BrainFlix Logo" className="nav__logo" />
                    </div>
    
                    <div className="nav__head-box">
                        <label htmlFor="search" className="nav__input">
                            <input type="text" className="nav__search" id="search" placeholder="Search" />
                        </label>
                        <img src={avatar} alt="BrainFlix Avatar" className="nav__avatar" />
                    </div>
    
                    <button className="nav__upload">UPLOAD</button>
                </nav>

            </>
    )
}

export default Navigation;


