import { Children } from 'react'
import { PersonListPageProps } from '@features/person/pages/PersonListPage/interface'
import Person from '@features/person/components/Person/Person'
import { withPersonList } from './withPersonList'

const PersonListPage = ({ data, isLoading }: PersonListPageProps) => {
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='container mx-auto h-16'>
      <h1 className='mt-3 ml-2 text-center text-xl'>People</h1>
      <div>
        {console.log(data)}
        {Children.toArray(data?.results?.map(person => <Person {...person} />))}
      </div>
    </div>
  )
}

export default withPersonList(PersonListPage)
