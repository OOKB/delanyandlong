import React, { PropTypes } from 'react'
import radium from 'radium'
// The button that gets clicked for simple editable text fields.

const styles = {
  base: {
    background: 'transparent',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: '1px dashed currentColor',
    borderRadius: 0,
    color: 'rgba(061,060,057,1)',
    fontSize: '1rem',
    padding: '.25em',
    textDecoration: 'none',
    ':hover': {
      color: 'rgba(130,151,177,1)',
    },
    ':focus': {
      outline: 'none',
    },
    ':active': {
      outline: 'none',
    },
  },
  empty: {
    color: 'rgba(189,151,119,1)',
  },
}

function PreviewTextEditable({ className, emptyText, title, value, onClick, style }) {
  return (
    <button
      className={className}
      onClick={onClick}
      title={title}
      style={[ styles.base, style, !value && styles.empty ]}
    >
      {value || emptyText}
    </button>
  )
}
PreviewTextEditable.defaultProps = {
  className: 'btn btn-secret',
  title: 'Click to edit',
  emptyText: 'Empty',
}
PreviewTextEditable.propTypes = {
  className: PropTypes.string,
  emptyText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
  value: PropTypes.string,
}

export default radium(PreviewTextEditable)
