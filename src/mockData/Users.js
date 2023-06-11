import uuid from 'react-uuid'
import p1 from '../assets/bookings/p1.jpg'
import p2 from '../assets/bookings/p2.jpg'
import p3 from '../assets/bookings/p3.jpg'
import p4 from '../assets/bookings/p4.jpg'


export const usersList = [{
      employee_name: "Juan Jose",
      id: uuid(),
      image: p1,
      email: "juanopex@gmail.com",
      start_date: "1/05/2023",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      contact: "651567689",
      status: "Active",
      position: "Manager"
    },
    {
      employee_name: "Gabriela Lopex",
      id: uuid(),
      image: p4,
      email: "gabiLopez@gmail.com",
      start_date: "1/05/2023",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      contact: "651567689",
      status: "Active",
      position: "Manager"
    },
    {
      employee_name: "Diego Higa",
      id: uuid(),
      image: p2,
      email: "diegoh@gmail.com",
      start_date: "1/05/2023",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      contact: "651567689",
      status: "Active",
      position: "Manager"
    },
    {
      employee_name: "Elena Mara",
      id: uuid(),
      image: p4,
      email: "elenamara@gmail.com",
      start_date: "1/05/2023",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
      contact: "651567689",
      status: "Inactive",
      position: "Manager"
    },
]