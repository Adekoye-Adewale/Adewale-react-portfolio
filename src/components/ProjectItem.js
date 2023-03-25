import React from 'react'

export default function ProjectItem(props) {
  return (
    <>
        <div>
            <div>
                <img src='...' alt='...' />
                <h2>{props.title}</h2>
                <a href='#' target='_blank'>{props.link}</a>
            </div>
            <div>
                <img src='...' alt='...' />
            </div>
        </div>
    </>
  )
}
