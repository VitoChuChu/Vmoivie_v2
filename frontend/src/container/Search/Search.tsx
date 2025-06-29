import React, { useState } from "react";
import { Input } from "antd";
import { CenterCenterRow, CenterCenterCol } from "../../components/atoms/grid/grid";
import { StyledH1 } from "../../components/atoms/text/text";
import MoviesCard from "../../components/compose/Cards/MoviesCard";
import { fetchSearchMovies } from "../../service/TMDB_API";
import { Movie } from "../../interface/movie";

interface SearchProps {
  scrollToTop: () => void;
}

const Search: React.FC<SearchProps> = ({ scrollToTop }) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (value: string) => {
    if (!value) return;
    const data = await fetchSearchMovies(value);
    if (data) setMovies(data);
  };

  return (
    <CenterCenterRow>
      <CenterCenterCol span={24} style={{ marginTop: "8vh" }}>
        <Input.Search
          placeholder="Search movies"
          enterButton
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onSearch={handleSearch}
          style={{ maxWidth: 300 }}
        />
      </CenterCenterCol>
      {movies.length === 0 ? (
        <CenterCenterCol span={24} style={{ marginTop: "2vh" }}>
          <StyledH1>Type a keyword to search movies.</StyledH1>
        </CenterCenterCol>
      ) : (
        movies.map((item) => (
          <CenterCenterCol xs={22} sm={11} md={8} lg={4} key={item.id} style={{ marginTop: "2vh" }}>
            <MoviesCard item={item} scrollToTop={scrollToTop} />
          </CenterCenterCol>
        ))
      )}
    </CenterCenterRow>
  );
};

export default Search;
