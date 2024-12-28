import React,{useContext} from 'react'
import Usercontext from '../context/Usercontext'

function Profile() {
    const{User}=useContext(Usercontext)

    if (!User) return <div>
        "please login"
    </div> 

    return <div>
        "welcome {User.Username}"
    </div>
}
export default Profile
