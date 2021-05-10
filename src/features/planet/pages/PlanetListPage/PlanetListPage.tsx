import { Children } from 'react'
import { PlanetListPageProps } from '@features/planet/pages/PlanetListPage/interface'
import Planet from '@features/planet/components/Planet/Planet'
import swLogo from '@assets/images/swLogo.png'
import { withPlanetList } from './withPlanetList'

const PlanetListPage = ({ data, isLoading }: PlanetListPageProps) => {
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='container mx-auto h-16'>
      <img className='mx-auto' width='150' src={swLogo} alt='' />
      <div>
        {Children.toArray(data?.results.map(planet => <Planet {...planet} />))}
      </div>
    </div>
  )
}

export default withPlanetList(PlanetListPage)
