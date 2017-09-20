'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'

import './style.scss'

const AppContent = ({ handleSearch, userinfo, repos, starred, isFetching, getRepos, getStarred }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
