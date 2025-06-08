import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateEmployeeBody, type CreateEmployeeBodyType } from '~/schemas/employee.schema'
import { EmployeeDepartment, EmployeeDepartmentValues } from '~/constants/type'
import TextFieldInput from '~/components/Form/TextFieldInput'
import FieldErrorAlert from '~/components/Form/FieldErrorAlert'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

interface NewEmployeeDialogProps {
  open: boolean
  onClose: () => void
}

export default function NewEmployeeDialog({ open, onClose }: NewEmployeeDialogProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CreateEmployeeBodyType>({
    resolver: zodResolver(CreateEmployeeBody),
    defaultValues: {
      name: '',
      age: 0,
      join_date: new Date(),
      department: EmployeeDepartment.Market
    }
  })

  const onReset = () => {
    reset()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit = handleSubmit((values) => {
    console.log('Submitted values:', values)
    handleClose()
  })

  return (
    <Dialog
      scroll='body'
      open={open}
      onClose={handleClose}
      aria-labelledby='new-employee-dialog-title'
      aria-describedby='new-employee-dialog-description'
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h6' component='h2'>
            Add New Employee
          </Typography>
          <IconButton
            onClick={handleClose}
            size='small'
            sx={{
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogContent sx={{ width: { xs: '100%', sm: 520 } }}>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <TextFieldInput
                name='name'
                register={register}
                label='Full Name'
                placeholder='Enter employee name'
                error={!!errors.name}
              />
              <FieldErrorAlert errorMessage={errors.name?.message} />
            </Stack>

            <Stack spacing={1}>
              <TextFieldInput
                name='age'
                register={register}
                label='Age'
                type='number'
                placeholder='Enter employee age'
                error={!!errors.age}
              />
              <FieldErrorAlert errorMessage={errors.age?.message} />
            </Stack>

            <Stack spacing={1}>
              <FormControl fullWidth error={!!errors.department}>
                <Controller
                  name='join_date'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      label='Join Date'
                      value={field.value ? new Date(field.value) : null}
                      onChange={(value) => field.onChange(value?.toISOString())}
                    />
                  )}
                />
              </FormControl>
              <FieldErrorAlert errorMessage={errors.join_date?.message} />
            </Stack>

            <Stack spacing={1}>
              <FormControl fullWidth error={!!errors.department}>
                <InputLabel id='department-label'>Department</InputLabel>
                <Controller
                  name='department'
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId='department-label'
                      label='Department'
                      sx={{ borderRadius: 1 }}
                      value={field.value}
                      onChange={field.onChange}
                    >
                      {EmployeeDepartmentValues.map((dept) => (
                        <MenuItem key={dept} value={dept}>
                          {dept}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <FieldErrorAlert errorMessage={errors.department?.message} />
            </Stack>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3, pt: 2 }}>
          <Button type='button' onClick={onReset} variant='outlined' sx={{ borderRadius: 2, minWidth: 100 }}>
            Cancel
          </Button>
          <Button
            type='submit'
            variant='contained'
            sx={{
              borderRadius: 2,
              minWidth: 100,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark'
              }
            }}
          >
            Add Employee
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
