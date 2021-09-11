import React from 'react'
import styled from 'styled-components'
import './Header.css'


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
        <Lien href="#">
            <h1>MOBASTI Samah</h1>
            <span>Full stack js Developer</span>
        </Lien>
        </Logo>
    
        <nav class="menu-bar">
         <ul>
              <li class="HOME"><Lien href="#HOME"> RESUME</Lien></li>
              <li><Lien href="#RESUME"> RESUME</Lien></li>
                <li><Lien href="#PROJECTS">PROJECTS</Lien></li>
                <li><Lien href="#CONTACT">CONTACT</Lien></li>

    
        </ul>
    
        </nav>
        </Headr>
        </div>
    )
}

export default Header
