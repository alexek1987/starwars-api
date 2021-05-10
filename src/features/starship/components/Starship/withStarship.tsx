import React from 'react'
import { useQuery } from 'react-query'
import { useAppClient } from '@client/useAppClient'
import { StarshipProps } from '@features/starship/components/Starship/interface'
import { StarshipModel } from '@model/Starship/StarshipModel'

const withStarship = (Component: React.FC<StarshipProps>) => {
  function Hoc(props: StarshipModel) {
    const newProps = {
      ...props,
    }

    return <Component {...props} />
  }

  return Hoc
}

export { withStarship }
