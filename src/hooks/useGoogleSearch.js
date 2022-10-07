import { useState, useEffect } from "react";
import API_KEY from "../context/key";
const SERACH_KEY = "6394e643647d75ed7";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SERACH_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((results) => {
          setData(results);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};
export default useGoogleSearch;
//43e9fc3970974e745
//7f65dd9c5957719c8
