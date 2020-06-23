import React, { useState, useEffect } from "react";
import Axios from "axios";
//import Axios from "axios";
//import { SelectDropDown } from "./Select.component";
//import axios from "axios";

export const Animals = () => {
  const [animals, setAnimals] = useState([{ label: "Loading...", value: "" }]);
  //const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = React.useState();
  const url = `https://api.petfinder.com/v2/types`;
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJOcFpqcEZrOENndm1vRTdKUG96c3lwWHhDUnZJM2lkNFc5cnB4amY0d3dCaWZwYnhHcSIsImp0aSI6IjAyN2Q5ODM2ZTk3MjA2NWUzNTY0MGE1NmRlY2M5MjUzZjViZjE1ZTBmMTQyZTkyODVmMjAyM2IxZmRkMzkzNWE2YTYwMjFkOWZjMGZlMGY3IiwiaWF0IjoxNTkyOTA0NzA3LCJuYmYiOjE1OTI5MDQ3MDcsImV4cCI6MTU5MjkwODMwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.Ukb19hTIdPG_oLT_MnbSSNvdMF0yHpSOnaLKL09-q_hTcaaR8XNlbp0lBu__mxNw1CJU86r-ghn3-FlBYtwdgJGDA73o82jQdSKOeqL0UtVXEdhCtONPLOFxvdGjsJbVkMYHlzEBTLyHMAB5zE8zRUJuYCzIcq5GhMgtjUh6i7G6VKXuTawTwvyr9SMmqfei4FUKGCq3kxZDtQKo7TmWw2k9tvMdzsp-N8f4l9oZgpl9A15p6_-MxWyq1p7AFZ18TSi7t1N3RPtFPA8dyB_fMXXiBu-3LurTW937Sx4VCUJTdNLxnpbAzdtzWejF8Y5p2qMOm9BqpTfVr2AR2nyhhw";
  const fetchAnimal = async () => {
    //   console.log("1");
    const response = await Axios.get(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",

        Authorization: token,
      },
    });

    let body = await response.json();

    setAnimals(
      body.animals.types
      //.map(({ name }) => ({ label: name, value: name }))
    );
    setLoading(false);
    // try {
    //   const animalData = await fetch(url, {
    //     method: "GET",

    //     // headers: {
    //     //   "Content-type": "application/json",
    //     // },
    //   })
    //     .then((res) => res.json())
    //     .then((animals) => {
    //       setAnimals(animals.types.map((el) => el.name));
    //     });

    //   // setIsLoaded(false);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    //const apiKey = "NpZjpFk8CgvmoE7JPozsypXxCRvI3id4W9rpxjf4wwBifpbxGq";

    //grant_type = client_credentials & client_id={ NpZjpFk8CgvmoE7JPozsypXxCRvI3id4W9rpxjf4wwBifpbxGq }& client_secret={ 2cwhQa88sd4RnD8hRoxSDn0AJLj5qEhqzRAywzYz } ";

    fetchAnimal();
    // return () => {
    //   unmounted = true;
    // };
  }, []);
  return (
    <select
      disabled={loading}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {animals.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
