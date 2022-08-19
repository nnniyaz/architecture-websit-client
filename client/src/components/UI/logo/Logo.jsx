import s from './Logo.module.scss'

const Logo = ({ color }) => {
    return (
        <div className={s.logo}>
            <span style={{ color: color || '#000' }}>BAROQUE</span>
        </div>
    )
}

export default Logo