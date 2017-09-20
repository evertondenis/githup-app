'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repos, index) => (
        <li key={index}><a href={repos.link} target='_blank'>{repos.name}</a></li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
