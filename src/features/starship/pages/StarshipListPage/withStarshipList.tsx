import React from 'react'
import { StarshipListPageProps } from '@features/starship/pages/StarshipListPage/interface'
import { useAppClient } from '@client/useAppClient'
import { useQuery } from 'react-query'

const withStarshipList = (Component: React.FC<StarshipListPageProps>) => {
  function Hoc() {
    const appClient = useAppClient()

    // const { data, isLoading } = useQuery('get-starship-list', () =>
    //   appClient?.starship.getStarship()
    // )
    // const newProps = {
    //   data,
    //   isLoading,
    // }

    // return <Component {...newProps} />
  }

  return Hoc
}

export { withStarshipList }
