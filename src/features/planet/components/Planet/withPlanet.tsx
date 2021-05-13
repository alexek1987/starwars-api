import React from 'react'
import { useQuery } from 'react-query'
import { useAppClient } from '@client/useAppClient'
import { PlanetProps } from '@features/planet/components/Planet/interface'
import { PlanetModel } from '@model/Planet/PlanetModel'

const withPlanet = (Component: React.FC<PlanetProps>) => {
  function Hoc(planet: PlanetProps) {
    return <Component {...planet} />
  }

  return Hoc
}

export { withPlanet }
