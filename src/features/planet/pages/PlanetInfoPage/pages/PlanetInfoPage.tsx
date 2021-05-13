import { Children } from 'react'
import { Link } from 'react-router-dom'
import swLogo from '@assets/images/swLogo.png'
import { Form, Formik, Field } from 'formik'
import { PlanetInfoProps } from '@features/planet/pages/PlanetInfoPage/interface'
import styles from '@features/authentication/pages/LoginPage/index.module.scss'
import InputField from '@components/form/InputField/InputField'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withPlanetInfo } from '../withPlanetInfo'

const PlanetInfoPage = ({
  data,
  handleOnSubmit,
  initialValues,
}: PlanetInfoProps): any => {
  return (
    <div className='container mx-auto h-16'>
      <img className='mx-auto' width={200} src={swLogo} alt='sw' />
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        {() => (
          <>
            <Form>
              <div className=''>
                <InputField type='text' name='name' label='Name' />
              </div>
              <div className=''>
                <InputField type='text' name='terrain' label='Terrain' />
              </div>
              <div className=''>
                <InputField type='text' name='gravity' label='Gravity' />
              </div>
              <div className=''>
                <InputField type='text' name='climate' label='Climate' />
              </div>
              {data?.residents?.length > 0 && (
                <div className='flex flex-col text-2xl font-bold mt-3'>
                  <span className='mb-3'>Favorite Person</span>
                  <Field as='select' name='favorite_person'>
                    {Children.toArray(
                      data?.residents.map(resident => {
                        return <option>{resident.name}</option>
                      })
                    )}
                  </Field>
                </div>
              )}
              <PrimaryButton title='Submit' />
            </Form>
          </>
        )}
      </Formik>

      <Link to='/planets'>
        <div className='mt-4'>Go back</div>
      </Link>
    </div>
  )
}

export default withPlanetInfo(PlanetInfoPage)
