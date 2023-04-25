import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

import AppShell from './components/AppShell/AppShell';
import Sidebar from './Sidebar';
import Playground from './Playground'

function App() {

  const [settings, setSettings] = useState({
    collapsedProp: false,
    collapsible: false,
    collapseAsButton: false,
    compact: false,
    scrollContent: false,
    darkTheme: false,
    shadowedHeader: false,
    shadowedFooter: false
  })

  const toggleSetting = (settingToToggle, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [settingToToggle]: value
    }))
  }

  return (
    <AppShell
      navbar={
        <Sidebar
          settings={settings}
        />
      }
    >
      <Playground toggleSettings={toggleSetting} />
    </AppShell>
    
  );
}

export default App;
