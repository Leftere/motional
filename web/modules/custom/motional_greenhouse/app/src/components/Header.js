import logo from '../logo.svg'

const Header = () => (
  <header className="global-header">
    <div className="global-header__inner">
      <img src={logo} alt="Motional" width="58" height="30" />
      <h1>Open Positions</h1>
    </div>
  </header>
)

export default Header
