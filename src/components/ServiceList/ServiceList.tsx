import { useState } from 'react'
import { ScrollArea, Table, Text } from '@mantine/core'
import { useStyles } from './styles'
import { Service } from '../../types/service'

interface ServiceListProps {
  services?: Service[]
}

const ServiceList = ({ services }: ServiceListProps) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  return (
    <ScrollArea
      h={210}
      scrollbarSize={8}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >{ services ? 
      <Table mt="sm" highlightOnHover>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Code</th>
            <th style={{ width: '50%' }}>Description</th>
            <th>Date</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.code}</td>
              <td style={{ width: '50%' }}>{service.desc}</td>
              <td>{service.date?.toLocaleString('en-us', { month:"long", day:"numeric", year:"numeric"})}</td>
              <td>${service.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
     : <Text color='dimmed' align='center' size='sm'>This customer does not have any services yet.</Text>}
     </ScrollArea>
  )
}

export default ServiceList
