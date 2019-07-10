import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const BUTTON_SIZE = 50

const Wrap = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  z-index: 99;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : "transparent"};
  transform: ${({ isActive }) => (isActive ? "rotate(45deg)" : null)};

  @media (min-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    border: 3px solid;
    top: calc(50% - ${BUTTON_SIZE}px / 2);
    left: calc(50% - ${BUTTON_SIZE}px / 2);
    border-radius: 50%;
  }
`

const Bar = styled.span`
  width: ${BUTTON_SIZE / 2}px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  display: block;
  margin: 8px auto;
  transition: 0.15s ease-out;

  ${({ isActive }) =>
    isActive &&
    `
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(1) {
      transform: translateY(12px);
    }
    &:nth-child(3) {
      transform: translateY(-10px) rotate(90deg);
    }
  `};
`

const Hamburger = ({ isActive, onClick }) => (
  <Wrap isActive={isActive} onClick={onClick}>
    <Bar isActive={isActive} />
    <Bar isActive={isActive} />
    <Bar isActive={isActive} />
  </Wrap>
)

Hamburger.propTypes = {
  isActive: PropTypes.bool,
  isSticking: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Hamburger
