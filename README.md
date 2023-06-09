
# Simple React Navbar

A simple vertical navbar for react. Just to keep myself from constantly receating it for my personal projects!

![Image of vertical navbar](https://i.imgur.com/TqMAwqa.png?raw=true "Vertical Navbar")




## Installation

Install react-vertical-navbar with npm

```bash
  npm install react-vertical-navbar
```
    
## Demo

https://dtoms94.github.io/simple-react-navbar/


## Features

* Collapsible
* Comfort or compact spacing
* That's about all...

## Limitations
* No mobile support yet
* Theming is pretty basic and not well optimized
* Can only nest one level of sub-menus


## Getting Started

AppShell is an included component for wrapping the navbar and your app to work together. Simply place your app code within AppShell and pass your created navbar to AppShell to get up and running!

```javascript
// App.js

import { AppShell, Navbar } from 'react-vertical-navbar'

function App() {
  return (
      <AppShell 
        navbar={
            <Navbar>
                {...navbar elements go here...}
            </Navbar>
        } 
      >
        <YourApp />
      </AppShell>
  )
}
```

### Tips & Tricks

#### Custom Collapse Button
```javascript
// Sidebar.js

import React, { useState } from 'react'
import { 
  Navbar, 
  NavbarMenuItem, 
  NavbarFooter 
} from 'react-vertical-navbar'

import { 
  IconArrowLeft,
  IconArrowRight
} from '@tabler/icons-react'

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <Navbar
      collapsed={collapsed}
    >
      {...}
      <NavbarFooter>
        <NavbarMenuItem
          asButton
          title='Close Submenu'
          icon={collapsed ? <IconArrowRight/> : <IconArrowLeft />}
          onClick={toggleCollapsed}
        />
      </NavbarFooter>
    </Navbar>
  )
}

```