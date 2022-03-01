import React, { useState, useEffect } from "react";
import { JobData } from "../utils/Types";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import {
	StyledToApply,
	StyledJobDescription,
} from "./styles/JobDetails.styled";
import { jobTypeMap, differenceInDays } from "../utils/Helper";

const JobDetails: React.FC<{ jobsArray: JobData[] }> = ({ jobsArray }) => {
	const { id } = useParams();

	const [jobData, setJobData] = useState<JobData>({
		id: 0,
		url: "",
		title: "",
		company_name: "",
		company_logo: "",
		category: "",
		tags: [""],
		job_type: "",
		publication_date: "",
		candidate_required_location: "",
		salary: "",
		description: "",
		company_logo_url: "",
	});
	const [loading, setLoading] = useState(false);
	const [notFound, setNotFound] = useState(false);

	function createMarkup() {
		return { __html: jobData.description };
	}

	useEffect(() => {
		setLoading(true);
		// console.log(id);
		// console.log(jobsArray);

		// Filter the job array for the particular job array
		if (id !== undefined) {
			const filteredJob = jobsArray.filter(
				(job) => job.id === parseInt(id)
			);
			// Incase of expired job ID...return not found
			filteredJob === [] ? setNotFound(true) : setJobData(filteredJob[0]);
		}
		setLoading(false);
	}, [id, jobsArray]);

	return (
		<div className="container">
			<div className="row">
				{loading ? (
					<h4 className="text-center">Fetching Job Details</h4>
				) : notFound ? (
					<h4 className="text-center">Job Not Found</h4>
				) : (
					<>
						<div className="col-sm-3">
							<StyledToApply>
								<Link to={"/"}>
									<BsArrowLeft /> <span>Back to search</span>
								</Link>

								<h5 className="mt-3">HOW TO APPLY</h5>

								<p>
									Please click on this link:{" "}
									<a
										href={jobData.url}
										target="_blank"
										rel="noreferrer"
									>
										{jobData.url}
									</a>
								</p>
							</StyledToApply>
						</div>
						<div className="col-sm-9">
							<StyledJobDescription>
								<span>{jobData.title} </span>
								{jobData.job_type !== "" && (
									<span className="">
										{jobTypeMap[jobData.job_type]}
									</span>
								)}

								<p className="time-stamp mt-2">
									<AiOutlineClockCircle />{" "}
									{differenceInDays(jobData.publication_date)}
								</p>

								<div className="company-details mt-4">
									<img
										src={jobData.company_logo}
										alt="Logo"
									></img>
									<div>
										<p>{jobData.company_name}</p>
										<li className="location">
											<BiWorld />{" "}
											{
												jobData.candidate_required_location
											}
										</li>
									</div>
								</div>

								<div
									dangerouslySetInnerHTML={createMarkup()}
									className="mt-4"
								/>
							</StyledJobDescription>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default JobDetails;
