import React from 'react'
import { useQuery } from 'react-query'
import { useAppClient } from '@client/useAppClient'
import { PlanetProps } from '@features/planet/components/Planet/interface'
import { PlanetModel } from '@model/Planet/PlanetModel'

const withPlanet = (Component: React.FC<PlanetProps>) => {
  function Hoc(props: PlanetModel) {
    const newProps = {
      ...props,
    }

    return <Component {...props} />
  }

  return Hoc
}

export { withPlanet }
