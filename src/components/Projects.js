import React from 'react';
import { useEffect } from 'react';
import ProjectLists from './ProjectLists';
import './Projects.css';



export default function Projects() {
  useEffect(() => {
    document.title = `Adewale's Projects`;
  }, []);
  
  return (
    <>
        <div className='contents'>
            <div>
                <ProjectLists />
            </div>
        </div>
    </>
  )
}
