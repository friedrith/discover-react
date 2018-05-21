import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LicenseInput extends Component {
  render() {
    return (
      <div>
        <input type="text" maxlength="4" onChange={this.props.onChange} />
        <input type="text" maxle

        ngth="4" onChange={this.props.onChange} />
        <input type="text" maxlength="4" onChange={this.props.onChange} />
        <input type="text" maxlength="4" onChange={this.props.onChange} />
      </div>
    )
  }
}

LicenseInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default LicenseInput
