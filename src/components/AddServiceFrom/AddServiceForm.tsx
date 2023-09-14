import { useState } from 'react'

import {
  Button,
  Drawer,
  Text,
  TextInput,
  NumberInput,
  Stack,
} from '@mantine/core'
import { promiseDelay } from '../../utils/promiseDelay'
import { useForm } from '@mantine/form'
import { DateInput } from '@mantine/dates'
import { Service } from '../../types/service'

interface AddServiceFormProps {
  isServiceFormOpened: boolean
  onSave: (values: Service) => void
  closeServiceForm: () => void
}

const AddServiceForm = ({
  isServiceFormOpened,
  onSave,
  closeServiceForm,
}: AddServiceFormProps) => {
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const form = useForm({
    initialValues: {
      code: '',
      desc: '',
      date: null,
      cost: 0,
    },
    validate: {
      code: (value) => (!value.trim() ? 'Service Code is required' : null),
      date: (value) => (!value ?  'Service Date is required' : null),
      cost: (value) => (value < 0 || value.toString() === ''  ? 'Service Cost is required' : null)
    },
  })

  const handleSave = async (formValues: Service): Promise<void> => {
    form.validate()
    if (form.isValid()) {
      setIsSaving(true)
      await promiseDelay(3000).then( () => {
        closeServiceForm()
        onSave(formValues)
        setIsSaving(false)
        form.reset()
      })
    }
  }

  return (
    <Drawer
      opened={isServiceFormOpened}
      onClose={() => {
        closeServiceForm() 
        form.reset()
      }}
      position="right"
      title={<Text fz="xl">Add New Service</Text>}
    > 
      <form onSubmit={form.onSubmit((values) => handleSave(values))}>
        <Stack>
          <TextInput
            withAsterisk
            disabled={isSaving}
            placeholder='Type a new code'
            label="Service Code"
            name="code"
            {...form.getInputProps('code')}
          />
          <DateInput
          withAsterisk
          disabled={isSaving}
          name='date'
          label="Service Date"
          placeholder="Select a date"
          {...form.getInputProps('date')}
            />
          <NumberInput
            withAsterisk
            disabled={isSaving}
            min={0}
            precision={2}
            placeholder='Type the cost'
            label="Service Cost"
            name="cost"
            {...form.getInputProps('cost')}

          />
          <TextInput
            disabled={isSaving}
            placeholder='Type the description'
            label="Service Description"
            name="desc"
            {...form.getInputProps('desc')}
          />
          
          <Button type='submit' color="cyan.5" fullWidth loading={isSaving}>
            Save Service
          </Button>
        </Stack>
      </form>  
    </Drawer>
  )
}

export default AddServiceForm