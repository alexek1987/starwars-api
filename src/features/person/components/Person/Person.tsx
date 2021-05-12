import { Link } from 'react-router-dom'
// import { PersonProps } from '@features/person/components/Person/interface'
import { withPerson } from './withPerson'

const Person = ({ name, url }) => {
  const urlId = url.split('/')[5]

  return (
    <Link to={`/people/${urlId}`}>
      <div className='p-3 mt-10 bg-gray-300 rounded-sm bg-opacity-25'>
        <p className='mb-3 text-xl'>{name}</p>
      </div>
    </Link>
  )
}

export default withPerson(Person)
