import logo from '../assets/icons/logo.svg'
import graph from '../assets/icons/graph.svg'
import envelop from '../assets/icons/envelop.svg'
import date from '../assets/icons/date.svg'
import micro from '../assets/icons/micro.svg'
import profile from '../assets/icons/profile.svg'
import profile_pic from '../assets/images/profile-pic.jpg'

export const Menu = () => {

    return (
        <div className='menu-wrapper'>
            <div className='logo-block'>
                <div className='logo'>
                    <img src={logo} alt="icon" />
                </div>
            </div>
                <div className='navigation-block'>
                    <img src={graph} alt="icon" />
                    <img src={envelop} alt="icon" />
                    <img src={date} alt="icon" />
                    <img src={micro} alt="icon" />
                    <img src={profile} alt="icon" />
                </div>
            <div className='profile-pic-block'>
                <img width='50px' src={profile_pic} alt="icon" />
            </div>
        </div>
    )
}
 
