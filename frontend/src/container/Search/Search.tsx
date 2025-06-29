import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CustomizeButton } from "../../components/atoms/button/CustomizeButton";
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

  const handleSearch = async (value?: string) => {
    const key = value ?? searchKey;
    if (!key) return;
    const data = await fetchSearchMovies(key);
    if (data) setMovies(data);
  };

  return (
    <CenterCenterRow>
      <CenterCenterCol span={24} style={{ marginTop: "8vh" }}>
        <Input
          placeholder="Search movies"
          prefix={<SearchOutlined />}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onPressEnter={() => handleSearch()}
          style={{ maxWidth: 300 }}
        />
        <div>
          <CustomizeButton onClick={() => handleSearch()}>Search</CustomizeButton>
        </div>
      </CenterCenterCol>
      {movies.length === 0 ? (
        <CenterCenterCol span={24} style={{ marginTop: "2vh" }}>
          <StyledH1>Try to search something</StyledH1>
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
