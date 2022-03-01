import styled from "styled-components";

export const StyledJobCard = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
	padding: 5px 10px;
	color: #334680;
	font-family: "Roboto", sans-serif;
	margin-bottom: 15px;

	.job-image {
		flex-basis: 10%;

		img {
			width: 100%;
			height: 80px;
		}
	}

	.job-info {
		flex-basis: calc(100% - 15%);
		display: flex;
		min-height: 100%;
		justify-content: space-between;
		padding-left: 15px;
		text-decoration: none;
		color: #334680;

		&:hover {
			opacity: 0.8;
		}

		div:nth-child(2) {
			display: flex;
			align-items: flex-end;

			span + span {
				margin-left: 15px;
			}
		}
		p {
			margin: 7px 0;
		}

		p:nth-child(1) {
			font-size: 12px;
			font-weight: 700;
		}

		p:nth-child(2) {
			font-size: 18px;
			font-weight: 400;
		}

		p:nth-child(3) {
			font-size: 12px;
			font-weight: 700;
			border: 2px solid #334680;
			width: 70px;
			border-radius: 5px;
			padding: 5px;
			text-align: center;
		}

		span {
			font-size: 12px;
			font-weight: 500;
			color: #b9bdcf;
		}
	}

	@media (max-width: 768px) {
		margin-top: 12px;

		.job-image {
			flex-basis: 25%;

			img {
				height: 80px;
			}
		}
		.job-info {
			flex-basis: calc(100% - 25%);
			flex-direction: column;

			p {
				margin: 0;
			}
		}
	}
`;
