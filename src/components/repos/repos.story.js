'use strict'

import React from 'react'

import { storiesOf } from '@kadira/storybook'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => (
    <Repos title='Favoritos' />
  ))

  .add('with repos', () => (
    <Repos
      title='Favoritos'
      repos={[{
        link: 'http://google.com.br',
        name: 'Google'
      }]}
    />
  ))
