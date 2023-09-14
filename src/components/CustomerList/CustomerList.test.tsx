import { render, screen } from '@testing-library/react'
import CustomerList from './CustomerList'

test('renders CustomerList component with customers', () => {
  const customers = [
    { firstName: 'John',
      lastName: 'Smith',
      year: '2020',
      make: 'Hyundai',
      model: 'i20'},
    { firstName: 'Laura',
    lastName: 'Polo',
    year: '2000',
    make: 'Renault',
    model: 'Clio'},
  ]

  render(<CustomerList customers={customers} onClickAddService={(customerId) => console.log(customerId)}/>)
  const firstElement = screen.getByText(/John Smith/i)
  const secondElement = screen.getByText(/Laura Polo/i)

  expect(firstElement).toBeInTheDocument()
  expect(secondElement).toBeInTheDocument()
})