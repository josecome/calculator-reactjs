import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, p }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, width: '100px', float: p }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button