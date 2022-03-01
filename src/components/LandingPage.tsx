import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import CategoryFilter from "./CategoryFilter";
import JobCards from "./JobCards";
import LocationFilter from "./LocationFilter";
import { JobData } from "../utils/Types";
import { StyledPaginationContainer } from "./styles/LandingPage.styled";

const LandingPage: React.FC<{ jobsArray: JobData[] }> = ({ jobsArray }) => {
	const [pageNumber, setPageNumber] = useState(1);
	const [filterJobs, setfilterJobs] = useState<JobData[]>([]);
	const [paginatedJobs, setPaginatedJobs] = useState<JobData[]>([]);

	const paginationCount = () => {
		// console.log(jobsArray.length);
		return Math.ceil(filterJobs.length / 5);
	};

	useEffect(() => {
		setfilterJobs(jobsArray);
		const getSliceIndex = pageNumber * 5 - 5;
		const newJobArray = filterJobs.slice(getSliceIndex, getSliceIndex + 5);
		setPaginatedJobs(newJobArray);
	}, [pageNumber, jobsArray, filterJobs]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<div>
						<CategoryFilter />
					</div>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm-3">
					<div>
						<LocationFilter />
					</div>
				</div>
				<div className="col-sm-9">
					{paginatedJobs.slice(0, 5).map((job, index) => (
						<JobCards key={index} jobData={job} />
					))}
				</div>
				{/* Map through array into job cards */}
			</div>

			<div className="row mt-3 mb-3">
				<div className="col-sm-12">
					<StyledPaginationContainer className="">
						<Pagination
							count={paginationCount()}
							variant="outlined"
							shape="rounded"
							color="primary"
							onChange={(e, page) => {
								console.log(page);
								setPageNumber(page);
							}}
						/>
					</StyledPaginationContainer>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
