import React from 'react'
import styled from 'styled-components'
import './Header.css'
import {BrowserRouter as Router ,Route ,Switch, NavLink} from 'react-router-dom'

const Headr = styled.div
`
margin:100px;
display:flex;
justify-content: space-around;
background-color: white;
`
const Lien=styled.a`
text-decoration: none;
color:#2e2a2a
`

const Logo=styled.div
`
margin-top:-63px;
text-align:left;
font-family:'Times New Roman', Times, serif
`
function Header() {
    return (
       
              <div>
         <Headr>
         <Logo>
        <NavLink to= "/PageOne">
            <h1>MOBASTI Samah</h1>
            <span>Full stack js Developer</span>
        </NavLink>
        </Logo>
    
        <nav class="menu-bar">
         <ul>
              <li class="HOME"><NavLink to='/PageOne'> Home</NavLink></li>
              <li><NavLink to='/Pagetwo'> Resume</NavLink></li>
                {/* <li><Lien href="#PROJECTS">PROJECTS</Lien></li>
                <li><Lien href="#CONTACT">CONTACT</Lien></li> */}

    
        </ul>
    
        </nav>
        </Headr>
        </div>
    )
}

export default Header
