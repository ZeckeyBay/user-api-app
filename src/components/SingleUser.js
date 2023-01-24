import React from 'react'

const SingleUser = ({user}) => {
  return (
    <div className='single-user'>
        <img src={user.picture.large} alt=""/>
        <div className='user-info'>
            <h1 className='user-title'>{user.name.first} {user.name.last}</h1>
            <p className='user-mail'>Email : {user.email}</p>
            <p className='user-location'>{user.location.country} | {user.location.city}</p>

        </div>
    </div>
  )
}

export default SingleUser