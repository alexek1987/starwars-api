import { Children } from 'react'
import { Link } from 'react-router-dom'
import { PersonListPageProps } from '@features/person/pages/PersonListPage/interface'
import Person from '@features/person/components/Person/Person'
import swLogo from '@assets/images/swLogo.png'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withPersonList } from './withPersonList'

const PersonListPage = ({
  data,
  isLoading,
  setPage,
  page,
}: PersonListPageProps) => {
  if (isLoading) return <div>Loading...</div>

  console.log(data)

  return (
    <div className='container mx-auto h-16'>
      <div className='animate-pulse'>
        <img className='mx-auto' width='150' src={swLogo} alt='' />
      </div>
      {Children.toArray(data?.people.map(person => <Person person={person} />))}

      {page > 1 && (
        <PrimaryButton
          title='Previous Page'
          onClick={() => setPage(prev => prev - 1)}
        />
      )}
      <PrimaryButton
        title='Next Page'
        onClick={() => setPage(prev => prev + 1)}
      />
      <Link to='/'>
        <div className='mt-4'>Go back</div>
      </Link>
    </div>
  )
}

export default withPersonList(PersonListPage)
