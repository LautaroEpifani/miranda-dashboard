interface Login {
  userName: string;
  email: string;
  password: string;
}


export const getItem = (key: string) => {
   return  JSON.parse(localStorage.getItem(key) || "")
}
export const setItem = (key: string, data: Login | string | null) => {
    localStorage.setItem(key, JSON.stringify(data))
}