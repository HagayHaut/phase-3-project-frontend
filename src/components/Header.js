import PropTypes from "prop-types";
import {useLocation} from 'react-router-dom'
import Button from "./Button"
import React from 'react'

function Header({ title, onAdd, showAdd, isDarkMode, onToggleDarkMode}) {
  const location = useLocation();
  return (
    <div>
      <header className = "header">
        <h1>{title}</h1>

        <button className = {isDarkMode ? 'mode-btn dark' : 'mode-btn' } onClick={onToggleDarkMode}>{isDarkMode ? 'Light' : 'Dark'}</button>

        {location.pathname === '/' && <Button color= {showAdd ? 'red' : 'green'}
        text = {showAdd ? 'Close' : 'Add'}
        onClick = {onAdd}
      />}
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

export default Header