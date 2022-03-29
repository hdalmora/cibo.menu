import styled from 'styled-components';

const CircularLoadingContainer = styled.div`
  height: 20px;
  width: 20px;
  -webkit-animation: loader-1-1 4.8s linear infinite;
  animation: loader-1-1 4.8s linear infinite;
  background-color: transparent;
  border-radius: 32px;
  padding: 1px;

  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 20px;
    width: 20px;
    clip: rect(0, 20px, 20px, 10px);
    -webkit-animation: loader-1-2 1.2s linear infinite;
    animation: loader-1-2 1.2s linear infinite;

    &::after {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 20px;
      width: 20px;
      clip: rect(0, 20px, 20px, 10px);
      border: 3px solid ${(props) => props.theme.neutral_color_06};
      border-radius: 50%;
      -webkit-animation: loader-1-3 1.2s cubic-bezier(0.77, 0, 0.175, 1)
        infinite;
      animation: loader-1-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
  }

  @-webkit-keyframes loader-1-1 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes loader-1-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader-1-2 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(220deg);
    }
  }
  @keyframes loader-1-2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(220deg);
    }
  }

  @-webkit-keyframes loader-1-3 {
    0% {
      -webkit-transform: rotate(-140deg);
    }
    50% {
      -webkit-transform: rotate(-160deg);
    }
    100% {
      -webkit-transform: rotate(140deg);
    }
  }
  @keyframes loader-1-3 {
    0% {
      transform: rotate(-140deg);
    }
    50% {
      transform: rotate(-160deg);
    }
    100% {
      transform: rotate(140deg);
    }
  }
`;

export { CircularLoadingContainer };
