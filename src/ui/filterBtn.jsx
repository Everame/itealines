import React from 'react'

export default function FilterBtn({text, isActive, ...buttonProps}) {
  return (
    <div className={`filterItem ${isActive ? "active" : ""}`} {...buttonProps}>
        <span className="filterText">{text}</span>
    </div>
  )
}
