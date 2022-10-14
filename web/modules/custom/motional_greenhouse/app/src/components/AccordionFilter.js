import React, { useState } from 'react'
import SVG from 'react-inlinesvg'

const AccordionFilter = ({ options, onChange, closeParent, label }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = (value) => {
    onChange(value)
    closeParent(false)
  }

  return (
    <div className="filters__accordion-filter">
      <div
        className={`filters__accordion-filter-label ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{label}</div>
        <span>
          <SVG src="/modules/custom/motional_greenhouse/app/build/images/icons/chevron.svg" />
        </span>
      </div>
      {isOpen && (
        <div className="filters__accordion-filter-options">
          {options.map((option, idx) => {
            return (
              <div key={idx} className="filters__accordion-filter-option">
                <div onClick={() => handleOnClick(option.value)}>
                  {option.label}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AccordionFilter
