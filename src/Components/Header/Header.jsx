import s from './Header.module.css'
import logo from './../../logo.svg'

const Header = () => {
    return(
    <header className={s.header}>
        <a href="#s">
            <img src={logo} alt="logo"/>
        </a>
    </header>)
}

export default Header;