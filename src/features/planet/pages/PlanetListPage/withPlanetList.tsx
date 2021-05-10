import React from 'react'
import { PlanetListPageProps } from '@features/planet/pages/PlanetListPage/interface'
import { useAppClient } from '@client/useAppClient'
import { useQuery } from 'react-query'

const withPlanetList = (Component: React.FC<PlanetListPageProps>) => {
  function Hoc() {
    const appClient = useAppClient()

    const { data, isLoading } = useQuery('get-planet-list', () =>
      appClient?.planet.getPlanetList()
    )
    const newProps = {
      data,
      isLoading,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPlanetList }
