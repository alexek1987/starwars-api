import { PersonProps } from '@features/person/components/Person/interface'
import { withPerson } from './withPerson'

const Person = ({ name, gender, height }: PersonProps) => {
  return (
    <div className='p-3 mt-10 bg-gray-300 rounded-sm bg-opacity-25'>
      <p className='mb-3 text-xl'>{name}</p>
      <p className='text-sm'>Climate: {gender}</p>
      <p className='text-sm'>Terrain: {height}</p>
    </div>
  )
}

export default withPerson(Person)
