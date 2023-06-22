import uuid from 'react-uuid'
import p1 from '../assets/bookings/p1.jpg'
import p2 from '../assets/bookings/p2.jpg'
import p3 from '../assets/bookings/p3.jpg'
import p4 from '../assets/bookings/p4.jpg'


export const bookingsList = [{
      guest: "Carlos Lopez",
      id: uuid(),
      image: p1,
      room_type: "Double Bed",
      check_in: "1/05/2023",
      check_out: "12/05/2023",
      order_date: "12/04/2023",
      special_request: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      status: "Check In",
      room_number: 10,
      color: "#5AD07A",
      bgrColor: "#E8FFEE",
    },
    {
      guest: "Juan Martinez",
      id: uuid(),
      image: p2,
      room_type: "Double Bed",
      check_in: "1/04/2023",
      check_out: "12/05/2023",
      order_date: "12/01/2023",
      special_request: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      status: "Check Out",
      room_number: 3,
      color: "#E23428",
      bgrColor: "#FFEDEC",
    },
    {
      guest: "Alvaro Almeida",
      id: uuid(),
      image: p3,
      room_type: "Double Bed",
      check_in: "1/03/2023",
      check_out: "12/06/2023",
      order_date: "12/02/2023",
      special_request: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      status: "Check In",
      room_number: 4,
      color: "#5AD07A",
      bgrColor: "#E8FFEE",
    },
    {
      guest: "Julieta Garcia",
      id: uuid(),
      image: p4,
      room_type: "Double Bed",
      check_in: "1/02/2023",
      check_out: "12/04/2023",
      order_date: "12/03/2023",
      special_request: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      status: "In Progress",
      room_number: 2,
      color: "#FF9C3A",
      bgrColor: "#ffd7ae",
    },
]