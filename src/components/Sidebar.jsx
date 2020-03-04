import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.bg2};
  transition: all ease 0.5s;
`

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 150px;
  @media only screen and (max-width: 820px) {
    height: 50px;
    width: 50px;
  }
`

const ProfileWrapper = styled.div`
  @media only screen and (max-width: 820px) {
    display: flex;
    align-items: center;
  }
`

const Name = styled.h1`
  white-space: wrap;
  @media only screen and (max-width: 820px) {
    white-space: nowrap;
    padding-left: 10px;
  }
`

const Sidebar = ({ data }) => (
  <Wrapper>
    <ProfileWrapper>
      <ProfilePic src="https://avatars2.githubusercontent.com/u/9383709?s=150" />
      <Name>
        {data.firstName} {data.lastName}
      </Name>
    </ProfileWrapper>
    <p>{data.bio}</p>
    <div>
      <p>
        <FontAwesomeIcon fixedWidth icon="briefcase" /> {data.job}
      </p>
      <p>
        <FontAwesomeIcon fixedWidth icon="graduation-cap" /> {data.studies}
      </p>
      <p>
        <FontAwesomeIcon fixedWidth icon="map-marker-alt" /> {data.location}
      </p>
      <p>
        <FontAwesomeIcon fixedWidth icon={['fab', 'github']} />{' '}
        <a href={`https://github.com/${data.github}`}>@{data.github}</a>
      </p>
      <p>
        <FontAwesomeIcon fixedWidth icon={['fab', 'twitter']} />{' '}
        <a href={`https://twitter.com/${data.twitter}`}>@{data.twitter}</a>
      </p>
    </div>
  </Wrapper>
)

export default Sidebar
