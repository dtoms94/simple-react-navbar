
# Simple React Navbar

A simple vertical navbar for react. Just to keep myself from constantly receating it for my personal projects!

## Features

* Collapsible
* Comfort or compact spacing
* That's about all...

## Limitations
* Theming!
    * Non-existant :(
    * BUT keep an eye out ;)



## Installation

Install react-vertical-navbar with npm

```bash
  npm install react-vertical-navbar
```
    
## Getting Started

AppShell is an included component for wrapping the navbar and your app to work together. Simply place your app code within AppShell and pass your created navbar to AppShell to get up and running!

```javascript
// App.js

import AppShell from 'react-vertical-navbar'
import Navbar from 'react-vertical-navbar' 

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

