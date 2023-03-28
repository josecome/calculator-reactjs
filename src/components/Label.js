import PropTypes from 'prop-types'

const Label = ({ text }) => {
  return (
    <label
      id='lbl'
    >
      {text}
    </label>
  )
}

Label.propTypes = {
  text: PropTypes.string
}

export default Label