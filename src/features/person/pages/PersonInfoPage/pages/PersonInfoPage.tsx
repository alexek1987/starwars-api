import { Children, useState, useEffect } from 'react'
import swLogo from '@assets/images/swLogo.png'
import { Form, Formik } from 'formik'
import { PersonInfoProps } from '@features/person/pages/PersonInfoPage/interface'
import styles from '@features/authentication/pages/LoginPage/index.module.scss'
import InputField from '@components/form/InputField/InputField'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withPersonInfo } from '../withPersonInfo'
// import { PersonInfoProps } from '../interface'
//
// const PersonInfoPage = ({
//   personInfo,
//   ships,
//   favShip,
//   handleStarshipChange,
//   vechicles,
//   favVehicle,
//   handleVechicleChange,
//   sliceUrl,
// }): any => {
//   console.log(sliceUrl)
//   return (
//     <div className='container mx-auto h-16'>
//       <img className='mx-auto' width={200} src={swLogo} alt='logo' />
//       <div className='p-3 mt-10 bg-gray-300 rounded-sm bg-opacity-25'>
//         {Children.toArray(
//           personInfo.map(person => {
//             return (
//               <>
//                 <div>
//                   <p>{person.name}</p>
//                   <p>Gender: {person.gender}</p>
//                   <p>Hair color: {person.hair_color}</p>
//                   <p>Height: {person.height}</p>
//                 </div>
//                 <div>
//                   {ships.length > 0 && !favShip && (
//                     <div>
//                       <h1 className='text-sm mt-3'>Select Primary Ship</h1>
//                       <form>
//                         <select onChange={handleStarshipChange}>
//                           {Children.toArray(
//                             ships.map(ship => {
//                               return <option>{ship.name}</option>
//                             })
//                           )}
//                         </select>
//                         <button type='submit'>xSubmit</button>
//                       </form>
//                     </div>
//                   )}
//                   {ships.length > 0 && favShip && (
//                     <div>
//                       <h1 className='text-sm mt-3'>Primary Ship</h1>
//                       <p className='mb-3 text-xl'>{favShip}</p>
//                     </div>
//                   )}
//                 </div>
//                 <div>
//                   {vechicles.length > 0 && !favVehicle && (
//                     <div>
//                       <h1 className='text-sm mt-3'>Select Primary Vechicle</h1>
//                       <select onChange={handleVechicleChange}>
//                         {Children.toArray(
//                           vechicles.map(vechicle => {
//                             return <option>{vechicle.name}</option>
//                           })
//                         )}
//                       </select>
//                     </div>
//                   )}
//                   {vechicles.length > 0 && favVehicle && (
//                     <div>
//                       <h1 className='text-sm mt-3'>Primary Vechicle</h1>
//                       <p className='mb-3 text-xl'>{favVehicle}</p>
//                     </div>
//                   )}
//                 </div>
//               </>
//             )
//           })
//         )}
//       </div>
//     </div>
//   )
// }
//
//

const PersonInfoPage = ({
  data,
  handleOnSubmit,
  initialValues,
}: PersonInfoProps): any => {
  return (
    <div className='container mx-auto h-16'>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        {() => (
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
            <PrimaryButton title='Submit' />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default withPersonInfo(PersonInfoPage)
