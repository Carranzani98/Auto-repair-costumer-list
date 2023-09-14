import { screen, render } from '@testing-library/react'
import ServiceList from './ServiceList'

const services = [
  {
    code: '001',
    desc: 'Service 1',
    date: new Date('2023-09-15'),
    cost: 50,
  },
  {
    code: '002',
    desc: 'Service 2',
    date: new Date('2023-09-16'),
    cost: 75,
  },
]

describe('ServiceList', () => {

  test('renders the list of services', () => {
    render(<ServiceList services={services} />)
    const service1 = screen.getByText('Service 1')
    const service2 = screen.getByText('Service 2')
    expect(service1).toBeInTheDocument()
    expect(service2).toBeInTheDocument()
  })
  
  test('renders service details correctly', () => {
    render(<ServiceList services={services} />)
    const code1 = screen.getByText('001')
    const code2 = screen.getByText('002')
    const date1 = screen.getByText('September 15, 2023')
    const date2 = screen.getByText('September 16, 2023')
    const cost1 = screen.getByText('$50.00')
    const cost2 = screen.getByText('$75.00')
    expect(code1).toBeInTheDocument()
    expect(code2).toBeInTheDocument()
    expect(date1).toBeInTheDocument()
    expect(date2).toBeInTheDocument()
    expect(cost1).toBeInTheDocument()
    expect(cost2).toBeInTheDocument()
  })

})
