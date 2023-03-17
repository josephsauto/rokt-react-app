import { useEffect, useState } from "react";
import { PexelResponse } from "./interfaces";
import Search from "./layouts/Search";
import axios from "axios";
import Gallery from "./layouts/Gallery";

//Main entry point for the application. If localstorage does not have a provided page
//or search url, then we set a default input.
export default function Main() {
  const [searchInput, setSearchInput] = useState("plants");
  const [page, setPage] = useState("1");
  const [pexelResponse, setPexelRespnse] = useState<PexelResponse>();
  const [loading, setLoading] = useState(false);

  //Function takes in a search term and pexel page and calls the wrapped API running on a lambda instance.
  const populateUrl = (search: string, pexelPage: string) => {
    const url = `https://9srf816mj9.execute-api.us-west-2.amazonaws.com/latest/api?query=${search}&page=${pexelPage}`;
    return url;
  };

  //Searches based on provided url, sets the pexelrespone and page based on response
  //saves the search and page to local storage. Updates loading.
  const searchPexel = (url: string) => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        const photos: PexelResponse = res.data;
        setPexelRespnse(photos);
        setPage(`${photos.page}`);
        localStorage.setItem("pexelPage", `${photos.page}`);
        localStorage.setItem("pexelSearch", searchInput);
      })
      .catch(() => {
        setPexelRespnse(undefined);
      });
  };

  //On initial load we check to see if there is a search term and page in empty storage,
  // set set the page and search input based on those values, otherwise we set the default values.
  useEffect(() => {
    let initialSearch = "plants";
    let initialPage = "1";
    const pexelPage = localStorage.getItem("pexelPage");
    const pexelSearch = localStorage.getItem("pexelSearch");
    if (pexelSearch) {
      initialSearch = pexelSearch;
      setSearchInput(pexelSearch);
    }
    if (pexelPage) {
      initialPage = pexelPage;
      setPage(pexelPage);
    }
    let searchUrl = populateUrl(initialSearch, initialPage);
    searchPexel(searchUrl);
  }, []);

  return (
    <div>
      <Search
        input={searchInput}
        handleSubmit={() => searchPexel(populateUrl(searchInput, "1"))}
        updateSearch={(input: string) => {
          setSearchInput(input);
        }}
      />
      {
        <Gallery
          loading={loading}
          pexelResponse={pexelResponse}
          paginate={(addVal: number) => {
            searchPexel(populateUrl(searchInput, `${Number(page) + addVal}`));
          }}
        />
      }
    </div>
  );
}
