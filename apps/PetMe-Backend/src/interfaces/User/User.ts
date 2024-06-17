export interface IuserData{
  id?: string
  first_name: string
  last_name: string | null
  email: string
  password: string
  address: string
  google_id?: string
  city: string
  state: string
  country: string
  zip_code: string
  phone_number: string
  role?: string[]   
  otp?: string;
  token?:string
}

export interface IuserInput {
  first_name: string
  last_name: string | null
  email: string
  password: string
  address: string
  google_id?: string
  city: string
  token: string
  state: string
  country: string
  zip_code: string
  phone_number: string
  verfied_flag?: Boolean
}
