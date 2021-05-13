import { Children } from 'react'
import { Link } from 'react-router-dom'
import { PlanetListPageProps } from '@features/planet/pages/PlanetListPage/interface'
import Planet from '@features/planet/components/Planet/Planet'
import swLogo from '@assets/images/swLogo.png'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withPlanetList } from './withPlanetList'

const PlanetListPage = ({
  data,
  isLoading,
  setPage,
  page,
}: PlanetListPageProps) => {
  if (isLoading) return <div>Loading...</div>

  console.log(data)

  return (
    <div className='container mx-auto h-16'>
      <div className='animate-pulse'>
        <img className='mx-auto' width='150' src={swLogo} alt='' />
      </div>
      <div>
        {Children.toArray(
          data?.planets.map(planet => <Planet planet={planet} />)
        )}
      </div>
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

export default withPlanetList(PlanetListPage)
