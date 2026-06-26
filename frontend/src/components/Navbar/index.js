import icon from '../../assets/icon_128.png';
import './style.css'

export default function Navbar() {
    return (
        <>
        <div className='navbar-div'>
            <div className='container'>
            <div className='logo'>
                <img src={icon} alt="logo do urly"/>
                <span>urly</span>
            </div>

            <div className='actions'>
                <button className='secondary-button'>Entrar</button>
                <button className='primary-button'>Criar Conta</button>
            </div>
            </div>
        </div>
        </>
    );
}