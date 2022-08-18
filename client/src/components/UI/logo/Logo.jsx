import s from './Logo.module.scss'

const Logo = ({color}) => {
    return (
        <div className={s.logo}>
            <span style={{color: color || '#000'}}>baroque</span>
        </div>
    )
}

export default Logo