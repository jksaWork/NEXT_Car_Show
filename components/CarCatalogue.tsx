import React from "react";
import { CustomFilter, SearchBar, CarCard } from "./";
import { FetchCars } from "@/utils";

async function CarCatalogue() {
  const data = await FetchCars();
  console.log(data);
  const isDataIsEmpty = !data || !Array.isArray(data) || data.length < 1;
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <div className="home__text-container">
        <div className="text-3xl font-extrabold">Car Catalogue</div>
        <p>Explore out cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fule" />
          <CustomFilter title="year" />
        </div>
      </div>

      {!isDataIsEmpty ? (
        <section className="home__cars-wrapper">
          {/* Hello World */}
          {data.map((car) => (
            <CarCard car={car} />
          ))}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{data?.message}</p>
        </div>
      )}
    </div>
  );
}

export default CarCatalogue;
