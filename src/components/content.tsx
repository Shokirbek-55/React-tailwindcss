import React from "react";
import Group from "./img/group";
export default class content extends React.Component {
	render() {
		return (
			<div className="flex  p-[70px]">
				<div className="flex flex-col gap-[2rem]">
					<div className="text-[45px] font-[500] font-[Prompt] ">
						Find out talented <br />
						<a className="text-[#FF5C00]">freelancer</a> with <br />
						better review faster.
					</div>
					<p className="text-[18px] text-[gray]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  <br />
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
						quis nostrud exercitation ullamco laboris nisi ut aliquip.
					</p>
					<div className="flex gap-[30px]">
						<button className="bg-[#544CAC] flex items-center justify-center rounded-xl w-[150px] h-[44px] text-[white]">
							Discover Now
						</button>
						<div className="flex items-center gap-[6px]">
							<p>
								<svg
									width="44"
									height="44"
									viewBox="0 0 44 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="22" cy="22" r="22" fill="white" />
									<path
										d="M33 22.5C33 28.8513 27.8513 34 21.5 34C15.1487 34 10 28.8513 10 22.5C10 16.1487 15.1487 11 21.5 11C27.8513 11 33 16.1487 33 22.5ZM11.8542 22.5C11.8542 27.8272 16.1728 32.1458 21.5 32.1458C26.8272 32.1458 31.1458 27.8272 31.1458 22.5C31.1458 17.1728 26.8272 12.8542 21.5 12.8542C16.1728 12.8542 11.8542 17.1728 11.8542 22.5Z"
										fill="#FF5C00"
									/>
									<path
										d="M18.6239 17.1515L18.868 28.9045L27.944 22.837L18.6239 17.1515Z"
										fill="#FF5C00"
									/>
								</svg>
							</p>
							<p className="font-[600]">Watch Demo</p>
						</div>
					</div>
				</div>

				<div className="mt-[-60px]">
					<Group />
				</div>
			</div>
		);
	}
}
