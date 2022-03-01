import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import JobDetails from "./components/JobDetails";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import { JobData } from "./utils/Types";
import axios from "axios";

function App() {
	const [jobsArray, setJobsArray] = useState<JobData[]>([]);
	const [loading, setLoading] = useState(false);
	const [errorState, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios
			.get("https://remotive.io/api/remote-jobs")
			.then((res) => {
				// console.log(res.data.jobs);
				setJobsArray(res.data.jobs);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError("error");
			});
	}, []);

	return (
		<>
			<GlobalStyle />
			<header className="container">
				<div className="row title-header">
					<h1>
						Remotive <span>Jobs</span>
					</h1>
				</div>
			</header>
			{loading ? (
				<h4 className="text-center">Data is being fetched...</h4>
			) : errorState === "" ? (
				<Routes>
					<Route
						path="/"
						element={<LandingPage jobsArray={jobsArray} />}
					/>
					<Route
						path="/:id"
						element={<JobDetails jobsArray={jobsArray} />}
					/>
				</Routes>
			) : (
				<h4 className="text-center">
					Opps an error occured...Try and refresh
				</h4>
			)}
			<footer className="mt-4 text-center">
				<p>
					created by <span>Adeoluwa Adeboye</span> - devChallenges.io
				</p>
			</footer>
		</>
	);
}

export default App;
