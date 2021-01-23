import React from 'react'

const UserData = ({user}) => {
  return (
    <dl>
      <dt><img src={user.avatar_url} alt={user.login} /></dt>
      <dd><a href={user.html_url} target="_blank">{user.name}</a></dd>
      <dd>{user.id}</dd>
      <dd>{user.created_at}</dd>
      <dd>{user.updated_at}</dd>
    </dl>
  )
}

export default UserData;
