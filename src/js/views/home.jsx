import React, { useContext, useEffect } from 'react'
import Context from '../store/appContext.js'
import Card from '../component/Card.jsx'

const home = () => {
    const { store, actions } = useContext(Context)

    useEffect(() =>{
        actions.getPeople()
    }, [])

  return (

    <div>
        {
            store.people.map((ele)=>(<Card character={ele}/>))
        }
    </div>
  )
}

export default home