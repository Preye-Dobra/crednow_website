import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { useEffect } from 'react'
export default function Navbar(){
    useEffect(() => {
        const crednowNavbar = document.querySelector(".crednow-navbar");
        const MenuBars = document.querySelectorAll(".menu span");
        const crednowNavbarLinks = document.querySelectorAll(".crednow-navbar .links .main ul li a");
      
        window.addEventListener("scroll", function(){
          if(window.scrollY >= 100){
            crednowNavbar.style.backgroundColor = "#FFFFFF";
            crednowNavbarLinks.forEach((link, index) => {
              if (!link.classList.contains('active-link')) { 
                link.style.color = "#000";
              }
            });
            MenuBars.forEach((bar, index) => {
                bar.style.backgroundColor = "#000";
            });
          } else {
            crednowNavbar.style.backgroundColor = "transparent";
            crednowNavbarLinks.forEach(link => {
              link.style.color = "";
            });
            MenuBars.forEach((bar, index) => {
                bar.style.backgroundColor = "#FFF";
            });
          }
        });
      });
    return(
        <>
        <nav className={`xui-navbar crednow-navbar xui-container`} brand="true" layout="1" menu="2">
            <div className="brand xui-h-fluid-100">
                <NavLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-150' src={Logo} alt="" />
                </NavLink>
            </div>
            <div className="links" placed="center">
                <div className="main dark-color primary xui-bg-white">
                    <ul className='xui-grid-gap-2'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-90 xui-font-w-400 xui-text-white'} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-90 xui-font-w-400 xui-text-white'} to={"about"}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-90 xui-font-w-400 xui-text-white'} to={"services"}>Our Services</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-90 xui-font-w-400 xui-text-white'} to={"contact"}>Contact Us</NavLink>
                        </li>
                     
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    );
}