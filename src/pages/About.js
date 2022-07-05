import React from 'react'
import styled from 'styled-components'

const About = () => {
  const Bio = styled.h1`
    font-size: 1.8em;
    margin: auto;
    margin-top: 300px;
    width: 70%;
    text-align: justify;
  `
  return (
    <div>
      <Bio>
        A proactive and organized individual with an Associate degree in
        Computer Software and a background in web applications. As an
        enthusiastic and creative technologist with hands-on skills in a wide
        range of software, tools, and programming languages, positioned to
        leverage my abilities and qualifications. <br />
        <br />
        Over the past 4 years, as a Developer, I have designed, developed, and
        launched customized, highly responsive websites and e-commerce solutions
        using advanced technologies. In addition, I have consistently met client
        expectations and project milestones while working effectively in
        deadline-driven environments.
        <br />
        <br />
        <br />
        <br /> Please consider the following highlights : <br />
        <br />
        <br />
        - Design and develop webpages using jQuery.
        <br />
        <br />
        - JavaScript, HTML5, and CSS/Bootstrap.
        <br />
        <br />
        - Built components in ReactJS using asynchronous methods.
        <br />
        <br />
        - Create e-commerce sites for small business owners.
        <br />
      </Bio>
    </div>
  )
}

export default About
