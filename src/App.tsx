import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Container, Title } from '@mantine/core'
import CustomerList from './components/CustomerList/CustomerList'
import AddServiceForm from './components/AddServiceFrom/AddServiceForm'
import customers from './data/customers'
import { Customer } from './types/customer'
import { Service } from './types/service'

const App= () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [customersData, setCustomersData] = useState<Customer[]>(customers)
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null)

  const handleSaveService = (formData: Service): void => {
    const updatedCustomersData = customersData.map(customer => ({
      ...customer,
    }))

    if(selectedCustomer !== null){
      updatedCustomersData[selectedCustomer].service?.push({
        code: formData.code,
        desc: formData.desc,
        date: formData.date,
        cost: formData.cost,
      })
      setCustomersData(updatedCustomersData)
    }    
  }

  return (
    <>
      <Container size="xl" p="lg">
        <Title align="left" mb="xl">
          Customer Visits
        </Title>
        <CustomerList customers={customers} onClickAddService={(customer) => {
            open()
            setSelectedCustomer(customer)
           }
           } />
        <AddServiceForm
          onSave={handleSaveService}
          isServiceFormOpened={opened}
          closeServiceForm={close}
        />
      </Container>
    </>
  )
}

export default App
