import React from 'react';
import './ProjectItem.css';
import OpenLink from '../assets/Open-Link-Icon.svg';

export default function ProjectItem(props) {
  return (
    <>
        <div className='projectitem-wrapper'>
          <a href={props.link} target='_blank'>
            <div className='project-details'>
                <img src={OpenLink} alt='Open Link' />
                <h2>{props.title}</h2>
                <a href={props.link} target='_blank'>{props.linkName}</a>
            </div>
            <div className='project-img'>
                <img src={props.image} alt={props.imageName} className='p-img' />
            </div>
          </a>
        </div>
    </>
  )
}
