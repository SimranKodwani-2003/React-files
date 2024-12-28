// ##iss file ko lene ko main moto ye h ki hum fragments ko sahi arange kr payenge

import React from 'react'
import Usercontext from './Usercontext'


// children use for jo bhi hum de wo sequence m aayega
const Usercontextprovider = ({children}) => {
    const [User,setUser]=React.useState(null)
  return (
    <Usercontext.Provider value={{User,setUser}}>
    {children}
    </Usercontext.Provider>
  )
}

export default Usercontextprovider
