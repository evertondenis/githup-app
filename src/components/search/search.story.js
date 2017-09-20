'use strict'

import React from 'react'

import { storiesOf } from '@kadira/storybook'
import Search from './index'

storiesOf('Search', module)
  .add('input', () => (
    <Search />
  ))
