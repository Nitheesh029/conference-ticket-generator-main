import dayjs from "dayjs";

const today = dayjs();

// Format the date as "15 Jan, 2025"
export const formattedDate = today.format('D MMM, YYYY');

console.log(formattedDate); 