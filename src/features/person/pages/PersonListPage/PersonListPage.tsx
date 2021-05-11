import { Children } from 'react'
import { PersonListPageProps } from '@features/person/pages/PersonListPage/interface'
import Person from '@features/person/components/Person/Person'
import swLogo from '@assets/images/swLogo.png'
import { withPersonList } from './withPersonList'

const PersonListPage = ({ data, isLoading }: PersonListPageProps) => {
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='container mx-auto h-16'>
      <img className='mx-auto' width='150' src={swLogo} alt='' />
      <div>test</div>
    </div>
  )
}

export default withPersonList(PersonListPage)
