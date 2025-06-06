import React from 'react'

const InputComponent = (size, placeholder, bordered, style, ...rets) => {
  return (
    <input
      className="search-input"
      size={size}
      placeholder={placeholder}
      bordered={bordered}
      style={style }
      {...rets}
    />
  )
}

export default InputComponent
