import { SimpleGrid } from '@mantine/core'
import CustomerCard from './CustomerCard'
import { Customer } from '../../types/customer'

interface CustomerListProps {
  customers: Customer[]
  onClickAddService: (customerId: number) => void
}
const CustomerList = ({
  customers,
  onClickAddService,
}: CustomerListProps) => {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
      {customers.map((customer, index) => (
        <CustomerCard
          key={index}
          customer={customer}
          onClickAddService={() => onClickAddService(index)}
        />
      ))}
    </SimpleGrid>
  )
}

export default CustomerList
