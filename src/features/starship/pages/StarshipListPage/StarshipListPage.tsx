import { Children } from 'react'
import { StarshipListPageProps } from '@features/starship/pages/StarshipListPage/interface'
import Starship from '@features/starship/components/Starship/Starship'
import { withStarshipList } from './withStarshipList'

const StarshipListPage = ({ data, isLoading }: StarshipListPageProps) => {
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='container mx-auto h-16'>
      <h1 className='mt-3 ml-2 text-center text-xl'>Starships</h1>
      <div>
        {Children.toArray(
          data?.results.map(starship => <Starship {...starship} />)
        )}
      </div>
    </div>
  )
}

export default withStarshipList(StarshipListPage)
