import React, { useState } from 'react'
import Aside from './layout/Aside'
import Main from './layout/Main'


export default function Settings() {
     const [page, setPage] = useState('profile')
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_6fr]'>
        
        <Aside page={page} setPage={setPage}/>

        <Main page={page}/>
        
    </div>
  )
}
