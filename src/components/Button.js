import PropTypes from 'prop-types'

const Button = ({ onClick, color, text, class_name }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={class_name}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  class_name: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button