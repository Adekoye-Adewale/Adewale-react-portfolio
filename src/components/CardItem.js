import React from 'react';
import './CardItem.css';

export default function CardItem(props) {
  return (
    <>
        <div className='projectitem-wrapper'>
          <a href={props.link} target='_blank' rel="noreferrer">
            <div className='project-details'>
                <img src={props.icon} alt='Open Link' />
                <h2>{props.title}</h2>
                <a href={props.link} target='_blank' rel="noreferrer">{props.linkName}</a>
            </div>
            <div className='project-img'>
                <img src={props.image} alt={props.imageName} className='p-img' />
            </div>
          </a>
        </div>
    </>
  )
}
