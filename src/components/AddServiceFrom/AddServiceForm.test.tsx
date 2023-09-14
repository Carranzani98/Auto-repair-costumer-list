import { render, screen, fireEvent, waitFor, getByRole, act } from '@testing-library/react'
import AddServiceForm from './AddServiceForm'

jest.useFakeTimers()

jest.mock('../../utils/promiseDelay', () => ({
  promiseDelay: () => Promise.resolve(),
}))

describe('AddServiceForm', () => {
  test('renders AddServiceForm component', () => {
    const onSave = jest.fn()
    const closeServiceForm = jest.fn()
  
    render(
      <AddServiceForm
        isServiceFormOpened={true}
        onSave={onSave}
        closeServiceForm={closeServiceForm}
      />
    )
  
    const saveButton = screen.getByText(/Save Service/i)
    expect(saveButton).toBeInTheDocument()
  })

  test('displays error message for invalid input', () => {
    render(<AddServiceForm isServiceFormOpened={true} onSave={jest.fn}  closeServiceForm={() =>{}} />)
  
    fireEvent.click(screen.getByText('Save Service'))
    
    expect(screen.getByText(/Service Code is required/i)).toBeInTheDocument()
    expect(screen.getByText(/Service Date is required/i)).toBeInTheDocument()    
  })
  
  test('calls onSave function when the form is submitted with valid input', async () => {
    const mockOnSave = jest.fn()
    render(
      <AddServiceForm isServiceFormOpened={true} onSave={mockOnSave}  closeServiceForm={() => {}} />
    )
    const codeInput = screen.getByLabelText(/Service Code/i)
    const dateInput = screen.getByLabelText(/Service Date/i)
    const costInput = screen.getByLabelText(/Service Cost/i)

    fireEvent.change(codeInput, { target: { value: '123' } })
    fireEvent.change(dateInput, { target: { value: '2023-09-16' } })
    fireEvent.change(costInput, { target: { value: '50' } })
    
    fireEvent.click(screen.getByText('Save Service'))
  
    await act(async () => {
      jest.advanceTimersByTime(3000) // Advance timers by 3 seconds
    })

      expect(mockOnSave).toHaveBeenCalledWith({
        code: '123',
        date: new Date('2023-09-16'),
        cost: 50,
        desc: '',
      })
  
  })

  test('closes the drawer when the close button is clicked', () => {
    const mockCloseServiceForm = jest.fn()
    render(
      <AddServiceForm isServiceFormOpened={true} closeServiceForm={mockCloseServiceForm} onSave={jest.fn} />
    )
  
    fireEvent.click(screen.getByRole('button',{name: ""}))
    
    expect(mockCloseServiceForm).toHaveBeenCalled()
    
  })
  
})
