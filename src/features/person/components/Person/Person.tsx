import { useState, useEffect, Children } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { PersonProps } from '@features/person/components/Person/interface'
import { withPerson } from './withPerson'

const Person = ({ name, url, favVehicle, favStarship }: PersonProps) => {
  // slice out the id of person's url
  const urlId = url.slice(-3)

  return (
    <Link to={`/people/${urlId}`}>
      <div className='p-3 mt-10 bg-gray-300 rounded-sm bg-opacity-25'>
        <p className='mb-3 text-xl'>{name}</p>
        <p className='mb-3 text-xl'>{favVehicle}</p>
        <p className='mb-3 text-xl'>{favStarship}</p>
      </div>
    </Link>
  )
}

export default withPerson(Person)
