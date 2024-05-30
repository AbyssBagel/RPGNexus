import React from 'react'
import logo from '../../img/icon.png'
import './PageHeader.scss'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const PageHeader = () => {
  const titles = [
    'Dungeon & Dragons',
    'Pathfinder',
    'Lord of the Rings : Adventure in Middle Earth',
    "Players' Tools",
    "Game Masters' Tools",
  ]
  const dropdown = [
    [
      { name: 'Introduction + Our Thoughts', link: 'error' },
      { name: 'Official website', link: 'https://dnd.wizards.com' },
    ],
    [
      { name: 'Introduction + Our Thoughts', link: 'error' },
      { name: 'Fast Start & Introduction', link: 'https://www.youtube.com/watch?v=sP1HIWyv8DI' },
    ],
    [
      { name: 'Introduction + Our Thoughts', link: 'error' },
      { name: 'Why should you play Adventures in Middle Earth?', link: 'https://www.youtube.com/watch?v=uddCmjd3R4M' },
    ],
    [
      { name: 'Introduction', link: 'error' },
      { name: 'Character Creation', link: '/characters/builder/dnd' },
    ],
    [
      { name: 'Introduction', link: 'error' },
      { name: 'blabla Us', link: 'error' },
    ],
  ]

  return (
    <header>
      <div className="header-top">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" width="400px" />
          </div>
        </Link>
        <div className="login">
          <button className="button">Login</button>
        </div>
      </div>
      <NavBar titles={titles} dropdown={dropdown} />
    </header>
  )
}

export default PageHeader
