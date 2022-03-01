import React from "react";
import { StyledLocationFilter } from "./styles/LocationFilter.styled";
import { BiWorld } from "react-icons/bi";

const LocationFilter: React.FC = () => {
	return (
		<StyledLocationFilter>
			<div className="select-fulltime">
				<input type="checkbox" name="" id="" /> <label>Full Time</label>
			</div>

			<div className="location-search mt-3">
				<h5>LOCATION</h5>
				<BiWorld />
				<input
					type="search"
					name=""
					id=""
					placeholder="Regions or Countries"
				/>
			</div>

			<div className="location-radio mt-3">
				<div>
					<input type="radio" name="location-value" id="" />{" "}
					<label>All</label>
				</div>
				<div className="mt-2">
					<input type="radio" name="location-value" id="" />{" "}
					<label>USA</label>
				</div>
				<div className="mt-2">
					<input type="radio" name="location-value" id="" />{" "}
					<label>Europe</label>
				</div>
				<div className="mt-2">
					<input type="radio" name="location-value" id="" />{" "}
					<label>Canada</label>
				</div>
			</div>
		</StyledLocationFilter>
	);
};

export default LocationFilter;
