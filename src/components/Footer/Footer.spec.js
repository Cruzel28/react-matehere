/* global describe test */

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
    test('should have text © 2020 Created By Team Project CAMT DII TEAM 4', () => {
        const { getByText } = render(
          <MemoryRouter>
            <Footer />
          </MemoryRouter>
        )
        expect(getByText(/© 2020 Created By Team Project CAMT DII TEAM 4/)).toBeInTheDocument()
      })
  
  })