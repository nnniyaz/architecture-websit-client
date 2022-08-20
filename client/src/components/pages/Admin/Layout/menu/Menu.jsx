import s from './Menu.module.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../../../UI/logo/Logo'
import logout from '../../../../../assets/svgs/logout.svg'
import UsersIcon from '../../../../UI/icons/UsersIcon'
import MsgIcon from '../../../../UI/icons/MsgIcon'
import DocsIcon from '../../../../UI/icons/DocsIcon'
import SettingIcon from '../../../../UI/icons/SettingsIcon'

const navigation = [
    {
        title: 'Почта',
        path: '/main',
        icon: <MsgIcon />
    },
    {
        title: 'Пользователи',
        path: '/users',
        icon: <UsersIcon />
    },
    {
        title: 'Документы',
        path: 'docs',
        icon: <DocsIcon />
    },
    {
        title: 'Настройки',
        path: '/settings',
        icon: <SettingIcon />
    }
]

const Menu = () => {
    return (
      <div className={s.menu}>
        <div>
          <div style={{ marginLeft: "20px" }}>
            <Logo />
          </div>
          <div className={s.list}>
            {navigation.map((i) => (
              <NavLink
                key={i.title}
                to={`/admin${i.path}`}
                className={[s.item, ({isActive}) => isActive ? s.active : ''].join(' ')}
              >
                {i.icon}
                <span>{i.title}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className={s.logout}>
          <div>
            <img src={logout} alt="logout" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    );
}

export default Menu