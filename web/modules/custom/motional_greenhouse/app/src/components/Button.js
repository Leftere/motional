import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'

const Button = ({ children, className, onClick, to, type, icon }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`btn ${className}`}
        onClick={onClick}
        type={type}
      >
        {icon && (
          <SVG
            src="/modules/custom/motional_greenhouse/app/build/images/icons/arrow-next.svg"
            title="Arrow next"
          />
        )}
        <span className="btn__inner">{children}</span>
      </Link>
    );
  } else {
    return (
      <button className={`btn ${className}`} onClick={onClick} type={type}>
        <span className="btn__inner">{children}</span>
      </button>
    );
  }
}

export default Button
