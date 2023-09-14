import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'

describe("App", () => {
  test('renders App component', async () => {
    render(<App />)
    const titleElement = screen.getByRole('heading')
    expect(titleElement).toHaveTextContent(/Customer Visits/i)
  })
  
  test('opens AddServiceForm when clicking on a customer', () => {
    render(<App />)
    const addButtons = screen.getAllByRole('button')
    fireEvent.click(addButtons[0])
    const serviceFormTitle = screen.getByRole('heading')
    expect(serviceFormTitle).toHaveTextContent(/Add New Service/i)
  })
})
