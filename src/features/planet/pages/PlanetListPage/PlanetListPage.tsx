import { Children } from 'react'
import { PlanetListPageProps } from '@features/planet/pages/PlanetListPage/interface'
import Planet from '@features/planet/components/Planet/Planet'
import swLogo from '@assets/images/swLogo.png'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withPlanetList } from './withPlanetList'

const PlanetListPage = ({ data, isLoading, setPage, page }: any) => {
  if (isLoading) return <div>Loading...</div>

  const setPageHandler = () => {
    setPage(prevState => prevState + 1)
  }

  // setPage(3)

  return (
    <div className='container mx-auto h-16'>
      <img className='mx-auto' width='150' src={swLogo} alt='' />
      <div>
        {Children.toArray(data?.results.map(planet => <Planet {...planet} />))}
      </div>
      <PrimaryButton
        title='Previous Page'
        onClick={() => setPage(prev => prev - 1)}
      />
      <PrimaryButton
        title='Next Page'
        onClick={() => setPage(prev => prev + 1)}
      />
    </div>
  )
}

export default withPlanetList(PlanetListPage)
