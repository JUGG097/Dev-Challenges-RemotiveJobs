import React from "react";
import { StyledLocationFilter } from "./styles/LocationFilter.styled";
import { BiWorld } from "react-icons/bi";

const LocationFilter: React.FC<{
	isFullTime: boolean;
	handleCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectLocation: string;
	handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ isFullTime, handleCheckChange, selectLocation, handleRadioChange }) => {
	return (
		<StyledLocationFilter>
			<div className="select-fulltime">
				<input
					type="checkbox"
					name="fulltimeCheck"
					id="fulltimeCheck"
					checked={isFullTime}
					onChange={handleCheckChange}
				/>{" "}
				<label htmlFor="fulltimeCheck">Full Time</label>
			</div>

			<div className="location-search mt-3">
				<h5>LOCATION</h5>
				<BiWorld />
				<input
					type="search"
					name=""
					id=""
					placeholder="Regions or Countries"
					disabled={true}
				/>
			</div>

			<div className="location-radio mt-3">
				<div>
					<input
						type="radio"
						name="location-value"
						id="location-value-all"
						value=""
						checked={selectLocation === ""}
						onChange={handleRadioChange}
					/>{" "}
					<label htmlFor="location-value-all">All</label>
				</div>
				<div className="mt-2">
					<input
						type="radio"
						name="location-value"
						id="location-value-usa"
						value="usa only"
						checked={selectLocation === "usa only"}
						onChange={handleRadioChange}
					/>{" "}
					<label htmlFor="location-value-usa">USA</label>
				</div>
				<div className="mt-2">
					<input
						type="radio"
						name="location-value"
						id="location-value-europe"
						value="europe only"
						checked={selectLocation === "europe only"}
						onChange={handleRadioChange}
					/>{" "}
					<label htmlFor="location-value-europe">Europe</label>
				</div>
				<div className="mt-2">
					<input
						type="radio"
						name="location-value"
						id="location-value-canada"
						value="canada only"
						checked={selectLocation === "canada only"}
						onChange={handleRadioChange}
					/>{" "}
					<label htmlFor="location-value-canada">Canada</label>
				</div>
				<div className="mt-2">
					<input
						type="radio"
						name="location-value"
						id="location-value-uk"
						value="uk only"
						checked={selectLocation === "uk only"}
						onChange={handleRadioChange}
					/>{" "}
					<label htmlFor="location-value-uk">UK</label>
				</div>
			</div>
		</StyledLocationFilter>
	);
};

export default LocationFilter;
