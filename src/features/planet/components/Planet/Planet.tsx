import React from 'react'
import { Link } from 'react-router-dom'
import { PlanetProps } from '@features/planet/components/Planet/interface'
import { withPlanet } from './withPlanet'

const Planet = ({ planet }: PlanetProps) => {
  const urlId = planet.url.split('/')[5]
  return (
    <Link to={`/planets/${urlId}`}>
      <div className='p-3 mt-10 bg-gray-300 rounded-sm bg-opacity-25'>
        <p className='mb-3 text-xl'>{planet.name}</p>
      </div>
    </Link>
  )
}

export default withPlanet(Planet)
