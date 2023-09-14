import { Button, Group, Paper, Stack, Text } from '@mantine/core'
import ServiceList from '../ServiceList/ServiceList'
import { Customer } from '../../types/customer'

interface CustomerCardProps {
  customer: Customer
  onClickAddService: () => void
}

const CustomerCard = ({ customer, onClickAddService }: CustomerCardProps) => {
  return (
    <Paper p="md" shadow="xs" h={300}>
      <Stack spacing={8}>
        <Group position="apart" align="center">
          <Text size="xl" fw={700}>
            {customer.firstName} {customer.lastName}
          </Text>
          <Button
            size="sm"
            color="cyan.5"
            radius="sm"
            variant="subtle"
            compact
            onClick={() => onClickAddService()}
          >
            Add new service
          </Button>
        </Group>
        <Text size="sm" color="dimmed">
          {customer.year} {customer.make} {customer.model}
        </Text>
        <ServiceList services={customer.service} />
      </Stack>
    </Paper>
  )
}

export default CustomerCard
