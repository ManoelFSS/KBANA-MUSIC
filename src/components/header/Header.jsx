import  { Container_header } from './Styles'
import { TiThMenu } from "react-icons/ti";


const Header = () => {
    return (
        <Container_header>
            <TiThMenu className='icon-menu' />
            <div className='logo'>
                <h1>KBANA</h1>
                <p>MUSIC</p>
            </div>
        </Container_header>
    );
};

export default Header;