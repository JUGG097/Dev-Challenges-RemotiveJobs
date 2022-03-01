export const differenceInDays = (dateString: string): string => {
	const presentDate = new Date();

	let msec = Date.parse(dateString.slice(0, 10));
	const jobDate = new Date(msec);

	// To calculate the time difference of two dates
	const Difference_In_Time = presentDate.getTime() - jobDate.getTime();

	// To calculate the no. of days between two dates
	const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

	return `${Math.floor(Difference_In_Days)} days ago`;
};

export const jobTypeMap: { [key: string]: string } = {
	full_time: "Full Time",
	part_time: "Part Time",
	contract: "Contract",
	freelance: "Freelance",
};
