

import Link from 'next/link'
import { useRef } from 'react'

const Header = () => {

        const hamburger = useRef(null)

        return (

                <>
                
                        <nav id="navbar" className="">
                                <div className="nav-wrapper">
                                        
                                        {/*  Navbar Logo */}
                                        <div className="logo">
                                        {/*  Logo Placeholder for Inlustration */}
                                        <Link href="/">
                                                <a><i className="fa fa-angellist"></i> SAMMEEKOOL </a>
                                        
                                        </Link>
                                        </div>
                                
                                        {/*  Navbar Links */}
                                        <ul id="menu">

                                                <li>
                                                        <Link href="/">
                                                                <a>Home</a>
                                                        </Link>
                                                </li>

                                                <li><a href="#services">Music</a></li>
                                                <li><a href="#about">Videos</a></li>
                                                <li>
                                                        <Link href="/contact">
                                                                <a>Contact</a>
                                                        </Link>
                                                </li>
                                        </ul>
                                </div>
                        </nav>
                
                
                        {/*  Menu Icon */}
                        <div className="menuIcon">
                                <span className="icon icon-bars"></span>
                                <span className="icon icon-bars overlay"></span>
                        </div>
                        
                        
                        <div className="overlay-menu">
                                <ul id="menu">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                                </ul>
                        </div>

                        // all navigation sytling
                        <style jsx>
                        {`
                        
                        * {
                        border: 0;
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                      }
                      
                      body {
                        background: rgb(250, 250, 250) url(http://lorempixel.com/1920/1080/nature/);
                        font-family: Lato, Helvetica, Arial, sans-serif;
                      }
                      
                      a {
                        color: inherit;
                        font-family: inherit;
                        font-size: inherit;
                        text-decoration: none;
                      }
                      
                      
                      /*======================================================
                                                Navbar
                        ======================================================*/
                      #navbar {
                        background: white;
                        color: rgb(13, 26, 38);
                        position: fixed;
                        top: 0;
                        height: 60px;
                        line-height: 60px;
                        width: 100vw;
                        z-index: 10;
                      }
                      
                      .nav-wrapper {
                        margin: auto;
                        text-align: center;
                        width: 70%;
                      } @media(max-width: 768px) {
                          .nav-wrapper {
                            width: 90%;
                          }
                        } @media(max-width: 638px) {
                            .nav-wrapper {
                              width: 100%;
                            }
                          } 
                      
                      
                      .logo {
                        float: left;
                        margin-left: 28px;
                        font-size: 1.5em;
                        height: 60px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                      } @media(max-width: 768px) {
                          .logo {
                      /*       margin-left: 5px; */
                          }
                        }
                      
                      #navbar ul {
                        display: inline-block;
                        float: right;
                        list-style: none;
                        /* margin-right: 14px; */
                        margin-top: -2px;
                        text-align: right;
                        transition: transform 0.5s ease-out;
                        -webkit-transition: transform 0.5s ease-out;
                      } @media(max-width: 640px) {
                          #navbar ul {
                            display: none;
                          }
                        } @media(orientation: landscape) {
                            #navbar ul {
                              display: inline-block;
                            }
                          }
                      
                      #navbar li {
                        display: inline-block;
                      }
                      
                      #navbar li a {
                        color: rgb(13, 26, 38);
                        display: block;
                        font-size: 0.7em;
                        height: 50px;
                        letter-spacing: 1px;
                        margin: 0 20px;
                        padding: 0 4px;
                        position: relative;
                        text-decoration: none;
                        text-transform: uppercase;
                        transition: all 0.5s ease;
                        -webkit-transition: all 0.5s ease;
                      }
                      
                      #navbar li a:hover {
                        /* border-bottom: 1px solid rgb(28, 121, 184); */
                        color: rgb(28, 121, 184);
                        transition: all 1s ease;
                        -webkit-transition: all 1s ease;
                      }
                      
                      /* Animated Bottom Line */
                      #navbar li a:before, #navbar li a:after {
                        content: '';
                        position: absolute;
                        width: 0%;
                        height: 1px;
                        bottom: -1px;
                        background: rgb(13, 26, 38);
                      }
                      
                      #navbar li a:before {
                        left: 0;
                        transition: 0.5s;
                      }
                      
                      #navbar li a:after {
                        background: rgb(13, 26, 38);
                        right: 0;
                        /* transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1); */
                      }
                      
                      #navbar li a:hover:before {
                        background: rgb(13, 26, 38);
                        width: 100%;
                        transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
                      }
                      
                      #navbar li a:hover:after {
                        background: transparent;
                        width: 100%;
                        /* transition: 0s; */
                      }
                      
                      
                      
                      /*======================================================
                                          Mobile Menu Menu Icon
                        ======================================================*/
                      @media(max-width: 640px) {
                        .menuIcon {
                          cursor: pointer;
                          display: block;
                          position: fixed;
                          right: 15px;
                          top: 20px;
                          height: 23px;
                          width: 27px;
                          z-index: 12;
                        }
                      
                        /* Icon Bars */
                        .icon-bars {
                          background: rgb(13, 26, 38);
                          position: absolute;
                          left: 1px;
                          top: 45%;
                          height: 2px;
                          width: 20px;
                          -webkit-transition: 0.4s;
                          transition: 0.4s;
                        } 
                      
                        .icon-bars::before {
                          background: rgb(13, 26, 38);
                          content: '';
                          position: absolute;
                          left: 0;
                          top: -8px;
                          height: 2px;
                          width: 20px;
                      /*     -webkit-transition: top 0.2s ease 0.3s;
                          transition: top 0.2s ease 0.3s; */
                          -webkit-transition: 0.3s width 0.4s;
                          transition: 0.3s width 0.4s;
                        }
                      
                        .icon-bars::after {
                          margin-top: 0px;
                          background: rgb(13, 26, 38);
                          content: '';
                          position: absolute;
                          left: 0;
                          bottom: -8px;
                          height: 2px;
                          width: 20px;
                      /*     -webkit-transition: top 0.2s ease 0.3s;
                          transition: top 0.2s ease 0.3s; */
                          -webkit-transition: 0.3s width 0.4s;
                          transition: 0.3s width 0.4s;
                        }
                      
                        /* Bars Shadows */
                        .icon-bars.overlay {
                          background: rgb(97, 114, 129);
                          background: rgb(183, 199, 211);
                          width: 20px;
                          animation: middleBar 3s infinite 0.5s;
                          -webkit-animation: middleBar 3s infinite 0.5s;
                        } @keyframes middleBar {
                            0% {width: 0px}
                            50% {width: 20px}
                            100% {width: 0px}
                          } @-webkit-keyframes middleBar {
                              0% {width: 0px}
                              50% {width: 20px}
                              100% {width: 0px}
                            }
                      
                        .icon-bars.overlay::before {
                          background: rgb(97, 114, 129);
                          background: rgb(183, 199, 211);
                          width: 10px;
                          animation: topBar 3s infinite 0.2s;
                          -webkit-animation: topBar 3s infinite 0s;
                        } @keyframes topBar {
                            0% {width: 0px}
                            50% {width: 10px}
                            100% {width: 0px}
                          } @-webkit-keyframes topBar {
                              0% {width: 0px}
                              50% {width: 10px}
                              100% {width: 0px}
                            }
                      
                        .icon-bars.overlay::after {
                          background: rgb(97, 114, 129);
                          background: rgb(183, 199, 211);
                          width: 15px;
                          animation: bottomBar 3s infinite 1s;
                          -webkit-animation: bottomBar 3s infinite 1s;
                        } @keyframes bottomBar {
                            0% {width: 0px}
                            50% {width: 15px}
                            100% {width: 0px}
                          } @-webkit-keyframes bottomBar {
                              0% {width: 0px}
                              50% {width: 15px}
                              100% {width: 0px}
                            }
                      
                      
                        /* Toggle Menu Icon */
                        .menuIcon.toggle .icon-bars {
                          top: 5px;
                          transform: translate3d(0, 5px, 0) rotate(135deg);
                          transition-delay: 0.1s;
                          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                        }
                      
                        .menuIcon.toggle .icon-bars::before {
                          top: 0;
                          transition-delay: 0.1s;
                          opacity: 0;
                        }
                      
                        .menuIcon.toggle .icon-bars::after {
                          top: 10px;
                          transform: translate3d(0, -10px, 0) rotate(-270deg);
                          transition-delay: 0.1s;
                          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                        }
                      
                        .menuIcon.toggle .icon-bars.overlay {
                          width: 20px;
                          opacity: 0;
                          -webkit-transition: all 0s ease 0s;
                          transition: all 0s ease 0s;
                        }
                      }
                      
                      
                      /*======================================================
                                         Responsive Mobile Menu 
                        ======================================================*/
                      .overlay-menu {
                        background: lightblue;
                        color: rgb(13, 26, 38);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        top: 0;
                        right: 0;
                        padding-right: 15px;
                        transform: translateX(-100%);
                        width: 100vw;
                        height: 100vh;
                        -webkit-transition: transform 0.2s ease-out;
                        transition: transform 0.2s ease-out;
                      }
                      
                      .overlay-menu ul, .overlay-menu li {
                        display: block;
                        position: relative;
                      }
                      
                      .overlay-menu li a {
                        display: block;
                        font-size: 1.8em;
                        letter-spacing: 4px;
                      /*   opacity: 0; */
                        padding: 10px 0;
                        text-align: right;
                        text-transform: uppercase;
                        -webkit-transition: color 0.3s ease;
                        transition: color 0.3s ease;
                      /*   -webkit-transition: 0.2s opacity 0.2s ease-out;
                        transition: 0.2s opacity 0.2s ease-out; */
                      }
                      
                      .overlay-menu li a:hover,
                      .overlay-menu li a:active {
                        color: rgb(28, 121, 184);
                        -webkit-transition: color 0.3s ease;
                        transition: color 0.3s ease;
                      }
                        `}
                        </style>
                
                        
                </>

                
        )

}


const Footer = () => {

        return (

                <>
                <footer className="site-footer">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Sammeekool, developed by
                     <a href="#"> Olabisi</a>.
                        </p>
                      </div>
            
                      <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                          <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                          <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                        </ul>
                      </div>
                    </div>
                  </div>
            </footer>

                        <style jsx>
                        {`
                        .site-footer
                        {
                          background-color: black;
                          position: relative;
                          padding:20px 10px;
                          font-size:13px;
                          line-height:24px;
                          color:#737373;
                          z-index: 2000;
                        }
                        .site-footer hr
                        {
                          border-top-color:#bbb;
                          opacity:0.5
                        }
                        .site-footer hr.small
                        {
                          margin:20px 0
                        }
                        .site-footer h6
                        {
                          color:#fff;
                          font-size:11px;
                          text-transform:uppercase;
                          margin-top:5px;
                          letter-spacing:2px
                        }
                        .site-footer a
                        {
                          color:#737373;
                        }
                        .site-footer a:hover
                        {
                          color:#3366cc;
                          text-decoration:none;
                        }
                        .footer-links
                        {
                          padding-left:0;
                          list-style:none
                        }
                        .footer-links li
                        {
                          display:block
                        }
                        .footer-links a
                        {
                          color:#737373
                        }
                        .footer-links a:active,.footer-links a:focus,.footer-links a:hover
                        {
                          color:#3366cc;
                          text-decoration:none;
                        }
                        .footer-links.inline li
                        {
                          display:inline-block
                        }
                        .site-footer .social-icons
                        {
                          text-align:right
                        }
                        .site-footer .social-icons a
                        {
                          width:40px;
                          height:40px;
                          line-height:40px;
                          margin-left:6px;
                          margin-right:0;
                          border-radius:100%;
                          background-color:#33353d
                        }
                        .copyright-text
                        {
                          margin:0
                        }
                        @media (max-width:991px)
                        {
                          .site-footer [className^=col-]
                          {
                            margin-bottom:30px
                          }
                        }
                        @media (max-width:767px)
                        {
                          .site-footer
                          {
                            padding-bottom:0
                          }
                          .site-footer .copyright-text,.site-footer .social-icons
                          {
                            text-align:center
                          }
                        }
                        .social-icons
                        {
                          padding-left:0;
                          margin-bottom:0;
                          list-style:none
                        }
                        .social-icons li
                        {
                          display:inline-block;
                          margin-bottom:4px
                        }
                        .social-icons li.title
                        {
                          margin-right:15px;
                          text-transform:uppercase;
                          color:#96a2b2;
                          font-weight:700;
                          font-size:11px
                        }
                        .social-icons a{
                          background-color:#eceeef;
                          color:#818a91;
                          font-size:14px;
                          display:inline-block;
                          line-height:44px;
                          width:44px;
                          height:44px;
                          text-align:center;
                          margin-right:8px;
                          border-radius:100%;
                          -webkit-transition:all .2s linear;
                          -o-transition:all .2s linear;
                          transition:all .2s linear
                        }
                        .social-icons a:active,.social-icons a:focus,.social-icons a:hover
                        {
                          color:#fff;
                          background-color:#29aafe
                        }
                        .social-icons.size-sm a
                        {
                          line-height:34px;
                          height:34px;
                          width:34px;
                          font-size:12px
                        }
                        .social-icons a.facebook:hover
                        {
                          background-color:#3b5998
                        }
                        .social-icons a.twitter:hover
                        {
                          background-color:#00aced
                        }
                        .social-icons a.linkedin:hover
                        {
                          background-color:#007bb6
                        }
                        .social-icons a.dribbble:hover
                        {
                          background-color:#ea4c89
                        }
                        @media (max-width:767px)
                        {
                          .social-icons li.title
                          {
                            display:block;
                            margin-right:0;
                            font-weight:600
                          }
                        }
                        `}
                        </style>
                </>
        )

}




export { Header, Footer }


// <div className="container">
// <div className="row">
//   <div className="col-sm-12 col-md-6">
//     <h6>About</h6>
//     <p className="text-justify"><i>CODE WANTS TO BE SIMPLE </i>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//     </p>
//   </div>

//   <div className="col-xs-6 col-md-3">
//     <h6>Categories</h6>
//     <ul className="footer-links">
//       <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
//       <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
//       <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
//       <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
//       <li><a href="http://scanfcode.com/category/android/">Android</a></li>
//       <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
//     </ul>
//   </div>

//   <div className="col-xs-6 col-md-3">
//     <h6>Quick Links</h6>
//     <ul className="footer-links">
//       <li><a href="http://scanfcode.com/about/">About Us</a></li>
//       <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
//       <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
//       <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
//       <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
//     </ul>
//   </div>
// </div>
// <hr />
// </div>