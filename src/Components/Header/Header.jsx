import './Header.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header(){
    return(
        <div className="Header">
        <div className='header_wrapper'>

        <div className="header_left">
            <h3>
                Admin-panel avito
            </h3>
            <p>
            4.45 pm 19 Jan 2022
            </p>
        </div>

        <div className="header_right">
            <div className='icons'>
                <div className='icon'>
                <NotificationsNoneIcon />
                <span className='Notifications'>1</span>
                </div>

                <div className='icon'>
                <LanguageIcon />
                
                </div>

            </div>
            <div className='user'>
                <h4>
                Kruluz Utsman
                </h4>

            </div>
        </div>
    </div>
        </div>
    )
}