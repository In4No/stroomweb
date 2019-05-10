import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import AppHomeImage1 from './homeImages/IMG_4127.jpg';
import AppHomeImage2 from './homeImages/IMG_2049.jpg';
import AppHomeImage3 from './clientImages/client1.jpg';
import AppHomeImage4 from './homeImages/IMG_4812.jpg';
import AppHomeImage5 from './homeImages/IMG_5015.jpg';
import {
  SectionWrapper,
  AppLogoContainer,
  AppLogo,
  InitialAnimBg,
  AppBgRight,
  AppHomeImageContainer,
  AppHomeImagesRow,
  AppHomeImages,
  AppMenuWrapper,
  AppMenuItem,
  AppWelcomeText,
  AppMainHeading,
  AppSubHeading,
  CameraWrapper,
  CameraFlash,
  WorkBg,
  WorkHeading,
  WorkSlider,
  CarouselItem,
  IndoorFirst,
  IndoorSecond,
  IndoorThird,
  OutdoorFirst,
  OutdoorSecond,
  OutdoorThird,
  ClientFirst,
  ClientSecond,
  ClientThird,
  FullPage,
  Menu,
  MenuWrapper,
  MenuItem
} from './styledd';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showHome: false,
      showInitialAnim: true,
      showFlash: false,
      selectedPage: 0,
    }
  }

  showFlash = () => {
    console.log(this.state.showFlash);
    this.setState({ showFlash: true });
    setTimeout(function(){ this.setState({ showInitialAnim: false }) }.bind(this), 700);
  }

  render(){
    return(
    <SectionWrapper>
      <FullPage menuClicked={this.state.menuClicked}>
      {!this.state.showInitialAnim &&
      <React.Fragment>
        <AppLogoContainer><AppLogo selectedPage={this.state.selectedPage}/></AppLogoContainer>
          <AppBgRight>
            <AppWelcomeText>
              <AppMainHeading>At Stroom,</AppMainHeading>
              <AppSubHeading>You come first.</AppSubHeading>
            </AppWelcomeText>
            <AppHomeImageContainer>
              <AppHomeImages src={AppHomeImage1}/>
              <AppHomeImages src={AppHomeImage2}/>
              <AppHomeImages src={AppHomeImage3}/>
              <AppHomeImages src={AppHomeImage4}/>
              <AppHomeImages src={AppHomeImage5}/>
            </AppHomeImageContainer>
          </AppBgRight>
          <AppMenuWrapper>
            <AppMenuItem shouldRotate={this.state.selectedPage === 0} onClick={() => this.setState({ selectedPage: 0 })}>HOME</AppMenuItem>
            {/* <AppMenuItem shouldRotate={this.state.selectedPage === 1} onClick={() => this.setState({ selectedPage: 1 })}>STUDIO</AppMenuItem> */}
            {/* <AppMenuItem shouldRotate={this.state.selectedPage === 2} onClick={() => this.setState({ selectedPage: 2 })}>PROJECTS</AppMenuItem> */}
          </AppMenuWrapper>
        </React.Fragment>
      }
      {/* {
        this.state.showInitialAnim &&
        <InitialAnimBg onClick={() => this.showFlash()}><CameraWrapper><CameraFlash showFlash={this.state.showFlash}/></CameraWrapper></InitialAnimBg>
      } */}
      {
        this.state.selectedPage === 2 &&
        <React.Fragment>
          <WorkBg>
            <WorkHeading>Indoors</WorkHeading>
            <WorkSlider>
              <OwlCarousel
                className="owl-theme"
                margin={2}
                items={1}
                stagePadding={20}
                loop
              >
                <CarouselItem><IndoorFirst /></CarouselItem>
                <CarouselItem><IndoorSecond /></CarouselItem>
                <CarouselItem><IndoorThird /></CarouselItem>
              </OwlCarousel>
            </WorkSlider>
            <WorkHeading>Outdoors</WorkHeading>
            <WorkSlider>
            <OwlCarousel
                className="owl-theme"
                margin={2}
                items={1}
                stagePadding={20}
                loop
              >
                <CarouselItem><OutdoorFirst /></CarouselItem>
                <CarouselItem><OutdoorSecond /></CarouselItem>
                <CarouselItem><OutdoorThird /></CarouselItem>
              </OwlCarousel>
            </WorkSlider>
            <WorkHeading>Client Projects</WorkHeading>
            <WorkSlider>
            <OwlCarousel
                className="owl-theme"
                margin={2}
                items={1}
                stagePadding={20}
                loop
              >
                <CarouselItem><ClientFirst /></CarouselItem>
                <CarouselItem><ClientSecond /></CarouselItem>
                <CarouselItem><ClientThird /></CarouselItem>
              </OwlCarousel>
            </WorkSlider>
          </WorkBg>
        </React.Fragment>
      }
      </FullPage>
      {(this.state.menuClicked === undefined || this.state.menuClicked === false) && <Menu onClick={() => this.setState({ menuClicked: true })}>Explore</Menu>}
      {this.state.menuClicked && <Menu onClick={() => this.setState({ menuClicked: false })}>X</Menu>}
      {
        this.state.menuClicked &&
        <MenuWrapper>
          <MenuItem>Portraits</MenuItem>
          <MenuItem>Studio</MenuItem>
          <MenuItem>Outdoor</MenuItem>
          <MenuItem>Book a shoot</MenuItem>
        </MenuWrapper>
      }
    </SectionWrapper>
    );
  }
};

export default App;
