/* global describe test */

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
  test('should have link navigate to หน้าแรก, หาเมท, หาห้อง and เข้าสู่ระบบ', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/หน้าแรก/)).toBeInTheDocument()
    expect(getByText(/หาเมท/)).toBeInTheDocument()
    expect(getByText(/หาห้อง/)).toBeInTheDocument()
    expect(getByText(/เข้าสู่ระบบ/)).toBeInTheDocument()

    expect(getByText(/หน้าแรก/).closest('a')).toHaveAttribute('href', '/')
    expect(getByText(/หาเมท/).closest('a')).toHaveAttribute('href', '/haveroom')
    expect(getByText(/หาห้อง/).closest('a')).toHaveAttribute('href', '/needroom')
    expect(getByText(/เข้าสู่ระบบ/).closest('a')).toHaveAttribute('href', '/login')
  })

})
