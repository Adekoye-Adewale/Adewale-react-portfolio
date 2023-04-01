import React from 'react'
import './AboutComponent.css'

export default function AboutComponent(props) {
  return (
    <>
        <div className='aboutwrapper'>
            <h3>{props.abttitle}</h3>
            <div>
                <div><p>{props.lttext}</p></div>
                <div><p>{props.rhttext}</p></div>
            </div>
        </div>
    </>
  )
}
