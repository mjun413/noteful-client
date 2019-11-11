import React from 'react'

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  addFolder: () => {},
  addNote: () => {}
})

export default NotefulContext
