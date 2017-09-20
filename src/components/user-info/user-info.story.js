'use strict'

import React from 'react'

import { storiesOf } from '@kadira/storybook'
import UserInfo from './index'

storiesOf('User Info', module)
  .add('with image user', () => (
    <UserInfo
      userinfo={{
        photo: 'https://consequenceofsound.files.wordpress.com/2017/04/rick-and-morty.jpg?quality=80&w=350&h=350&crop=1'
      }}
    />
  ))

  .add('with name user', () => (
    <UserInfo
      userinfo={{
        photo: 'https://consequenceofsound.files.wordpress.com/2017/04/rick-and-morty.jpg?quality=80&w=350&h=350&crop=1',
        login: 'evertondenis',
        username: 'Rick'
      }}
    />
  ))

  .add('with repos user', () => (
    <UserInfo
      userinfo={{
        photo: 'https://consequenceofsound.files.wordpress.com/2017/04/rick-and-morty.jpg?quality=80&w=350&h=350&crop=1',
        login: 'evertondenis',
        username: 'Rick',
        repos: 10
      }}
    />
  ))

  .add('with followers', () => (
    <UserInfo
      userinfo={{
        photo: 'https://consequenceofsound.files.wordpress.com/2017/04/rick-and-morty.jpg?quality=80&w=350&h=350&crop=1',
        login: 'evertondenis',
        username: 'Rick',
        repos: 10,
        followers: 225
      }}
    />
  ))

  .add('with following', () => (
    <UserInfo
      userinfo={{
        photo: 'https://consequenceofsound.files.wordpress.com/2017/04/rick-and-morty.jpg?quality=80&w=350&h=350&crop=1',
        login: 'evertondenis',
        username: 'Rick',
        repos: 10,
        followers: 225,
        following: 15
      }}
    />
  ))
