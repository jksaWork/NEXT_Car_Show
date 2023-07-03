"use client";
import React from "react";
import { CustomFilter, SearchBar, ShowMore, CarCard } from "./";
import { FetchCars, FilterProps } from "@/utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { fuels, yearsOfProduction } from "@/constants";

async function CarCatalogue() {
  // console.log(searchParams);
  const searchParams = useSearchParams();
  const data = await FetchCars({
    manufacturer: searchParams.get("manufacturer") || "",
    year: Number(searchParams.get("year")) || 2022,
    fuel: searchParams.get("fule") || "",
    limit: Number(searchParams.get("limit")) || 10,
    model: searchParams.get("model") || "",
  });
  console.log(data, "Data ------------------------");
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
          <CustomFilter title="fule" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {!isDataIsEmpty ? (
        <>
          <section className="home__cars-wrapper">
            {/* Hello World */}
            {data.map((car) => (
              <CarCard car={car} />
            ))}
          </section>
          <ShowMore
            pageNumber={(data.length || 10) / 10}
            isNext={data.length < Number(searchParams.get("limit") || 10)}
          />
        </>
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
