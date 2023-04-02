import React from 'react'
import { useEffect } from 'react';
import ExperienceList from './ExperienceList'



export default function Experience() {
  useEffect(() => {
    document.title = `Adekoye Adewale's Experience`;
  }, []);
  
  return (
    <>
      <div className='contents'>
        <div>
          <ExperienceList />
        </div>
      </div>
    </>
  )
}
