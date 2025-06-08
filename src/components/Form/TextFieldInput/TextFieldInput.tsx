import type { FieldPath, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import TextField, { type TextFieldProps } from '@mui/material/TextField'
import type { KeyboardEvent } from 'react'

interface TextFieldInputProps<TFieldValues extends FieldValues> extends Omit<TextFieldProps, 'name'> {
  register?: UseFormRegister<TFieldValues>
  rules?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>
  name?: FieldPath<TFieldValues>
}

export default function TextFieldInput<TFieldValues extends FieldValues = FieldValues>({
  register,
  rules,
  name,
  type,
  ...rest
}: TextFieldInputProps<TFieldValues>) {
  const registerResult = register && name ? register(name, rules) : null

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (type === 'number') {
      // Block alphabetic characters, 'e', 'E', '+', '-' for number inputs
      const blockedKeys = ['e', 'E', '+', '-']

      if (blockedKeys.includes(event.key)) {
        event.preventDefault()
        return
      }

      // Allow only numeric characters, backspace, delete, tab, escape, enter, and arrow keys
      const allowedKeys = [
        'Backspace',
        'Delete',
        'Tab',
        'Escape',
        'Enter',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End'
      ]

      const isNumber = /^[0-9]$/.test(event.key)
      const isAllowedKey = allowedKeys.includes(event.key)
      const isDot = event.key === '.' && !(event.target as HTMLInputElement).value.includes('.')

      if (!isNumber && !isAllowedKey && !isDot) {
        event.preventDefault()
      }
    }

    // Call the original onKeyDown if it exists
    if (rest.onKeyDown) {
      rest.onKeyDown(event)
    }
  }

  return (
    <TextField
      autoFocus
      fullWidth
      variant='outlined'
      type={type}
      onKeyDown={handleKeyDown}
      {...registerResult}
      {...rest}
    />
  )
}
