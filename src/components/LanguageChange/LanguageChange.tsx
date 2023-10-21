import React from 'react'
import './language-change.css'

export default function LanguageChange() {
  return (
    <select className='languageSelect'>
        <option value="EN">EN</option>
        <option value="AM">AM</option>
        <option value="RS">RS</option>
      </select>
  )
}
