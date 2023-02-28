import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, backGroundClr, changeBckg }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
          color={backGroundClr ? 'blue' : 'white'}
          text={backGroundClr ? 'Bckg White' : 'Bckg Blue'}
          onClick={changeBckg}
          p={'left'}
        />
    </header>
  )
}

Header.defaultProps = {
  title: 'Calculator',
}
export default Header