import styled, { keyframes } from "styled-components";

export const clockwise = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const donutRotate = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-140deg);
  }
  100% {
    transform: rotate(0);
  }
`;

export const LoadContainer = styled.div`
  position: relative;
  margin: auto;
`;

export const Load = styled.div`
  opacity: 0.75;
  width: 14px;
  height: 14px;
  animation: ${clockwise} 250ms linear infinite;
  z-index: 1000;
  position: relative;
`;

export const LoadCut = styled.div`
  width: 7px;
  height: 14px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
`;

export const LoadShape = styled.div`
  width: 14px;
  height: 14px;
  border: 3px solid var(--blue);
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  animation: ${donutRotate} 500ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
  z-index: 1002;
`;
