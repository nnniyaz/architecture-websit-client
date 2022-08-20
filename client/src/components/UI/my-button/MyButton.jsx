import s from './MyButton.module.scss'

const MyButton = ({ theme, children, ...props },) => {
  return (
    <button
      {...props}
      className={[s.button, theme ? theme === "dark" ? s.dark : s.light : ''].join(" ")}
    >
      {children}
    </button>
  );
}

export default MyButton