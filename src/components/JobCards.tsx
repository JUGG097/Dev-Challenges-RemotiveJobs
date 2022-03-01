import React from "react";
import { StyledJobCard } from "./styles/JobCard.styled";
import { BiWorld } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { JobData } from "../utils/Types";
import { differenceInDays, jobTypeMap } from "../utils/Helper";

const JobCards: React.FC<{ jobData: JobData }> = ({ jobData }) => {
	return (
		<StyledJobCard>
			<div className="job-image">
				<img
					src={jobData.company_logo}
					alt="devchallenges"
					loading="lazy"
				></img>
			</div>
			<Link to={`/${jobData.id}`} className="job-info">
				<div>
					<p>{jobData.company_name}</p>
					<p>{jobData.title}</p>
					{jobData.job_type !== "" && (
						<p className="">{jobTypeMap[jobData.job_type]}</p>
					)}
				</div>
				<div className="mt-2">
					{jobData.candidate_required_location !== "" && (
						<span>
							<BiWorld /> {jobData.candidate_required_location}
						</span>
					)}
					<span>
						<AiOutlineClockCircle />{" "}
						{differenceInDays(jobData.publication_date)}
					</span>
				</div>
			</Link>
		</StyledJobCard>
	);
};

export default JobCards;
