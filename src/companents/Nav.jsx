import Stream from '../assets/Stream.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {

    return (
        <div id="nav">
            <img className='stream' src={Stream} alt="" />
            <div className='link'>
                <a className='home' href="">Home</a>
                <a href="">Movie&Shows</a>
                <a href="">Support</a>
                <a href="">Subscriptions</a>
            </div>
            <div className='icons'>
                <SearchIcon className='icon' />
                <NotificationsIcon className='icon' />
            </div>
            <MenuIcon className='menu'/>
        </div>
    )
}

export default Nav;