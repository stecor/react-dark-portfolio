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
        leverage my abilities and qualifications. Over the past 4 years, as a
        Developer, I have designed, developed, and launched customized, highly
        responsive websites and e-commerce solutions using advanced
        technologies. In addition, I have consistently met client expectations
        and project milestones while working effectively in deadline-driven
        environments. Please consider the following highlights: Designed and
        developed webpages using jQuery, JavaScript, HTML5, and CSS/Bootstrap,
        Built components in ReactJS using asynchronous methods. Created
        e-commerce sites for small business owners.
      </Bio>
    </div>
  )
}

export default About
