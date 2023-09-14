import { Service } from "./service"

export interface Customer {
  firstName: string
  lastName: string
  year: string
  make: string
  model: string
  service?: Service[]
}