/* global describe test */

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import RegisterLogin from '.'

describe('RegisterLogin', () => {
  test('should have style color white in Button  ', () => {
    const { Button } = render(
    <MemoryRouter>
    <RegisterLogin />
    </MemoryRouter>)
    
    expect(Button).toHaveStyle('color: #fff;');
  })

})