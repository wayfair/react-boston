import React, { useState, useCallback } from "react"
import { Box, Text } from "../layout-components"
import { useSpring, animated } from "react-spring"
// import Modal from "./speaker-modal"
import Link from "../link"
import { Twitter, Github } from "../../images/icons/social"
import Img from "gatsby-image"
import useMedia from "../useMedia"
import styled from "@emotion/styled"

const StyledAnimatedBox = styled(animated.div)`
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(241, 89, 89, 1) 25%,
    rgba(130, 70, 149, 1) 55%,
    rgba(1, 46, 111, 1) 100%
  );
  border-bottom-right-radius: 50%;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`

const StyledImage = styled(Img)`
  object-fit: cover;
  display: block;
  height: 350px;
  width: 100%;
  border-bottom-right-radius: 50%;
  @media screen and (min-width: 52em) {
    mix-blend-mode: luminosity;
    isolation: isolate;
    &:hover,
    &:focus {
      mix-blend-mode: normal;
    }
  }
`

const DescriptionList = Box.withComponent("dl")

const Name = Text.withComponent("dt")

const CompanyName = Text.withComponent("dd")

const DescriptionDefinition = Box.withComponent("dd")

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]

// From https://codesandbox.io/embed/rj998k4vmm
const trans = (x, y, s) => {
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
}

const useModal = initial => {
  const [isOpen, setIsOpen] = useState(initial)

  return [isOpen, useCallback(() => setIsOpen(status => !status))]
}

export default function SpeakerCard({ name, company, twitter, github, img }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const [isOpen, setIsOpen] = useModal(false)

  const shouldDisableAnimation = useMedia({ query: "(prefers-reduced-motion)" })

  return (
    <>
      <StyledAnimatedBox
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={
          shouldDisableAnimation
            ? { animation: "none" }
            : { transform: props.xys.interpolate(trans) }
        }
      >
        <StyledImage fluid={img.src.childImageSharp.fluid} alt={name} />
      </StyledAnimatedBox>
      <DescriptionList mt="4">
        <Name fontWeight="bold">{name}</Name>
        <CompanyName color="mediumGrey">{company}</CompanyName>
        <Box display="flex" alignItems="center">
          {twitter && (
            <DescriptionDefinition mr="1">
              <Link href={`https://twitter.com/${twitter}`} openInNewTab>
                <Twitter
                  fill="#f15959"
                  width="28px"
                  height="28px"
                  title="Twitter"
                />
              </Link>
            </DescriptionDefinition>
          )}
          {github && (
            <dd>
              <Link href={`https://github.com/${github}`} openInNewTab>
                <Github
                  fill="#f15959"
                  width="20px"
                  height="20px"
                  title="Github"
                />
              </Link>
            </dd>
          )}
        </Box>
      </DescriptionList>

      {/* {isOpen && (
        <Modal
          onRequestClose={setIsOpen}
          isOpen={isOpen}
          name={name}
          src={src}
          company={company}
          twitter={twitter}
          github={github}
        />
      )} */}
    </>
  )
}
