import React from "react";
import { BrowserRouter } from "react-router-dom";
import FilmPage from "./FilmPage";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";

let mock = new MockAdapter(axios);
mock.onPut("http://localhost:8080/fetchTMDB/fetchMovieDetail").reply(200, {
  adult: false,
  backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
  belongs_to_collection: null,
  budget: 200000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "https://www.dc.com/BlackAdam",
  id: 436270,
  imdb_id: "tt6443346",
  original_language: "en",
  original_title: "Black Adam",
  overview:
    "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
  popularity: 11752.795,
  poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
  production_companies: [
    {
      id: 12,
      logo_path: "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
      name: "New Line Cinema",
      origin_country: "US",
    },
    {
      id: 34081,
      logo_path: null,
      name: "Flynn Picture Company",
      origin_country: "US",
    },
    {
      id: 73669,
      logo_path: "/7tmSGstK3KwgcDIuBYLTAayjit9.png",
      name: "Seven Bucks Productions",
      origin_country: "US",
    },
    {
      id: 128064,
      logo_path: "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
      name: "DC Films",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2022-10-19",
  revenue: 368000000,
  runtime: 125,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "The world needed a hero. It got Black Adam.",
  title: "Black Adam",
  video: false,
  vote_average: 7.298,
  vote_count: 2470,
});
mock.onPut("http://localhost:8080/fetchTMDB/fetchMovieCast").reply(200, [
  {
    id: 0,
    name: "Dwayne Johnson",
    character: "Black Adam / Teth Adam",
    profile_path:
      "https://image.tmdb.org/t/p/w200//cgoy7t5Ve075naBPcewZrc08qGw.jpg",
  },
  {
    id: 22,
    name: "Aldis Hodge",
    character: "Hawkman / Carter Hall",
    profile_path:
      "https://image.tmdb.org/t/p/w200//jPpnaAGFXaIeOrRNUHIHxk3fIJL.jpg",
  },
  {
    id: 21,
    name: "Noah Centineo",
    character: "Atom Smasher / Al Rothstein",
    profile_path:
      "https://image.tmdb.org/t/p/w200//p1bcst401RyxfDGykx2iQLI7CV5.jpg",
  },
  {
    id: 25,
    name: "Sarah Shahi",
    character: "Adrianna Tomaz",
    profile_path:
      "https://image.tmdb.org/t/p/w200//shiLCJNyvi9xlUZw4bTuRkhrKpm.jpg",
  },
  {
    id: 27,
    name: "Quintessa Swindell",
    character: "Cyclone / Maxine Hunkel",
    profile_path:
      "https://image.tmdb.org/t/p/w200//xKUFfFJR6o5Ka7AmetGMYjSmBGO.jpg",
  },
  {
    id: 32,
    name: "Marwan Kenzari",
    character: "Ishmael / Sabbac / King Ahk-Ton",
    profile_path:
      "https://image.tmdb.org/t/p/w200//66903sgNtyzHN0Mi3D88UYgbH86.jpg",
  },
]);
mock.onPut("http://localhost:8080/fetchTMDB/fetchMovieVideo").reply(200, [
  {
    iso_639_1: "en",
    iso_3166_1: "US",
    name: "The History Of Black Adam",
    key: "I9B6rwW35GQ",
    site: "YouTube",
    size: 1080,
    type: "Featurette",
    official: true,
    published_at: "2022-11-25T15:59:56.000Z",
    id: "6382cd90fb834600995ff225",
  },
]);
mock.onPut("http://localhost:8080/fetchTMDB/fetchSimilarMovies").reply(200, [
  {
    id: 9319,
    title: "The Last Boy Scout",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//aa6DsuyNjwx4QaWMBxKqE9PwIUe.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//k6IhU7Vuy9kvK3xrJRZnDd7Zh7H.jpg",
    overview:
      "When the girl that detective Joe Hallenback is protecting gets murdered, the boyfriend of the murdered girl attempts to investigate and solve the case. What they discover is that there is deep seated corruption going on between a crooked politician and the owner of a pro football team.",
    vote_average: 6.756,
    release_date: "1991-03-19",
  },
  {
    id: 9320,
    title: "The Avengers",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//fryen9fnjlm0YibKTDNGzWNBOSo.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//1p5thyQ4pCy876HpdvFARqJ62N9.jpg",
    overview:
      "British Ministry agent John Steed, under direction from 'Mother', investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
    vote_average: 4.388,
    release_date: "1998-08-13",
  },
  {
    id: 9326,
    title: "Romancing the Stone",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//cGTcorAJaMxNDOYSHIkWWDdR813.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//qfIlVOYZH5RiZ0ndFKUpr5Zn2Bx.jpg",
    overview:
      "Though she can spin wild tales of passionate romance, novelist Joan Wilder has no life of her own. Then one day adventure comes her way in the form of a mysterious package. It turns out that the parcel is the ransom she'll need to free her abducted sister, so Joan flies to South America to hand it over. But she gets on the wrong bus and winds up hopelessly stranded in the jungle.",
    vote_average: 6.7,
    release_date: "1984-03-30",
  },
  {
    id: 9327,
    title: "The Nutty Professor",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//q9yEfSbgGaHyjaD8053wRN0NX1S.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//fMtb5aZoLRNbMnCkatFsTmPRfl5.jpg",
    overview:
      "Eddie Murphy stars as shy Dr. Sherman Klump, a kind, brilliant, 'calorifically challenged' genetic professor. When beautiful Carla Purty joins the university faculty, Sherman grows desperate to whittle his 400-pound frame down to size and win her heart. So, with one swig of his experimental fat-reducing serum, Sherman becomes 'Buddy Love', a fast-talking, pumped-up , plumped down Don Juan.",
    vote_average: 5.627,
    release_date: "1996-06-26",
  },
  {
    id: 9342,
    title: "The Mask of Zorro",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//7tqV9ihSDfsa9C7D7PRRnZ1ZrVA.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//8ZpFaSjAEfr6ArJUS7jOVvg6eZa.jpg",
    overview:
      "It has been twenty years since Don Diego de la Vega fought Spanish oppression in Alta California as the legendary romantic hero, Zorro. Having escaped from prison he transforms troubled bandit Alejandro into his successor, in order to foil the plans of the tyrannical Don Rafael Montero who robbed him of his freedom, his wife and his precious daughter.",
    vote_average: 6.541,
    release_date: "1998-07-16",
  },
  {
    id: 9352,
    title: "EuroTrip",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//9KrGmbaqjVn7xxDREoz4sBWTdDr.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//9t1e0Mova7eyV3OpRC6nT4y6hHH.jpg",
    overview:
      "When Scott learns that his longtime cyber-buddy from Berlin is a gorgeous young woman, he and his friends embark on a trip across Europe.",
    vote_average: 6.528,
    release_date: "2004-02-20",
  },
]);

mock
  .onPut("http://localhost:8080/filmpage/chechWishlist")
  .replyOnce(200, false)
  .onPut("http://localhost:8080/filmpage/chechWishlist")
  .reply(200, true);

mock
  .onPost("http://localhost:8080/filmpage/addUserWishlist")
  .reply(200, "Add movie to wishlist succeed");
mock
  .onDelete("http://localhost:8080/filmpage/removeUserWishlist")
  .reply(200, "Remove the movie from wishlist succeed");

Object.defineProperty(window, "matchMedia", {
  // 解決matchMedia問題
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
// 每次測試後將 render 的 DOM 清空
afterEach(cleanup);

describe(FilmPage, () => {
  test("The poster of movie should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    expect(
      await screen.findByRole("img", { name: /black adam/i })
    ).toBeInTheDocument();
  });
  test("The title of movie should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    expect(
      await screen.findByRole("heading", { name: /black adam/i })
    ).toBeInTheDocument();
  });
  test("The genres list of movie should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("genreList")).toBeInTheDocument();
    });
  });
  test("The runtime of movie should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    expect(
      await screen.findByRole("heading", { name: /run time/i })
    ).toBeInTheDocument();
    await act(async () => {
      expect(await screen.findByText("mins")).toBeInTheDocument();
    });
  });
  test("The release date of movie should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("releaseDate")).toBeInTheDocument();
    });
  });
  test("The offical website of movie should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("officalWebsite")).toBeInTheDocument();
    });
  });
  test("The overview of movie should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("overview")).toBeInTheDocument();
    });
  });
  test("The trailer button should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(screen.getByRole("img", { name: /trailer/i })).toBeInTheDocument();
    });
  });

  test("The unlike button should be render if user was not login", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("unLikeButton")).toBeInTheDocument();
    });
  });
  test("The unlike button should be render if user was login but unlike.", async () => {
    localStorage.setItem("token", "12345");
    await act(async () => {
      render(<FilmPage />, { wrapper: BrowserRouter });
    });
    await act(async () => {
      expect(await screen.findByTestId("unLikedButton")).toBeInTheDocument();
    });
    localStorage.removeItem("token");
  });
  test("The like button should be render if user was login and liked.", async () => {
    localStorage.setItem("token", "12345");
    await act(async () => {
      render(<FilmPage />, { wrapper: BrowserRouter });
    });
    await act(async () => {
      expect(await screen.findByTestId("likedButton")).toBeInTheDocument();
    });
    localStorage.removeItem("token");
  });

  test("The cast list should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("cast")).toBeInTheDocument();
    });
  });
  test("The similar movies list should be render.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("similarMovies")).toBeInTheDocument();
    });
  });
  test("If user did not login, the tooltip of like button will note the user.", async () => {
    render(<FilmPage />, { wrapper: BrowserRouter });
    fireEvent.mouseOver(await screen.findByTestId("unLikeButton"));
    expect(await screen.findByText("Please login first.")).toBeInTheDocument();
  });

  test("User can click the like button to add the movie or remove the movie from wishlist.", async () => {
    localStorage.setItem("token", "12345");
    await act(async () => {
      render(<FilmPage />, { wrapper: BrowserRouter });
    });
    await act(async () => {
      fireEvent.click(await screen.findByTestId("likedButton"));
    });
    expect(await screen.findByTestId("unLikedButton")).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(await screen.findByTestId("unLikedButton"));
    });
    expect(await screen.findByTestId("likedButton")).toBeInTheDocument();
    localStorage.removeItem("token");
  });

  test("The trailer should be render after user clicked.", async () => {
    await act(() => {
      render(<FilmPage />, { wrapper: BrowserRouter });
    });
    fireEvent.click(screen.getByRole("img", { name: /trailer/i }));
    await act(async () => {
      expect(
        await screen.findByRole("img", { name: /close/i })
      ).toBeInTheDocument();
    });
  });

  test("The trailer modal should be canceled after user clicked on cancel button.", async () => {
    await act(() => {
      render(<FilmPage />, { wrapper: BrowserRouter });
    });
    fireEvent.click(screen.getByRole("img", { name: /trailer/i }));
    await act(async () => {
      fireEvent.click(await screen.findByRole("img", { name: /close/i }));
    });
    expect(
      await screen.findByRole("img", { name: /close/i })
    ).not.toBeInTheDocument();
  });
});
