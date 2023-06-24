import React, { useState } from 'react';
import './App.css';
import Switch from "react-switch";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleModeChange = (checked) => {
    setIsDarkMode(checked);
  };

  return (
  <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
  <div className={isDarkMode ? 'content-dark': 'content-light'}>
    <div className="switch-container">
      <Switch onChange={handleModeChange} checked={isDarkMode} onColor="#ffffff" offColor='#000000' handleDiameter={30} uncheckedIcon={false} checkedIcon={false} onHandleColor="#000000"/>
    </div>
    <h1>Imane BENRAZZOUK</h1>
    <p>Software Engineering Student | UI/UX & Web Design | <br></br>Data Analysis | AI & ML Enthusiast</p>
    <center><div class={isDarkMode? "separator-dark":"separator-light"}></div></center>
    <div className="links">
      <a class={isDarkMode? "a-dark":"a-light"} href="https://www.linkedin.com/in/imane-benrazzouk/"> <img src={isDarkMode ? "./linkedin-4.png":"./linkedin-3.png"} alt="LinkedIn icon"/> </a>
      <a class={isDarkMode? "a-dark":"a-light"} href="https://github.com/yurus0"><img src={isDarkMode ? "./github-2.png":"./github.png"} alt="Github icon"/> </a>
      <a class={isDarkMode? "a-dark":"a-light"} href="https://mail.google.com/mail/?view=cm&fs=1&to=imanebenrazzouk0203@gmail.com"><img src={isDarkMode ? "./mail.png":"./mail-2.png"} alt="Mail icon"/></a>
    </div>
    <div class="description">
      <p>Hey there! I'm Imane, a versatile software engineering student with expertise in UI/UX design, web development, data analysis, and AI/ML technologies.
      I am passionate about creating exceptional digital experiences that leave a lasting impact.<br></br> <br></br>Let's collaborate and bring your ideas to life! Contact me today to discuss your project and let's create memorable digital experiences together.<br></br>
      <br></br>Ready to embark on an extraordinary journey? Let's connect and make your ideas shine!</p>
    </div>
    <div class="contact-btn">
      <a href="https://www.linkedin.com/in/imane-benrazzouk/"><button class={isDarkMode? "button-dark":"button-light"}> <img src={isDarkMode?"./paper-plane-2.png": "./paper-plane.png"} alt="contact icon" class="contact-icon"/>Contact me</button></a>
    </div>
  </div>
</div>
  );
}

export default App;
