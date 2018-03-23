import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import DiscussionPlayer from './DiscussionPlayer'

const App = () => (
  <div>
    <Navbar />
    <DiscussionPlayer />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
