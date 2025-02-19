import styled from "styled-components";

export const SwiperImg = styled.img.attrs(
  (props: { src: string; alt: string }) => ({
    src: props.src,
    alt: props.alt,
  })
)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const CardImg = styled.img.attrs(
  (props: { src: string; alt: string }) => ({
    src: props.src,
    alt: props.alt,
  })
)`
  width: 13vw;
  height: auto;
  border-radius: 5%;

  @media screen and (max-width: 575px) {
    width: 40vw;
    height: auto;
  }
  @media screen and (min-width: 576px) {
    width: 20vw;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    width: 25vw;
    height: auto;
  }
  @media screen and (min-width: 992px) {
    width: 14vw;
    height: auto;
    padding: 0 5px;
    border-radius: 10%;
  }
`;

export const FilmPageBKG = styled.img.attrs(
  (props: { src: string; alt: string }) => ({
    src: props.src,
    alt: props.alt,
  })
)`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  -o-object-fit: contain;
  object-fit: contain;
  z-index: 0;
  filter: brightness(0.5) sepia(1);
`;

export const PosterImg = styled.img<{ src: string; alt: string }>`
  height: auto;
  width: 22vw;
  object-fit: contain;
  @media screen and (max-width: 424px) {
    width: 65vw;
    margin: 0.5rem 0;
  }
  @media screen and (min-width: 425px) {
    width: 50vw;
    margin: 0.5rem 0;
  }
  @media screen and (min-width: 650px) {
    width: 30vw;
    margin: 0.5rem 0;
  }
  @media screen and (min-width: 992px) {
    width: 22vw;
    margin: 0.5rem 0;
  }
`;

export const SmallCard = styled.img.attrs(
  (props: { src: string; alt: string }) => ({
    src: props.src,
    alt: props.alt,
  })
)`
  width: 10vw;
  height: auto;
  border-radius: 5px;

  @media screen and (max-width: 575px) {
    width: 35vw;
    height: auto;
  }
  @media screen and (min-width: 576px) {
    width: 20vw;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    width: 25vw;
    height: auto;
  }
  @media screen and (min-width: 992px) {
    width: 12vw;
    height: auto;
    padding: 0 2%;
  }
`;
