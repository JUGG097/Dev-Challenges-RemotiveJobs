import React from "react";
import { StyledCategoryFilter } from "./styles/CategoryFilter.styled";
import { RiSuitcaseLine } from "react-icons/ri";

const CategoryFilter: React.FC<{
	searchTerm: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: () => void;
}> = ({ searchTerm, handleChange, handleSubmit }) => {
	return (
		<StyledCategoryFilter>
			<div className="row search-div">
				<div className="col-9 search-relative">
					<RiSuitcaseLine />
					<input
						type="search"
						name="categorySearch"
						value={searchTerm}
						onChange={handleChange}
						placeholder="Search Job Title Keywords"
					/>
				</div>
				<div className="col-3">
					<button className="btn btn-primary" onClick={handleSubmit}>
						Search
					</button>
				</div>
			</div>
		</StyledCategoryFilter>
	);
};

export default CategoryFilter;
