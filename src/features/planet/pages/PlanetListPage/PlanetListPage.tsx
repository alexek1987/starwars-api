import { Children } from 'react'
import { PlanetListPageProps } from '@features/planet/pages/PlanetListPage/interface'
import Planet from '@features/planet/components/Planet/Planet'
import { withPlanetList } from './withPlanetList'

const PlanetListPage = ({ data, isLoading }: PlanetListPageProps) => {
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='container mx-auto h-16'>
      <h1 className='mt-3 ml-2 text-left text-xl'>Planets</h1>
      <div>
        {Children.toArray(data?.results.map(planet => <Planet {...planet} />))}
      </div>
    </div>
  )
}

export default withPlanetList(PlanetListPage)
