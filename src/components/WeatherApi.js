import React, { useState, useEffect } from "react";
import SearchWeather from "./SearchWeather";

const WeatherApi = () => {
	const [city, setCity] = useState("");
	const [search, setSearch] = useState("Mumbai");

	useEffect(() => {
		const getData = async () => {
			try {
				const setHeader = {
					headers: {
						Accept: "application/json",
					},
				};
				const res = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9ed250bf3fbf664a4948951003c676e2`,
					setHeader
				);
				const data = await res.json();
				setCity(data.main);
			} catch (err) {
				// Handle Error Here
				console.error(err);
			}
		};

		getData();
	}, [search]);

	return (
		<>
			<SearchWeather city={city} setSearch={setSearch} search={search} />
		</>
	);
};

export default WeatherApi;
