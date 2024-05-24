import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='dropdown2'>
        <button className='dropbtn2'>
          Dungeon & Dragons
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='error'>Introduction + Our Thoughts</a>
          <a href='https://dnd.wizards.com' target='_blank' rel='noreferrer'>
            Official website
          </a>
        </div>
      </div>
      <div className='dropdown2'>
        <button className='dropbtn2'>
          Pathfinder
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='error'>Introduction + Our Thoughts</a>
          <a href='https://www.youtube.com/watch?v=sP1HIWyv8DI' target='_blank' rel='noreferrer'>
            Fast Start & Introduction
          </a>
        </div>
      </div>
      <div className='dropdown2'>
        <button className='dropbtn2'>
          Lord of the Rings : Adventure in Middle Earth
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='error'>Introduction + Our Thoughts</a>
          <a href='https://www.youtube.com/watch?v=uddCmjd3R4M' target='_blank' rel='noreferrer'>
            Why should you play Adventures in Middle Earth?
          </a>
        </div>
      </div>
      <div className='dropdown2'>
        <button className='dropbtn2'>
          Players&apos; Tools
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='error'>Introduction</a>
          <a href='dnd-form'>Character Creation</a>
        </div>
      </div>
      <div className='dropdown2'>
        <button className='dropbtn2'>
          Game Masters&apos; Tools
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='error'>Introduction</a>
          <a href='error'>blabla</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
