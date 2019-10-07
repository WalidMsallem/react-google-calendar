import moment from "moment";

const filterByYear = (currentYear, years) => {
  return years.filter(
    year => Number(moment(year.start).format("YYYY")) === currentYear
  );
};
const filterByMonth = (currentMonth, months) => {
  return months.filter(
    month => Number(moment(month.start).format("MM")) === currentMonth
  );
};
const filterByDay = (currentDay, days) => {
  return days.filter(
    day => Number(moment(day.start).format("DD")) === currentDay
  );
};

export { filterByYear, filterByMonth, filterByDay };
