import React from 'react'

export default function Playground({ toggleSettings }) {

  const toggleSetting = ({ target }) => {
    toggleSettings(target.name, target.checked)
  }

  return (
    <div className='content'>
      <h1>Simple Vertical Navbar for React</h1>
      <p>Just a simple navbar for react so I can stop recreating it in my projects.</p>
      <p>Mess arround with the toggles below!</p>
      <h2>
        Configurations
      </h2>
      <div className='toggle-holder'>
        <label>Collapsed</label>
        <input className="toggle" type="checkbox" name='collapsedProp' onClick={toggleSetting} />
      </div>
      <div className='toggle-holder'>
        <label>Collapsible</label>
        <input className="toggle" type="checkbox" name='collapsible' onClick={toggleSetting} />
      </div>
      <div className='toggle-holder'>
        <label>Collapsible Button</label>
        <input className="toggle" type="checkbox" name='collapseAsButton' onClick={toggleSetting} />
      </div>
      <div className='toggle-holder'>
        <label>Compact</label>
        <input className="toggle" type="checkbox" name='compact' onClick={toggleSetting} />
      </div>
      <div className='toggle-holder'>
        <label>Scroll Content Only</label>
        <input className="toggle" type="checkbox" name='scrollContent' onClick={toggleSetting} />
      </div>
      <div className='toggle-holder'>
        <label>Dark Theme</label>
        <input className="toggle" type="checkbox" name='darkTheme' onClick={toggleSetting} />
      </div>
      <div className='toggle-holder'>
        <label>Shadow Header</label>
        <input className="toggle" type="checkbox" name='shadowedHeader' onClick={toggleSetting} />
      </div>
      <div className='toggle-holder'>
        <label>Shadow Footer</label>
        <input className="toggle" type="checkbox" name='shadowedFooter' onClick={toggleSetting} />
      </div>
      
    </div>
  )
}
