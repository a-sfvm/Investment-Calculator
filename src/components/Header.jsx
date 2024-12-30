import logo from '../assets/investment-calculator-logos.png'

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt='logo money bag' />
      <h1>Investment Calculator</h1>
    </header>
  )
}
