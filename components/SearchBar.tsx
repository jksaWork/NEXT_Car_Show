"use client";
import { FormEvent, FormHTMLAttributes, useState } from "react";

import { SearchManufacturer } from "./";
import Image from "next/image";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar() {
  const [manuFactor, setManuFactor] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  function updateSerachPrams(manfacture: string, model: string) {
    const searchParams: URLSearchParams = new URLSearchParams(
      window.location.search
    );
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manfacture) {
      searchParams.set("manfacture", manfacture);
    } else {
      searchParams.delete("manfacture");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  }
  const SubMitForm = (e: FormEvent) => {
    e.preventDefault();

    if (manuFactor == "" && model == "") {
      alert("pleace Fill");
    } else {
      updateSerachPrams(manuFactor.toLowerCase(), model.toLowerCase());
    }
  };

  return (
    <form onSubmit={SubMitForm} className="searchbar">
      {/*  */}
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manuFactor}
          setManuFacturer={setManuFactor}
        />{" "}
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
      {/*  */}
    </form>
  );
}

export default SearchBar;
