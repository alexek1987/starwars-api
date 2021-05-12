import { Children } from 'react'
import { Link } from 'react-router-dom'
import swLogo from '@assets/images/swLogo.png'
import { Form, Formik, Field } from 'formik'
import { PersonInfoProps } from '@features/person/pages/PersonInfoPage/interface'
import styles from '@features/authentication/pages/LoginPage/index.module.scss'
import InputField from '@components/form/InputField/InputField'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withPersonInfo } from '../withPersonInfo'

const PersonInfoPage = ({
  data,
  handleOnSubmit,
  initialValues,
}: PersonInfoProps): any => {
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
                <InputField type='text' name='gender' label='Gender' />
              </div>
              <div className=''>
                <InputField type='text' name='height' label='Height' />
              </div>
              <div className=''>
                <InputField type='text' name='hair_color' label='Hair Color' />
              </div>
              <div className=''>
                <InputField type='text' name='eye_color' label='Eye Color' />
              </div>
              <div className=''>
                <InputField type='text' name='birth_year' label='Birth Year' />
              </div>
              <div className=''>
                <InputField type='text' name='skin_color' label='Skin Color' />
              </div>
              {data?.starships.length > 0 && (
                <div className='flex flex-col text-2xl font-bold mt-3'>
                  <span className='mb-3'>Primary Starship</span>
                  <Field as='select' name='primary_starship'>
                    {Children.toArray(
                      data?.starships.map(ship => {
                        return <option>{ship.name}</option>
                      })
                    )}
                  </Field>
                </div>
              )}
              {data?.vehicles?.length > 0 && (
                <div className='flex flex-col text-2xl font-bold mt-3'>
                  <span className='mb-3'>Primary Vehicle</span>
                  <Field as='select' name='primary_vehicle'>
                    {Children.toArray(
                      data?.vehicles.map(vehicle => {
                        return <option>{vehicle.name}</option>
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
      <Link to='/people'>
        <div className='mt-4'>Go back</div>
      </Link>
    </div>
  )
}

export default withPersonInfo(PersonInfoPage)
