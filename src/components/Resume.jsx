import React from 'react';

function Resume() { return ( <> <style> {` @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');


Verify

Open In Editor
Run
Copy code
      .header{
        position: fixed;
        top:0;
        left: 0;
        width: 95%;
        padding: 20px 10px;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
      }

      .logo{
        font-size: 25px;
        color: #ffff;
        text-decoration: none;
        font-weight: 600;
        pointer-events: none;
      }

      .navbar a {
        font-size: 20px;
        color: #ffff;
        text-decoration: none;
        font-weight: 500;
        margin-left: 60px;
      }

      .navbar a.active,
      .navbar a:hover {
        background: linear-gradient(45deg, #f06, #3cf);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }

    //   body {
    //     margin: 0;
    //     padding: 0;
    //     font-family: 'Poppins', sans-serif;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     min-height: 100vh;
        
    //   }

      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .container .box {
        position: relative;
        width: 350px;
        padding: 40px;
        background: #ffff;
        box-shadow: 0 10px 20px #2196f3;
        border-radius: 4px;
        margin: 20px;
        box-sizing: border-box;
        overflow: hidden;
      }

      .container .box::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255,255,255,2);
        z-index: -1;
        pointer-events: none;
      }

      .container .box .icon {
        position: relative;
        width: 100px;
        height: 100px;
        color: #fff;
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: 50%;
        font-size: 40px;
        font-weight: 700;
        transition: 1s;
      }

      .container .box:nth-child(1) .icon {
        box-shadow: 0 0 0 0 #e91e63;
        background: #e91e63;
      }

      .container .box:nth-child(1):hover .icon {
        box-shadow: 0 0 0 400px #e91e63;
      }

      .container .box:nth-child(2) .icon {
        box-shadow: 0 0 0 0 #0c1022;
        background: #0c1022;
      }

      .container .box:nth-child(2):hover .icon {
        box-shadow: 0 0 0 400px #0c1022;
      }

      .container .box:nth-child(3) .icon {
        box-shadow: 0 0 0 0 #2196f3;
        background: #2196f3;
      }

      .container .box:nth-child(3):hover .icon {
        box-shadow: 0 0 0 400px #2196f3;
      }

      .container .box .content {
        position: relative;
        z-index: 1;
        transition: 0.5s;
      }

      .container .box:hover .content {
        color: #fff;
      }

      .container .box .content h3 {
        font-size: 20px;
        margin: 10px 0;
        padding: 0;
      }

      .container .box .content p {
        margin: 0;
        padding: 0;
      }

      button {
        display: inline-block;
        padding: 10px 20px;
        background: #fff;
        border-radius: 4px;
        text-decoration: none;
        color: #000;
        font-weight: 500;
        margin-top: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,.2);
      }
    `}
  </style>




  <section id='resume' className="py-24 bg-gray-50">
   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-14 text-center">
     <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
         Resume
       </span>
       <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
         Resume Objective
    </h2>
     <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
        To obtain a challenging role as a web and app developer, utilizing my skills in (react.js, react native, mongo db, node.js),
        to design and develop innovative digital solutions.
      
      </p>
     </div>



  

  <div className="container">
    <div className="box">
      <div className="icon">01</div>
      <div className="content">
        <h3>About Me</h3>
        <p>
          Organized and motivated candidate successful at managing multiple priorities with a positive attitude.
          Willingness to take on added responsibilities to meet team goals.
        </p>
        <button>Read More</button>
      </div>
    </div>

    <div className="box">
      <div className="icon">02</div>
      <div className="content">
        <h3>My Education</h3>
        <ul>
          <h4>Durban University of Technology</h4>
          <li>Diploma in ICT for Application Development</li>
          <h4>Mobile Laboratory Codetribe</h4>
          <li>Web Designer</li>
          <h4>Enaleni Secondary School</h4>
          <li>Grade: 12</li>
        </ul>
        <button>Read More</button>
      </div>
    </div>

    <div className="box">
      <div className="icon">03</div>
      <div className="content">
        <h3>Skills</h3>
        <ul>
          <li>Strong work ethic</li>
          <li>Commitment to excellence</li>
          <li>Teamwork and collaboration</li>
          <li>Ability to learn new technologies</li>
          <li>Creativity and innovation</li>
          <li>Strong communication</li>
        </ul>
        <button>Read More</button>
      </div>
    </div>
  </div>
  </div>
  </section>
</>
); }

export default Resume;