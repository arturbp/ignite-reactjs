import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'
import { useEffect, useState } from 'react'

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(resp => resp.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(reposytory => (
          <RepositoryItem key={reposytory.name} repository={reposytory} />
        ))}
      </ul>
    </section>
  )
}