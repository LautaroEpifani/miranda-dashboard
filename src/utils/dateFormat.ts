
export const formatDate = (date: Date) => {
    const newDate = new Date(date)
    return newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear() as string;
}
export const formatTime = (date: Date) => {
    const newTime = new Date(date)
    return newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds() as string;
}

export const inputDateFormat = (date: Date) => {
    const newDate = new Date(date)
    const d = newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.getDate() as string;
    console.log(d)
    return  newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.getDate() as string;
}