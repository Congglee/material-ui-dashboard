export interface Employee {
  id: number
  name: string
  age: number
  joinDate: string
  department: string
}

export const rows: Employee[] = [
  {
    id: 1,
    name: 'Edward Perry',
    age: 25,
    joinDate: '4/6/2025',
    department: 'Finance'
  },
  {
    id: 2,
    name: 'Josephine Drake',
    age: 36,
    joinDate: '4/6/2025',
    department: 'Market'
  },
  {
    id: 3,
    name: 'Cody Phillips',
    age: 19,
    joinDate: '4/6/2025',
    department: 'Development'
  }
]
