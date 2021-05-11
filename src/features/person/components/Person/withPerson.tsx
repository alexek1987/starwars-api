import React, { useState, useEffect } from 'react'
// import { PersonProps } from '@features/person/components/Person/interface'
// import { PersonModel } from '@model/Person/PersonModel'

const withPerson = (Component: React.FC<any>) => {
  function Hoc({ ...props }) {
    const newProps = {
      ...props,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPerson }
