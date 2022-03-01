import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import CategoryFilter from "./CategoryFilter";
import JobCards from "./JobCards";
import LocationFilter from "./LocationFilter";
import { JobData } from "../utils/Types";
import { StyledPaginationContainer } from "./styles/LandingPage.styled";

const LandingPage: React.FC<{ jobsArray: JobData[] }> = ({ jobsArray }) => {
	const [pageNumber, setPageNumber] = useState(1);
	const [filterJobs, setfilterJobs] = useState<JobData[]>(jobsArray);
	const [paginatedJobs, setPaginatedJobs] = useState<JobData[]>([]);
	const [categoryTerm, setCategoryTerm] = useState("");
	const [isFullTimeChecked, setIsFullTimeChecked] = useState(false);
	// const [jobTypeTerm, setJobTypeTerm] = useState("");
	const [selectLocationTerm, setSelectLocationTerm] = useState("");

	const paginationCount = () => {
		// console.log(jobsArray.length);
		return Math.ceil(filterJobs.length / 5);
	};

	const handleCategoryTermUpdate = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setCategoryTerm(e.currentTarget.value);
	};

	const handleCategoryFilterSubmit = () => {
		// console.log(categoryTerm);
		if (isFullTimeChecked) {
			const newJobArray = jobsArray.filter(
				(job) =>
					job.job_type === "full_time" &&
					job.candidate_required_location
						.toLowerCase()
						.includes(selectLocationTerm.toLowerCase()) &&
					job.title.toLowerCase().includes(categoryTerm.toLowerCase())
			);
			setfilterJobs(newJobArray);
			setPageNumber(1);
		} else {
			const newJobArray = jobsArray.filter(
				(job) =>
					job.candidate_required_location
						.toLowerCase()
						.includes(selectLocationTerm.toLowerCase()) &&
					job.title.toLowerCase().includes(categoryTerm.toLowerCase())
			);
			setfilterJobs(newJobArray);
			setPageNumber(1);
		}
	};

	const handleFullTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(e.target.checked);
		setIsFullTimeChecked(e.target.checked);
		if (e.target.checked) {
			const newJobArray = jobsArray.filter(
				(job) =>
					job.job_type === "full_time" &&
					job.candidate_required_location
						.toLowerCase()
						.includes(selectLocationTerm.toLowerCase()) &&
					job.title.toLowerCase().includes(categoryTerm.toLowerCase())
			);
			setfilterJobs(newJobArray);
			setPageNumber(1);
		} else {
			const newJobArray = jobsArray.filter(
				(job) =>
					job.candidate_required_location
						.toLowerCase()
						.includes(selectLocationTerm.toLowerCase()) &&
					job.title.toLowerCase().includes(categoryTerm.toLowerCase())
			);
			setfilterJobs(newJobArray);
			setPageNumber(1);
		}
	};

	const handleSelectLocationChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setSelectLocationTerm(e.currentTarget.value);
		if (isFullTimeChecked) {
			const newJobArray = jobsArray.filter(
				(job) =>
					job.job_type === "full_time" &&
					job.candidate_required_location
						.toLowerCase()
						.includes(e.currentTarget.value.toLowerCase()) &&
					job.title.toLowerCase().includes(categoryTerm.toLowerCase())
			);
			setfilterJobs(newJobArray);
			setPageNumber(1);
		} else {
			const newJobArray = jobsArray.filter(
				(job) =>
					job.candidate_required_location
						.toLowerCase()
						.includes(e.currentTarget.value.toLowerCase()) &&
					job.title.toLowerCase().includes(categoryTerm.toLowerCase())
			);
			setfilterJobs(newJobArray);
			setPageNumber(1);
		}
	};

	useEffect(() => {
		const getSliceIndex = pageNumber * 5 - 5;
		const newJobArray = filterJobs.slice(getSliceIndex, getSliceIndex + 5);
		setPaginatedJobs(newJobArray);
	}, [pageNumber, filterJobs]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<div>
						<CategoryFilter
							searchTerm={categoryTerm}
							handleChange={handleCategoryTermUpdate}
							handleSubmit={handleCategoryFilterSubmit}
						/>
					</div>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm-3">
					<div>
						<LocationFilter
							isFullTime={isFullTimeChecked}
							handleCheckChange={handleFullTimeChange}
							selectLocation={selectLocationTerm}
							handleRadioChange={handleSelectLocationChange}
						/>
					</div>
				</div>
				<div className="col-sm-9">
					{paginatedJobs === [] ? (
						<h4 className="text-center">No Jobs Found...</h4>
					) : (
						paginatedJobs
							.slice(0, 5)
							.map((job, index) => (
								<JobCards key={index} jobData={job} />
							))
					)}
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
							size="small"
							page={pageNumber}
							onChange={(e, page) => {
								// console.log(page);
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
