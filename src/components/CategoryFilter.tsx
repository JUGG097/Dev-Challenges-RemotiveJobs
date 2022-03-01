import React from "react";
import { StyledCategoryFilter } from "./styles/CategoryFilter.styled";
import { RiSuitcaseLine } from "react-icons/ri";

const CategoryFilter: React.FC = () => {
	return (
		<StyledCategoryFilter>
			<div className="row search-div">
				<div className="col-9 search-relative">
					<RiSuitcaseLine />
					<input
						type="search"
						name=""
						id=""
						placeholder="Search Categories"
					/>
				</div>
				<div className="col-3">
					<button className="btn btn-primary">Search</button>
				</div>
			</div>
		</StyledCategoryFilter>
	);
};

export default CategoryFilter;
