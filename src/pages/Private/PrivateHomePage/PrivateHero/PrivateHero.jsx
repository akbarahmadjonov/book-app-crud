import Bg from "../../../../assets/images/homepage-header.png";
import SearchIcon from "../../../../assets/images/search-icon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BackgroundDiv,
  BackgroundImage,
  SearchButton,
  SearchInner,
  SearchInput,
  SearchOut,
  SearchTitle,
  SearchWrapper,
  TextTitle,
  TextWrapper,
  Wrapper,
} from "./PrivateHero.styled";

export const PrivateHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <BackgroundDiv>
            <BackgroundImage src={Bg} alt="Bg-header" />
            <TextWrapper>
              <TextTitle>Temuriylar davri adabiyoti</TextTitle>
            </TextWrapper>
          </BackgroundDiv>
          <BackgroundDiv>
            <BackgroundImage src={Bg} alt="Bg-header" />
            <TextWrapper>
              <TextTitle>Jadid adabiyoti</TextTitle>
            </TextWrapper>
          </BackgroundDiv>
          <BackgroundDiv>
            <BackgroundImage src={Bg} alt="Bg-header" />
            <TextWrapper>
              <TextTitle>Sovet davri </TextTitle>
            </TextWrapper>
          </BackgroundDiv>
          <BackgroundDiv>
            <BackgroundImage src={Bg} alt="Bg-header" />
            <TextWrapper>
              <TextTitle>Mustaqillik davri</TextTitle>
            </TextWrapper>
          </BackgroundDiv>
        </Slider>
        {/* Search wrap */}
        <SearchWrapper>
          <SearchInner>
            <SearchTitle>Qidirish</SearchTitle>
            <SearchOut>
              <SearchInput
                type="search"
                name="search"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />
              <SearchButton type="submit">
                {" "}
                <img src={SearchIcon} alt="search-icon" /> Izlash
              </SearchButton>
            </SearchOut>
          </SearchInner>
        </SearchWrapper>
      </Wrapper>
    </>
  );
};
