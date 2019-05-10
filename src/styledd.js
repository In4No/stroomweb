import styled, { css, keyframes } from 'styled-components';
import Logo from './images/stroom_LOGO.png';
import WorkLogo from './images/work_LOGO.png';
import Camera from './images/camera.svg';

import Indoor1 from './indoorImages/IMG_2049.jpg';
import Indoor2 from './indoorImages/IMG_1844.jpg';
import Indoor3 from './indoorImages/Photocapture.jpg';

import Outdoor1 from './outdoorImages/concept.jpg';
import Outdoor2 from './outdoorImages/IMG_3476.jpg';
import Outdoor3 from './outdoorImages/IMG_6003.jpg';

import Client1 from './clientImages/client1.jpg';
import Client2 from './clientImages/client2.jpg';
import Client3 from './clientImages/client3.jpg';

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
`;

export const WorkBgAnim = keyframes`
  0% {
    top: 100vh;
  }
  100% {
    top: 0;
  }
`;

export const WorkBg = styled.div`
  position: fixed;
  overflow: auto;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 100vh;
  padding-top: 75px;
  background-color: #1a0d2d;
  animation: ${WorkBgAnim} 0.5s ease-in-out;
  animation-fill-mode: forwards;
`;

export const CarouselItemAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CarouselItem = styled.div`
  width: 300px;
  height: 350px;
  margin-top: 0px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  transition: all 0.3s ease-in-out !important;
  margin-bottom: 0px;
  opacity: 0;
  animation: ${CarouselItemAnim} 0.5s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;

export const WorkHeadingAnim = keyframes`
  0%{
    opacity: 0;
    margin-top: 50px;
  }
  100%{
    opacity: 1;
    margin-top: 20px;
  }
`;

export const WorkHeading = styled.div`
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  margin-left: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  opacity: 0;
  margin-top: 50px;
  animation: ${WorkHeadingAnim} 0.5s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;

export const AppLogoContainerAnim = keyframes`
  0% {
    top: 5px;
    left: 5px;
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    top: 5px;
    left: 5px;
    transform: scale(0.6);
    opacity: 1;
  }
`;

export const AppLogoContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 5px;
  opacity: 0;
  transform: scale(0.6);
  z-index: 2;
  animation: ${AppLogoContainerAnim} 0.8s ease-in-out;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
`;

export const AppLogoAnim = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const AppLogo = styled.div`
  width: 70px;
  height: 70px;
  background-image: ${props => props.selectedPage === 2 ? `url(${WorkLogo})` : `url(${Logo})`};
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  animation: ${AppLogoAnim} 1.6s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
  transition: all 1.6s ease-in-out;
`;


export const AppBgRight = styled.div`
  background-color: #000000;
  height: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
`;

export const AppMenuAnim = keyframes`
  0% {
    right: -50px;
    opacity: 0;
  }
  80% {
    right: 5px;
    opacity: 1;
  }
  100% {
    right: 0px;
    opacity: 1;
  }
`;

export const AppMenuWrapper = styled.div`
  width: 50px;
  position: fixed;
  box-sizing: border-box;
  right: -50px;
  top: 0;
  bottom: 0;
  padding-top: 45px;
  padding-bottom: 100px;
  height: 100vh;
  display: flex;
  z-index: 2;
  flex-direction: column;
  justify-content: space-between;
  animation: ${AppMenuAnim} 0.5s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.8s;
`;

export const AppMenuItem = styled.div`
  color: ${props => props.shouldRotate ? `#eaeaea` : `#ffffff`};;
  font-weight: 400;
  transform: ${props => props.shouldRotate ? `rotate(0deg)` : `rotate(-90deg)`};
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;
`;

export const AppWelcomeAnim = keyframes`
  0% {
    margin-top: 200px;
  }
  100% {
    margin-top: 100px;
  }
`;

export const AppWelcomeText = styled.div`
  display: flex;
  opacity: 1;
  justify-content: center;
  width: 100%;
  padding-left: 30px;
  margin-bottom: 20px;
  margin-top: 200px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  animation: ${AppWelcomeAnim} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
`;

export const AppMainHeading = styled.div`
  color :#f2f2f2;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const AppSubHeading = styled.div`
  color :#f2f2f2;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const InitialAnimBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CameraWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${Camera});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const FlashAnim = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  80%{
    transform: scale(1000);
    opacity: 0.8;
  }
  95%{
    transform: scale(1000);
    opacity: 0;
  }
  100% {
    transform: scale(1000);
    opacity: 0;
  }
`

const animation = props =>
  css`
    ${FlashAnim} 0.8s ease-in-out;
  `

export const CameraFlash = styled.div`
  width: 10px;
  height: 4px;
  background-color: #ffffff;
  position: absolute;
  opacity: 0;
  top: 18px;
  left: 45px;
  animation: ${props => props.showFlash ? animation : ''};
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
`;

export const WorkSlider = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
`;

export const IndoorFirst = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Indoor1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const IndoorSecond = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Indoor2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  `;

export const IndoorThird = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Indoor3});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const OutdoorFirst = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Outdoor1});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const OutdoorSecond = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Outdoor2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  `;

export const OutdoorThird = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Outdoor3});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const ClientFirst = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Client1});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const ClientSecond = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Client2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  `;

export const ClientThird = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Client3});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const AppHomeImageContainer = styled.div`
  overflow-y: auto;
  height: 70vh;
  width: 100%;
`;

export const AppHomeImages = styled.img`
  width: 100%;
  margin-top: 30px;
`;

export const AppHomeImagesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;