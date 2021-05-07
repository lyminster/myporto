import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme"

import { TiSocialInstagram , TiSocialGithub } from 'react-icons/ti';
import {ImLinkedin2} from 'react-icons/im';
import { BiMoon , BiSun} from 'react-icons/bi'
import {BsFolderFill} from 'react-icons/bs';


function App() {

  const [theme, setTheme] = useState('light');
  const [workMenu, setWorkMenu] = useState('1');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const changeMenu = (val) => {
    setWorkMenu(val);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <div className="App">
      <div className="TopNav container">
        <div className="row">
          <div className="col-md-2 col-sm-12">
          Rommy Gautanto 
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="ContactNav d-none d-sm-flex" >
            <a href="mailto:rommygautanto@gmail.com">rommygautanto@gmail.com</a>
            /
            <a href="tel:+6282213259288">+62822 1325 9288</a>
            <a className="AHover"  href="https://www.instagram.com/rommy_gautanto/" target="_blank">
                  <div className="SosialMedia">
                  <ImLinkedin2 className="IconSosial"/>
                  </div>
                </a>
                <a className="AHover"  href="https://www.instagram.com/rommy_gautanto/" target="_blank">
                  <div className="SosialMedia">
                  <TiSocialInstagram className="IconSosial"/>
                  </div>
                </a>
                <a className="AHover"  href="https://github.com/lyminster" target="_blank">
                  <div className="SosialMedia">
                  <TiSocialGithub className="IconSosial"/>
                  </div>
                </a>
                <a className="AHover"  onClick={themeToggler}>
                  <div className="SosialMedia">
                  {theme === 'light' ? <BiMoon className="IconSosial"/> : <BiSun className="IconSosial"/>}
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5" style={{marginBottom:30}}>
            <img src="" alt="Profile Picture" />
          </div>
          <div className="col-lg-7 aboutme">
            <div className="Intro">
              <div className="intro1">Hi, my name</div>
              <div className="intro2">Rommy Gautanto</div>
              <div className="intro2">I build things for the web.</div>
            </div>
            <div className="DetailAboutMe">
              <div className="shortaboutme">
                Short About Me
              </div>
              <div>
                <p>
                  I'm a full stack developer, base on Jakarta, Indonesia<br/>
                  currently working with PT Access Mobile Indonesia, as a mobile developer. 
                  for the past 5 years, i've been developing on full service application, microservices, micro web apps, UI/UX and many more
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <ul>
                      <li>Angular</li>
                      <li>React</li>
                      <li>Node.Js</li>
                      <li>.Net Core</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-6">
                  <ul>
                      <li>Golang</li>
                      <li>Laravel</li>
                      <li>SQL</li>
                      <li>Express</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="downloadCV">
                Download CV
              </div>
              <div className="d-block d-md-none" style={{paddingTop:30}}>
            <a href="mailto:rommygautanto@gmail.com">rommygautanto@gmail.com</a><br/>
            <a href="tel:+6282213259288">+62822 1325 9288</a>
              <div style={{display:'flex', justifyContent:'center', paddingTop:20}}>
              <a className="AHover"  href="https://www.instagram.com/rommy_gautanto/" target="_blank">
                  <div className="SosialMedia">
                  <ImLinkedin2 className="IconSosial"/>
                  </div>
                </a>
                <a className="AHover"  href="https://www.instagram.com/rommy_gautanto/" target="_blank">
                  <div className="SosialMedia">
                  <TiSocialInstagram className="IconSosial"/>
                  </div>
                </a>
                <a className="AHover"  href="https://github.com/lyminster" target="_blank">
                  <div className="SosialMedia">
                  <TiSocialGithub className="IconSosial"/>
                  </div>
                </a>
                <a className="AHover"  onClick={themeToggler}>
                  <div className="SosialMedia">
                  {theme === 'light' ? <BiMoon className="IconSosial"/> : <BiSun className="IconSosial"/>}
                  </div>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="row WorkExp ">
          <div className="col-12 col-lg-12 JudulWork">Working Experience</div>
          <div className="col-12 col-lg-12 ">
            <div className="row bodyWork">
            <div className="col-lg-2" style={{padding:0}}>
              <div onClick={() => changeMenu("1")} className={workMenu === "1" ? 'activeBtn' : 'sideButton'}>PT AMI</div>
              <div onClick={() => changeMenu("2")} className={workMenu === "2" ? 'activeBtn' : 'sideButton'}>PT MAP</div>
            </div>
            {
              workMenu === "1" ? 
              <div className="isiWork col-lg-7">
                <div>Software Engineer <span className="boldText">@ PT Access Mobile Indonesia</span></div>
                <div className="DetailTime">Okt 2019 - Present</div>
                <div>
                  <ul>
                    <li>Write modern, performant, maintainable code for a diverse array of client and internal projects.</li>
                    <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</li>
                    <li>Developed and maintained code for in-house and client websites primarily using Angular Framework.</li>
                    <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</li>
                    <li>Developed highly interactive Mobile Application for Internal Project using Flutter.</li>
                    <li>Developed Mircoservices And deploy to AWS Lambda using Golang</li>
                  </ul>
                </div>
              </div> : ''
            }
            {
              workMenu === "2" ? 
              <div className="isiWork col-lg-7">
                <div>Software Engineer <span className="boldText">@ PT Mitra AdiPerkasa</span></div>
                <div className="DetailTime">Okt 2019 - Present</div>
                <div>
                  <ul>
                    <li>Develop Windows Application for internal usage using C# / ASP.Net Framework.</li>
                    <li>Create Reporting for each subcompany under MAP using SQL.</li>
                    <li>Maintain Database performance, by handling Queries and Indexing.</li>
                    <li>Create Workflow application for internal approval system by using Sharepoint and C# or dot net.</li>
                    <li>Handling and Fixing bugs on existing application.</li>
                    <li>Create application to handle transfer data from store to HQ.</li>
                  </ul>
                </div>
              </div> : ''
            }
            </div>
          </div>
        </div>
        <div className="row WorkExp2">
          <div className="col-lg-12 col-12 JudulWork">Noteworthy Projects</div>
          <div className="col-lg-12 col-12">
            <div className="row bodyWork">
              <div className="col-lg-3 borderFolder">
                  <BsFolderFill style={{ width : 50 , height: 50 }} />
                  <div style={{lineHeight: 2 , fontSize: 30 , fontWeight:600}}>Project Name</div>
                  <div style={{fontSize:14 , fontWeight:400 , marginBottom:20}}>Project details isi yang perlu di terangkan mengenai projek yang di kerjakan, apa saja yang di handle dan di selesaikan</div>
                  <div style={{display:'flex' , }}>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                  </div>
              </div>
              <div className="col-lg-3 borderFolder">
                  <BsFolderFill style={{ width : 50 , height: 50 }} />
                  <div style={{lineHeight: 2 , fontSize: 30 , fontWeight:600}}>Project Name</div>
                  <div style={{fontSize:14 , fontWeight:400 , marginBottom:20}}>Project details isi yang perlu di terangkan mengenai projek yang di kerjakan, apa saja yang di handle dan di selesaikan</div>
                  <div style={{display:'flex' , }}>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                  </div>
              </div>
              <div className="col-lg-3 borderFolder">
                  <BsFolderFill style={{ width : 50 , height: 50 }} />
                  <div style={{lineHeight: 2 , fontSize: 30 , fontWeight:600}}>Project Name</div>
                  <div style={{fontSize:14 , fontWeight:400 , marginBottom:20}}>Project details isi yang perlu di terangkan mengenai projek yang di kerjakan, apa saja yang di handle dan di selesaikan</div>
                  <div style={{display:'flex' , }}>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                  </div>
              </div>
              <div className="col-lg-3 borderFolder">
                  <BsFolderFill style={{ width : 50 , height: 50 }} />
                  <div style={{lineHeight: 2 , fontSize: 30 , fontWeight:600}}>Project Name</div>
                  <div style={{fontSize:14 , fontWeight:400 , marginBottom:20}}>Project details isi yang perlu di terangkan mengenai projek yang di kerjakan, apa saja yang di handle dan di selesaikan</div>
                  <div style={{display:'flex' , }}>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                  </div>
              </div>
              <div className="col-lg-3 borderFolder">
                  <BsFolderFill style={{ width : 50 , height: 50 }} />
                  <div style={{lineHeight: 2 , fontSize: 30 , fontWeight:600}}>Project Name</div>
                  <div style={{fontSize:14 , fontWeight:400 , marginBottom:20}}>Project details isi yang perlu di terangkan mengenai projek yang di kerjakan, apa saja yang di handle dan di selesaikan</div>
                  <div style={{display:'flex' , }}>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                    <div style={{paddingRight:10 , fontSize: 12 , fontWeight: 100}}>angular</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>Get In Touch</h1>
        <br/>
        <a className="footerA" href="mailto:rommygautanto@gmail.com">rommygautanto@gmail.com</a><br/>
        <a className="footerA" href="tel:+6282213259288">+62822 1325 9288</a>
        <div style={{display:'flex' , justifyContent:'center' , padding: "50px 0px 70px 0px"}}>
              <a className="AHover"  href="https://www.instagram.com/rommy_gautanto/" target="_blank">
                <div className="SosialMedia">
                <ImLinkedin2 className="IconSosial"/>
                </div>
              </a>
              <a className="AHover"  href="https://www.instagram.com/rommy_gautanto/" target="_blank">
                <div className="SosialMedia">
                <TiSocialInstagram className="IconSosial"/>
                </div>
              </a>
              <a className="AHover"  href="https://github.com/lyminster" target="_blank">
                <div className="SosialMedia">
                <TiSocialGithub className="IconSosial"/>
                </div>
              </a>
        </div>
        © 2021 Rommy Gautanto
      </div>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
