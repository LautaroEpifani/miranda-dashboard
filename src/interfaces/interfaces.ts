
export interface Booking {
  _id?: string;
  id: string;
  guest: string;
  room_number: number;
  special_request: string;
  order_date: Date;
  check_in: Date;
  check_out: Date;
  status: string;
  color: string;
  bgr_color: string;
}

export interface Message {
  _id?: string;
  date: string;
  hour: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment: string;
  archived: boolean;
}

export interface Room {
  _id?: string;
  id: string;
  room_type: string;
  room_number: number;
  amenities: Amenities[];
  price: number;
  discount: number;
  offer: string;
  offer_price: number;
  description: string;
  cancellation: string;
  status: string;
  images: string[];
}

export interface Amenities {
  a_name: string;
  icon: string;
  isChecked: boolean;
}

export interface User {
  _id?: string;
  employee_name: string;
  id: string;
  image: string;
  email: string;
  start_date: Date;
  description: string;
  contact: string;
  status: string;
  position: string;
}

export interface LoginUser {
  userName: string;
  email: string;
  password: string;
}
