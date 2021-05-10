import React from 'react'
import { PlanetProps } from '@features/planet/components/Planet/interface'
import { withPlanet } from './withPlanet'

const Planet = ({ name, climate, terrain, population }: PlanetProps) => {
  return (
    <div className='p-3 mt-10 bg-gray-300 rounded-sm bg-opacity-25'>
      <p className='mb-3 text-xl'>{name}</p>
      <p className='text-sm'>Climate: {climate}</p>
      <p className='text-sm'>Terrain: {terrain}</p>
      <p className='text-sm'>Total population: {population}</p>
    </div>
  )
}

export default withPlanet(Planet)
