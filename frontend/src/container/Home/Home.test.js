import Home from "./Home";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet("http://localhost:8080/fetchTMDB/fetchNowPlayingMovies").reply(200, [
  {
    id: 436270,
    title: "Black Adam",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    vote_average: 7.3,
    release_date: "2022-10-19",
  },
  {
    id: 505642,
    title: "Black Panther: Wakanda Forever",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    vote_average: 7.6,
    release_date: "2022-11-09",
  },
  {
    id: 1037858,
    title: "The Soccer Football Movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//sqVxhRkPwOo6jogWZjE99V1HRE1.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
    overview:
      "When mysterious green slime monsters start popping out of soccer balls, all-star athletes Zlatan Ibrahimović and Megan Rapinoe must team up with their four biggest fans to stop evil scientist 'Weird Al' Yankovic from stealing their talent.",
    vote_average: 6.7,
    release_date: "2022-11-09",
  },
  {
    id: 979924,
    title: "On the Line",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//26D4G7okoLYbDf5MFYFlSRM6jMv.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//a14BbSHvLgzCdbDD6tAL8OBVKL1.jpg",
    overview:
      "A provocative and edgy radio host must play a dangerous game of cat and mouse with a mysterious caller who's kidnapped his family and is threatening to blow up the whole station.",
    vote_average: 6.5,
    release_date: "2022-11-04",
  },
  {
    id: 593643,
    title: "The Menu",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//GFq9kYUnpRCnlbIbjPzNA96e0j.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg",
    overview:
      "A couple travels to a coastal island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    vote_average: 7.3,
    release_date: "2022-12-02",
  },
  {
    id: 899112,
    title: "Violent Night",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//6mEYUYdkKoVCMeYf3rTFj0L1uyv.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//1CHp8QQjGwqWaPZWjzcRidlt5Xs.jpg",
    overview:
      "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
    vote_average: 7.7,
    release_date: "2022-12-02",
  },
  {
    id: 791177,
    title: "Bones and All",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//atmII0hn3iQe3IWMBmIb3cc8EJZ.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//dBQuk2LkHjrDsSjueirPQg96GCc.jpg",
    overview:
      "Abandoned by her father, a young woman embarks on a thousand-mile odyssey through the backroads of America where she meets a disenfranchised drifter. But despite their best efforts, all roads lead back to their terrifying pasts and to a final stand that will determine whether their love can survive their otherness.",
    vote_average: 7.4,
    release_date: "2022-11-24",
  },
  {
    id: 676547,
    title: "Prey for the Devil",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//7IwLNl9MJbj47pObu8xMDUbIesv.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg",
    overview:
      "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
    vote_average: 5.8,
    release_date: "2022-10-28",
  },
  {
    id: 883502,
    title: "Fortress: Sniper's Eye",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//qNRkfXBdAuXk9Qs3BEDIfmbAK9w.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//61J34xHVVdQHbJ4MSCWQo4e727v.jpg",
    overview:
      "Weeks after the deadly assault on Fortress Camp, Robert makes a daring rescue to save Sasha, the widow of his old nemesis Balzary. But back in the camp's command bunker, it appears Sasha may have devious plans of her own. As a new attack breaks out, Robert is confronted with a familiar face he thought he'd never see again…",
    vote_average: 5.6,
    release_date: "2022-10-21",
  },
  {
    id: 653851,
    title: "Devotion",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//1k8VmdDxUHYrKCOWWhPrgbstCo9.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//mOuU9z8nrBaEkS5D6z8IPTxIZC9.jpg",
    overview:
      "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
    vote_average: 7,
    release_date: "2022-12-02",
  },
  {
    id: 592695,
    title: "Pleasure",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//y0LhmaMYpFkIfrUlOpJYTVMH2eA.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//t3SEI2YI81oO3nEgjJ9jMAIKApY.jpg",
    overview:
      "19-year-old Linnéa leaves her small town in Sweden and heads for Los Angeles with the aim of becoming the world's next big porn star, but the road to her goal turns out to be bumpier than she imagined.",
    vote_average: 6.3,
    release_date: "2022-11-11",
  },
  {
    id: 1026822,
    title: "Cici",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//5yW2BjqjTLTvJqQ7dRJjiDu9oEL.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//hzB4hGHkW4NGnjhqTSyTj9AbgGO.jpg",
    overview:
      "A family migrates to the city after a tragic loss. When they reunite in their hometown 30 years later, buried emotions and painful secrets resurface.",
    vote_average: 6,
    release_date: "2022-10-27",
  },
  {
    id: 614939,
    title: "Bros",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//oySLOwNAsKu6ilFro8XxqP4wDJW.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//op02Hv5i4Z049nGJYmk6BScRqHO.jpg",
    overview: "Two men with commitment problems attempt a relationship.",
    vote_average: 7.4,
    release_date: "2022-10-28",
  },
  {
    id: 496331,
    title: "Brahmāstra Part One: Shiva",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//rBINWYnecAHfpjYiAYaK0jlsXtp.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//x61qdvHIsr9U53FwoLVDQqAGur0.jpg",
    overview:
      "The story of Shiva – a young man on the brink of an epic love, with a girl named Isha. But their world is turned upside down when Shiva learns that he has a mysterious connection to the Brahmāstra... and a great power within him that he doesn’t understand just yet - the power of Fire.",
    vote_average: 6.8,
    release_date: "2022-12-02",
  },
  {
    id: 826218,
    title: "Por los pelos",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//zqtz9bttBUlXKxfUDxvx5zG7sf5.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//l1gpVietOZl6UPfNY3zxaLkEPci.jpg",
    overview:
      "Juanjo (Antonio Pagudo) is a forty-year-old man who, despite not having low self-esteem due to his baldness, his wife, Inma (Eva Ugarte), obsessed with image and aesthetics, is in charge of making him complex about it. On the other hand, his friend Sebas (Carlos Librado 'Nene') is affected by his lack of hair and is willing to do whatever it takes to regain his younger version, something that affects his ex-wife, Sofía (Amaia Salamanca) , and their daughters. Ready for anything, both get into a little trouble to get the money to allow them to travel to Turkey and have a hair transplant. In Istanbul they meet Rayco (Tomy Aguilera), a young reggaeton singer who is having great success, but after discovering his alopecia at a concert, he needs an urgent hair transplant. In this way, the three of them will try to seek happiness through aesthetics, but perhaps they will discover that there is something far beyond the physical.",
    vote_average: 7.5,
    release_date: "2022-11-14",
  },
  {
    id: 893712,
    title: "Sword Art Online the Movie -Progressive- Scherzo of a Deep Night",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//a5alro35e0XUa21Hb9Wlci67U73.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//1L904CSzPCEEpPcUoBWH4cjuGJW.jpg",
    overview: "",
    vote_average: 6.8,
    release_date: "2022-11-04",
  },
  {
    id: 633374,
    title: "Remember",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//ru2LECaGqWtsL3kRWWJ3EoDlF5J.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//lvEtTSshU47BCchwwU1Ej1PKsGn.jpg",
    overview:
      "Pil-ju, a retired soldier in his 80s, has dementia and sets off in search of the people he believes responsible for the death of his family. With 5 names tattooed on his fingers and pieces of collapsing memories, Pil-ju tracks down his targets and kills them one by one. In-gyu, a young innocent man, becomes the prime suspect of a murder Pil-ju committed and tries to prove his innocence, and hopefully stop the old man's revenge journey.",
    vote_average: 8.3,
    release_date: "2022-11-18",
  },
  {
    id: 1024546,
    title: "Detective Knight: Rogue",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//zNE4oUkZnpbCpFiJbbaX4YJOPmE.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg",
    overview:
      "As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.",
    vote_average: 4.8,
    release_date: "2022-11-25",
  },
  {
    id: 3176,
    title: "Battle Royale",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//amBvmIshdsSkOtvVIgxl7YSQ9Dg.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//uRhc1IfwYKwVqIp2OTZGFzTVsdF.jpg",
    overview:
      "In the future, the Japanese government captures a class of ninth-grade students and forces them to kill each other under the revolutionary 'Battle Royale' act.",
    vote_average: 7.3,
    release_date: "2005-06-03",
  },
  {
    id: 837881,
    title: "She Said",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//6d5vZGZVsw06RW8VsctSPY2FMKL.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//770tuDli5fyV3tfjdRnKOVdP6gf.jpg",
    overview:
      "New York Times reporters Megan Twohey and Jodi Kantor break one of the most important stories in a generation — a story that helped launch the #MeToo movement and shattered decades of silence around the subject of sexual assault in Hollywood.",
    vote_average: 7.4,
    release_date: "2022-11-18",
  },
]);

mock.onGet("http://localhost:8080/fetchTMDB/fetchGenerList").reply(200, [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
]);

mock.onPut("http://localhost:8080/fetchTMDB/fetchMoviesByGenres").reply(200, [
  {
    id: 436270,
    title: "Black Adam",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    vote_average: 7.3,
    release_date: "2022-10-19",
  },
  {
    id: 724495,
    title: "The Woman King",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    overview:
      "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
    vote_average: 7.9,
    release_date: "2022-09-15",
  },
  {
    id: 1013860,
    title: "R.I.P.D. 2: Rise of the Damned",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//qk9jBMPGP9UiNSjAdOX3kjG52Ym.jpg",
    overview:
      "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
    vote_average: 6.8,
    release_date: "2022-11-15",
  },
  {
    id: 792775,
    title: "Cop Secret",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//sUuzl04qNIYsnwCLQpZ2RSvXA1V.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//jnWyZsaCl3Ke6u6ReSmBRO8S1rX.jpg",
    overview:
      "When Bússi, Iceland's toughest cop, is forced to work with a new partner to solve a series of bank robberies, the pressure to close the case as soon as possible proves too much for him.",
    vote_average: 6.4,
    release_date: "2022-05-23",
  },
  {
    id: 948276,
    title: "Lost Bullet 2",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//707thQazLJiYLBhCrZlRoV05NNL.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg",
    overview:
      "Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.",
    vote_average: 6.7,
    release_date: "2022-11-10",
  },
  {
    id: 988233,
    title: "Hex",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//90ZZIoWQLLEXSVm0ik3eEQBinul.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//xFJHb43ZAnnuiDztxZYsmyopweb.jpg",
    overview:
      "Following a mysterious disappearance on a jump, a group of skydivers experience paranormal occurrences that leave them fighting for their lives.",
    vote_average: 3.9,
    release_date: "2022-11-01",
  },
  {
    id: 829799,
    title: "Paradise City",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//uGuHHS9SWv7MrFhCH6zoGGd7DA8.jpg",
    overview:
      "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
    vote_average: 6.2,
    release_date: "2022-11-11",
  },
  {
    id: 505642,
    title: "Black Panther: Wakanda Forever",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    vote_average: 7.5,
    release_date: "2022-11-09",
  },
  {
    id: 774752,
    title: "The Guardians of the Galaxy Holiday Special",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
    overview:
      "On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.",
    vote_average: 7.5,
    release_date: "2022-11-25",
  },
  {
    id: 830784,
    title: "Lyle, Lyle, Crocodile",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//c1bz69r0v065TGFA5nqBiKzPDys.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
    overview:
      "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
    vote_average: 7.8,
    release_date: "2022-10-07",
  },
  {
    id: 872177,
    title: "Corrective Measures",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//8Tr79lfoCkOYRg8SYwWit4OoQLi.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//aHFq9NMhavOL0jtQvmHQ1c5e0ya.jpg",
    overview:
      "Set in San Tiburon, the world's most dangerous maximum-security penitentiary and home to the world's most treacherous superpowered criminals, where tensions among the inmates and staff heighten, leading to anarchy that engulfs the prison and order is turned upside down.",
    vote_average: 5.1,
    release_date: "2022-04-29",
  },
  {
    id: 934641,
    title: "The Minute You Wake Up Dead",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
    overview:
      "A stockbroker in a small southern town gets embroiled in an insurance scam with a next-door neighbor that leads to multiple murders when a host of other people want in on the plot. Sheriff Thurmond Fowler, the by-the-book town sheriff for over four decades, works earnestly to try and unravel the town’s mystery and winds up getting more than he bargained for.",
    vote_average: 5,
    release_date: "2022-11-04",
  },
  {
    id: 485470,
    title: "Nice Sister-In-Law 2",
    backdrop_path: "https://image.tmdb.org/t/p/original/null",
    poster_path:
      "https://image.tmdb.org/t/p/w500//3pEs4hmeHvTAsmx09whEaPDOQpq.jpg",
    overview:
      "If you give it once, a good brother-in-law who gives everything generously will come!  At the house of her girlfriend Jin-kyung, who lives with pumice stone, her brother and his wife suddenly visit and the four of them live together. At first, Kyung-seok, who was burdened by his girlfriend's brother, began to keep his eyes on his wife, Yeon-su. A bold brother-in-law who walks around in no-bra and panties without hesitation even at his sister-in-law's house. Besides, from a certain moment, he starts to send a hand of temptation to Pyeong-seok first...",
    vote_average: 6,
    release_date: "2017-10-08",
  },
  {
    id: 855440,
    title: "Polar",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//jCY35GkjwWUmoPO9EV1lWL6kuyj.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//efuKHH9LqBZB67AS87kprLgaYO8.jpg",
    overview:
      "MG, a policewoman who has been expelled from the Corps due to the problems with alcohol and drugs that she has had since the loss of her son, receives a call from a man asking her to look for Macarena Gómez, a popular TV actress.",
    vote_average: 5,
    release_date: "2022-10-26",
  },
  {
    id: 747803,
    title: "One Way",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//vmDa8HijINCAFYKqsMz0YM3sVyE.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//uQCxOziq79P3wDsRwQhhkhQyDsJ.jpg",
    overview:
      "On the run with a bag full of cash after a robbing his former crime boss—and a potentially fatal wound—Freddy slips onto a bus headed into the unrelenting California desert. With his life slipping through his fingers, Freddy is left with very few choices to survive.",
    vote_average: 6.1,
    release_date: "2022-09-02",
  },
  {
    id: 338958,
    title: "Disenchanted",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//kpUre8wWSXn3D5RhrMttBZa6w1v.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//4x3pt6hoLblBeHebUa4OyiVXFiM.jpg",
    overview:
      "Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.",
    vote_average: 7.3,
    release_date: "2022-11-16",
  },
  {
    id: 972313,
    title: "Blowback",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//83Vt9Io9xSFKfKDdgxqKZgdqjuZ.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//fHQHC32dhom8u0OxC2hs2gYQh0M.jpg",
    overview:
      "When a master thief is sabotaged during a bank heist and left for dead, he seeks revenge on his former crew one target at a time. Now, with the cops and the mob closing in, he's in the race of his life to reclaim an untold fortune in cryptocurrency from those who double-crossed him.",
    vote_average: 5.8,
    release_date: "2022-06-17",
  },
  {
    id: 899294,
    title: "Frank and Penelope",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//eyiSLRh44SKKWIJ6bxWq8z1sscB.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//5NpXoAi3nEQkEgLO09nmotPfyNa.jpg",
    overview:
      "A tale of love and violence when a man on his emotional last legs finds a savior seductively dancing in a run-down strip club. And a life most certainly headed off a cliff suddenly becomes redirected - as everything is now worth dying for.",
    vote_average: 7.6,
    release_date: "2022-06-03",
  },
  {
    id: 882598,
    title: "Smile",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
    overview:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    vote_average: 6.8,
    release_date: "2022-09-23",
  },
  {
    id: 551271,
    title: "Medieval",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//AokFVAl1JVooW1uz2V2vxNUxfit.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//4njdAkiBdC5LnFApeXSkFQ78GdT.jpg",
    overview:
      "The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.",
    vote_average: 7.2,
    release_date: "2022-09-08",
  },
]);

mock.onGet("http://localhost:8080/fetchTMDB/fetchPopularMovies").reply(200, [
  {
    id: 436270,
    title: "Black Adam",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    vote_average: 7.3,
    release_date: "2022-10-19",
  },
  {
    id: 724495,
    title: "The Woman King",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    overview:
      "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
    vote_average: 7.9,
    release_date: "2023-03-10",
  },
  {
    id: 948276,
    title: "Lost Bullet 2",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//707thQazLJiYLBhCrZlRoV05NNL.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg",
    overview:
      "Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.",
    vote_average: 6.7,
    release_date: "2022-11-10",
  },
  {
    id: 505642,
    title: "Black Panther: Wakanda Forever",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    vote_average: 7.6,
    release_date: "2022-11-09",
  },
  {
    id: 774752,
    title: "The Guardians of the Galaxy Holiday Special",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
    overview:
      "On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.",
    vote_average: 7.5,
    release_date: "2022-11-25",
  },
  {
    id: 830784,
    title: "Lyle, Lyle, Crocodile",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//c1bz69r0v065TGFA5nqBiKzPDys.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
    overview:
      "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
    vote_average: 7.8,
    release_date: "2023-01-20",
  },
  {
    id: 338958,
    title: "Disenchanted",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//kpUre8wWSXn3D5RhrMttBZa6w1v.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//4x3pt6hoLblBeHebUa4OyiVXFiM.jpg",
    overview:
      "Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.",
    vote_average: 7.3,
    release_date: "2022-11-18",
  },
  {
    id: 882598,
    title: "Smile",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
    overview:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    vote_average: 6.8,
    release_date: "2022-09-30",
  },
  {
    id: 668461,
    title: "Slumberland",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//6tAYyCxF0T5oUIH95zMBC3X3W5T.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//f18kgonrgr8YvEuvshExS4XBGL8.jpg",
    overview:
      "A young girl discovers a secret map to the dreamworld of Slumberland, and with the help of an eccentric outlaw, she traverses dreams and flees nightmares, with the hope that she will be able to see her late father again.",
    vote_average: 7.9,
    release_date: "2022-11-18",
  },
  {
    id: 985939,
    title: "Fall",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
    vote_average: 7.3,
    release_date: "2022-09-16",
  },
  {
    id: 76600,
    title: "Avatar: The Way of Water",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    vote_average: 0,
    release_date: "2022-12-16",
  },
  {
    id: 1037858,
    title: "The Soccer Football Movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//sqVxhRkPwOo6jogWZjE99V1HRE1.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
    overview:
      "When mysterious green slime monsters start popping out of soccer balls, all-star athletes Zlatan Ibrahimović and Megan Rapinoe must team up with their four biggest fans to stop evil scientist 'Weird Al' Yankovic from stealing their talent.",
    vote_average: 6.7,
    release_date: "2022-11-09",
  },
  {
    id: 829280,
    title: "Enola Holmes 2",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//u9Io1hVnxb2b3T0z99aOK8sq0SN.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
    overview:
      "Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.",
    vote_average: 7.7,
    release_date: "2022-11-04",
  },
  {
    id: 979924,
    title: "On the Line",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//26D4G7okoLYbDf5MFYFlSRM6jMv.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//a14BbSHvLgzCdbDD6tAL8OBVKL1.jpg",
    overview:
      "A provocative and edgy radio host must play a dangerous game of cat and mouse with a mysterious caller who's kidnapped his family and is threatening to blow up the whole station.",
    vote_average: 6.5,
    release_date: "2022-11-04",
  },
  {
    id: 49046,
    title: "All Quiet on the Western Front",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
    overview:
      "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
    vote_average: 7.8,
    release_date: "2022-10-28",
  },
  {
    id: 19995,
    title: "Avatar",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    overview:
      "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    vote_average: 7.5,
    release_date: "2009-12-18",
  },
  {
    id: 616037,
    title: "Thor: Love and Thunder",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    overview:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    vote_average: 6.7,
    release_date: "2022-07-06",
  },
  {
    id: 361743,
    title: "Top Gun: Maverick",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    overview:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    vote_average: 8.3,
    release_date: "2022-05-25",
  },
  {
    id: 507086,
    title: "Jurassic World Dominion",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//3PieOs1t6dPHWlgvX3XoqTIQLqN.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    overview:
      "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
    vote_average: 7,
    release_date: "2022-06-08",
  },
  {
    id: 718930,
    title: "Bullet Train",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//2w8O3Xi1bihF4WfcaAJG5inqJVT.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
    overview:
      "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
    vote_average: 7.5,
    release_date: "2022-08-03",
  },
]);

mock.onGet("http://localhost:8080/fetchTMDB/fetchUpcomingMovies").reply(200, [
  {
    id: 76600,
    title: "Avatar: The Way of Water",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    vote_average: 0,
    release_date: "2022-12-16",
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//cP8YNG3XUeBmO8Jk7Skzq3vwHy1.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    vote_average: 7.7,
    release_date: "2022-12-30",
  },
  {
    id: 497828,
    title: "Triangle of Sadness",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//1AsP4UAv6hCGXUcH8GqMwd5KmCN.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//fgy78BLl0gk8OzTWHZyGrSlIEON.jpg",
    overview:
      "A celebrity model couple are invited on a luxury cruise for the uber-rich, helmed by an unhinged captain. What first appeared Instagrammable ends catastrophically, leaving the survivors stranded on a desert island and fighting for survival.",
    vote_average: 7.6,
    release_date: "2022-12-09",
  },
  {
    id: 934207,
    title: "Sissy",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//n43WipFChYnRC07ExfBZovzO4bg.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//52gL9six5JuT5qdx3tqwuVHls78.jpg",
    overview:
      "Cecilia is a successful social media influencer living the dream, until she runs into her ex-childhood best friend and is invited away on her bachelorette weekend. Suddenly, Sissy finds herself stuck in a remote cabin with her school bully... and a taste for revenge",
    vote_average: 6.9,
    release_date: "2022-12-16",
  },
  {
    id: 696157,
    title: "I Wanna Dance with Somebody",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//pCOnhEqUJa22Qc4gUVrnPYQLO0I.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//szE2ACOGhdPYsulesKSQfhS4lBt.jpg",
    overview:
      "The joyous, emotional, heartbreaking celebration of the life and music of Whitney Houston, the greatest female R&B pop vocalist of all time. Tracking her journey from obscurity to musical superstardom.",
    vote_average: 0,
    release_date: "2022-12-30",
  },
  {
    id: 925786,
    title: "Satan's Slaves 2: Communion",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//Pg0al5HWhs6wYMxfD2A8A7QnB7.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//6Hp3eaih3UxpAOUvgsFS9TvVpPD.jpg",
    overview:
      "After moving from their home to an apartment building, a new terror awaits Rini’s family.",
    vote_average: 7.2,
    release_date: "2022-12-23",
  },
  {
    id: 882580,
    title: "Christmas Carol",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//iWHXT7XmACGUEMY61f2hkXs5udE.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//6X8oKNgny4DqXEwQiYKoS6Yedw.jpg",
    overview:
      "On a Christmas Eve, a lifeless body of teenage boy is found. The victim's revenge-driven twin brother checks himself into a juvie to hunt down the suspects.",
    vote_average: 0,
    release_date: "2022-12-09",
  },
  {
    id: 806128,
    title: "The Owl",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//aIKxC8mGq44EUDLPYw1ckCwciqz.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//54dUtoYXnHDHRLTrWoqIyXSzPML.jpg",
    overview:
      "A story about the death of Crown Prince So-hyeon, who returns from the Qing Dynasty in the background of the Joseon Dynasty.",
    vote_average: 9,
    release_date: "2022-12-09",
  },
  {
    id: 768726,
    title: "Dogtanian and the Three Muskehounds",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//n2t9tpRTIjC1GDtLSnOX76tH27S.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//tzc6gzLENIujnRIx7rUjN1FIhn5.jpg",
    overview:
      "France, 17th century, under the reign of Louis XIII. Dogtanian is an impetuous and innocent peasant from Gascony, as well as a skilled swordsman, who travels to Paris with the purpose of making his dream come true: to join the Corps of Muskehounds of the Royal Guard.",
    vote_average: 6.8,
    release_date: "2022-12-23",
  },
  {
    id: 1035803,
    title: "Detective Knight: Redemption",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//u5xiYW1ME4FFJEhwvSJzE2Z5NC9.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//acCIjyszhmit8k5eWVGNTustYRK.jpg",
    overview:
      "In custody in New York, Detective James Knight finds himself in the middle of a jailbreak led by The Christmas Bomber, a brutal fanatic whose Santa Claus disciples are terrorizing the city. With the promised return of his badge in exchange for taking out the terrorists, the steely-eyed Knight doles out mercy for the just...and merciless justice for all the rest.",
    vote_average: 0,
    release_date: "2022-12-09",
  },
  {
    id: 591222,
    title: "Limbo",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//j4mGOCF7CL73qhdNB894d8OV254.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//7Hh2w1ei26DTJ3JWmW8qcGQUI1n.jpg",
    overview:
      "Veteran detective Cham works with rookie cop Will to hunt down the city's serial killer. The investigation leads them to a lair littered with dismembered female limbs, and an ex-con who killed Cham's wife and child years ago...",
    vote_average: 7.2,
    release_date: "2022-12-23",
  },
  {
    id: 924120,
    title: "Blue Island",
    backdrop_path: "https://image.tmdb.org/t/p/original/null",
    poster_path:
      "https://image.tmdb.org/t/p/w500//xuWXiWa1ChwJWzlBy7GvN1erOBs.jpg",
    overview:
      "Although the Chinese government promised that Hong Kong would retain separate status until 2047, in recent years the Chinese state has consolidated its power over the metropolis. Large-scale protests by the populace have been brutally suppressed. This mix of documentary, fiction, and visions of the future reveals the current state of desolate depression among the people of Hong Kong. “A desperate attempt to capture the final moments of a sinking island”, as maker Chan Tze-woon himself puts it.",
    vote_average: 0,
    release_date: "2022-12-16",
  },
  {
    id: 1050665,
    title: "Cheer Together",
    backdrop_path: "https://image.tmdb.org/t/p/original/null",
    poster_path:
      "https://image.tmdb.org/t/p/w500//f3LaoVT5XzJ3dbcciovVQbsNEfo.jpg",
    overview: "",
    vote_average: 0,
    release_date: "2022-12-16",
  },
  {
    id: 914203,
    title: "Tori and Lokita",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//uqiN512fNwvTx0DZ6EYWzyI2PLN.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//xbDs1ofrAJ7VsxrrxwO6AW2ahn7.jpg",
    overview:
      "In Belgium today, a young boy and an adolescent girl who have travelled alone from Africa pit their invincible friendship against the difficult conditions of their exile.",
    vote_average: 7,
    release_date: "2022-12-16",
  },
  {
    id: 975681,
    title: "Welcome Home",
    backdrop_path: "https://image.tmdb.org/t/p/original/null",
    poster_path:
      "https://image.tmdb.org/t/p/w500//vNJvd3DnlkUfE0xlIRtR2u6ya8q.jpg",
    overview:
      "This is a short film about women with a great influence in a Chinese family. In this mother-and-daughter relationship hides a cycle of love, life and hurting each other.",
    vote_average: 0,
    release_date: "2022-12-16",
  },
  {
    id: 814174,
    title: "Flotsam and Jetsam",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//xMpyAxQSJFrvy4tCmH4uR4LErlj.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//i6XSIEl1AJQux0eFCFRyw6JQoGZ.jpg",
    overview:
      "Since his wife Mei-yun was left comatose after nearly drowning, CHEN You-ming has been raising his three sons alone in their seaside village. And since the mechanical digger he drives broke down, Chen has had more time on his hands than he likes. His life is suddenly disrupted by the appearance of a disturbed young woman who calls herself XIE Hui-zhen (“Zhen” for short) and says that Chen is her father. To uncover the facts behind Zhen’s wild claim, CHEN has to contact his old girlfriend KE Li-jia, last seen twenty years ago. Before the truth about Zhen’s inner turmoil emerges, CHEN has to deal with the death of his wife in hospital and the stresses in his relationships with his sons Wei, Ting and Liang.",
    vote_average: 0,
    release_date: "2022-12-23",
  },
  {
    id: 923192,
    title: "Too Cool to Kill",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//nY09lw5kPyXRqKHkrqddkcZGM5r.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//yN2VMJrgyklapBOn2EXmH8DQKck.jpg",
    overview:
      "Wei Chenggong, a working actor with big dreams, finally appears to get his big break when actress Milan invites him to play the lead role of 'Killer Karl' in a new play. Little does Wei Chenggong know, he has fallen into a perilous conspiracy where all the villains are real, and only through his acting skills and good deal of luck will he be able to make it out alive.",
    vote_average: 5.9,
    release_date: "2022-12-09",
  },
  {
    id: 958937,
    title: "Ajoomma",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//6cmKP4k30LuZ9KPS3aEdDurituV.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//ldG1ns9vWPgt5pKXVnsrd1ZhweO.jpg",
    overview:
      "A middle-aged widowed Singaporean woman named Auntie has spent the majority of her life providing for her family. As her adult son Sam becomes more independent, she is left to deal with a completely new identity outside of her roles as a daughter, wife, and mother.  A solo vacation to Korea turns into a wild adventure when she meets Jung Su, an elderly security officer, and Kwon-Woo, a teenage tour guide who can't seem to get his life together. The trio embark on an unexpected roller coaster ride where hearts flutter and unlikely bonds are formed.",
    vote_average: 0,
    release_date: "2022-12-23",
  },
  {
    id: 949697,
    title: "The One Hundred",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//oijKQd7jcaAwq3aLoUiGo1abeV3.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//o89snIeueVAH0m56vM15v0RjpEz.jpg",
    overview:
      "A quarantine hotel where overseas travellers stay in isolation to curb the spread of a contagious virus, but they soon become prey to a strange breed of a 100-legged monster.",
    vote_average: 2,
    release_date: "2022-12-16",
  },
  {
    id: 1003706,
    title: "甲州街道から愛を込めて",
    backdrop_path: "https://image.tmdb.org/t/p/original/null",
    poster_path:
      "https://image.tmdb.org/t/p/w500//nFic6VR0Wb3ybE6CkPSufWVgAt0.jpg",
    overview: "",
    vote_average: 0,
    release_date: "2022-12-09",
  },
]);

// 解決matchMedia問題
Object.defineProperty(window, "matchMedia", {
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

describe(Home, () => {
  test("Carousel component should render normally", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("carousel")).toBeInTheDocument();
    });
  });
  test("Genres button should render normally", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("genreButton")).toBeInTheDocument();
    });
  });
  test("Movies recommended by genre should render normally", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("moviesByGenre")).toBeInTheDocument();
    });
  });
  test("Pupular movies should render normally", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("popularMovies")).toBeInTheDocument();
    });
  });
  test("Now playing movies should render normally", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("nowPlayingMovies")).toBeInTheDocument();
    });
  });
  test("Upcoming movies should render normally", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    await act(async () => {
      expect(await screen.findByTestId("upComingMovies")).toBeInTheDocument();
    });
  });
  test("The genre button can be clicked and rerender the recommend movies.", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    const genreButton = await screen.findByRole("button", { name: /crime/i });
    await act(async () => {
      fireEvent.click(genreButton);
      expect(await screen.findByText("One Way")).toBeInTheDocument();
    });
  });
});
