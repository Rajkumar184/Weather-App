import React from "react";

const SearchWeather = ({ city, setSearch, search }) => {
	return (
		<>
			<section className=" py-2">
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center shadow-lg p-4 my-5 bg-white  mb-6">
						<div className="col-md-6 weather-logo">
							<img
								src="images/Weather_Isometric.png"
								className="img-fluid"
								alt="change_password"
							/>
						</div>
						<div className="col-md-7 col-lg-5 col-xl-5">
							<div className="card-header">
								<h2 className="mb-0" align="center">
									Live Weather App
								</h2>
							</div>
							<div className="card-body">
								<div className="box">
									<div className="inputData">
										<input
											type="text"
											class="form-control mb-2 inputSearch"
											id="inlineFormInput"
											placeholder="Search here..."
											onChange={(event) => {
												setSearch(event.target.value);
											}}
										/>
									</div>

									{!city ? (
										<p
											style={{
												color: "red",
												textAlign: "center",
												fontSize: "40px",
											}}
										>
											Result Not Found!
										</p>
									) : (
										<div className="info">
											<h2 className="location">
												<i className="fas fa-street-view">
													<span style={{ color: "#3742fa" }}>{search}</span>
												</i>
											</h2>

											<h1 className="temp">{city.temp}°C</h1>

											<h3 className="Temperature_max">
												Min : {city.temp_min}°C || Max : {city.temp_max}°C
											</h3>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchWeather;
