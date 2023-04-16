const getOneMonthDateRange = () => {
	let dateObj = new Date();
	let month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
	let day = String(dateObj.getUTCDate()).padStart(2, "0");
	let year = dateObj.getUTCFullYear();

	let endDate = year + "-" + month + "-" + day;

	let past = dateObj.setMonth(dateObj.getMonth() - 0);
	let aMonthAgo = new Date(past);
	let aMonth = String(aMonthAgo.getUTCMonth()).padStart(2, "0");
	let aDay = String(aMonthAgo.getUTCDate()).padStart(2, "0");
	let aYear = aMonthAgo.getUTCFullYear();

	let startDate = aYear + "-" + aMonth + "-" + aDay;

	return [endDate, startDate];
};

module.exports = { getOneMonthDateRange };
