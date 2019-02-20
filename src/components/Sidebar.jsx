import React from 'react'
import styled from 'styled-components'

const ProfilePic = styled.img`
  border-radius: 50%;
`

const Sidebar = ({ data }) => {
  return (
    <div>
      <ProfilePic src="https://avatars2.githubusercontent.com/u/9383709?s=100" />
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <p>{data.studies}</p>
      <p>{data.location}</p>
    </div>
  )
}

export default Sidebar
