import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "734f9a253fmsh50a5e7e410b2c26p1628bdjsn62a54c674ad9",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.request(options);
      setData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { isLoading, data, error, refetch };
};

export default useFetch;
