import React from 'react';

const Header = () => {
  return (
 <div className="Calendar">
   {/* <div className="Information">
   <div className="Date">
        <h2>May 1 </h2>
      </div>
        <div className="Text"><p>Intro to Data Analytics</p></div>
        <div className="Text"><p>Customer Journey Mapping</p></div>
        <div className="Text"><p>Project Management Workshop</p></div>
        <div className="Text"><p>How to Create a Supporting Mindset WHile Job Seeking</p></div>
      </div> */}

      <div className="Information">
      <div className="Date">
        <h4>May 8 </h4>
      </div>
        <div className="Text colored"><p>Intro to google Analytics</p></div>
        <div className="Text"><p><a href="https://generalassemb.ly/education/data-visualization-and-intro-to-tableau/miami/111480" target="_blank">Data Visualization & Intro to Tableau</a></p></div>
        <div className="Text"><p>Intro to UX Design</p></div>
        <div className="Text"><p>Balancing Strategic Job Seeking With Life During COVID</p></div>
      </div>

      <div className="Information">
      <div className="Date">
        <h4>May 15 </h4>
      </div>
        <div className="Text"><p>SEO Training for Begginers</p></div>
        <div className="Text"><p>User Research Methods</p></div>
        <div className="Text"><p>Strengthen Your Community Through Leadership</p></div>
      </div>

      <div className="Information">
      <div className="Date">
        <h4>May 22 </h4>
      </div>
        <div className="Text"><p>Excel for Begginers</p></div>
        <div className="Text"><p>Intro to Coding: HTML & CSS</p></div>
        <div className="Text"><p>Intro to Agile & Scrum</p></div>
        <div className="Text"><p>Job Search Smarter With Boolean Logic</p></div>
      </div>

<div className="Information">
<div className="Date">
        <h4>May 29 </h4>
      </div>
        <div className="Text"><p>Project Management Workshop</p></div>
        <div className="Text"><p>Customer Journey Mapping</p></div>
        <div className="Text"><p>Intro to Data Analytics</p></div>
        <div className="Text"><p>Digital Interviews: Presenting Your Best Self Online</p></div>
      </div>
    </div>
  )
}

export default Header;