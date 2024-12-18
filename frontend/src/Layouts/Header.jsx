import React from 'react'
import Fa from '../Components/Fa'
import Navbar from '../Components/Nav/Navbar'
import NavItem from '../Components/Nav/NavItem'
import NavLink from '../Components/Nav/NavLink'
import DropdownMenu from '../Components/Nav/DropdownMenu'
import DropdownItem from '../Components/Nav/DropdownItem'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header role="banner">
            <div class="top-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-9 social">
                            <a href="#"><Fa name="twitter" /></a>
                            <a href="#"><Fa name="facebook" /></a>
                            <a href="#"><Fa name="instagram" /></a>
                            <a href="#"><Fa name="youtube-play" /></a>
                            <a href="#"><Fa name="vimeo" /></a>
                            <a href="#"><Fa name="snapchat" /></a>
                        </div>
                        <div class="col-3 search-top">
                            <form action="#" class="search-top-form">
                                <Fa classes={['icon']} name="search"/>
                                <input type="text" id="s" placeholder="Type keyword to search..."/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container logo-wrap">
                <div class="row pt-5">
                    <div class="col-12 text-center">
                        <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
                        <h1 class="site-logo"><Link to="/">Balita</Link></h1>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarMenu">
                        <Navbar classes={['mx-auto']}>
                            <NavItem>
                                <NavLink active to="/">Home</NavLink>
                            </NavItem>

                            <NavItem dropdown>
                                <NavLink dropdown to="category" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</NavLink>
                                <DropdownMenu aria-labelledby="dropdown05">
                                    <DropdownItem to="category">Lifestyle</DropdownItem>
                                    <DropdownItem to="food">Food</DropdownItem>
                                    <DropdownItem to="adventure">Adventure</DropdownItem>
                                    <DropdownItem to="travel">Travel</DropdownItem>
                                    <DropdownItem to="business">Business</DropdownItem>
                                </DropdownMenu>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/bout">About</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                        </Navbar>
                    </div>
                </div>
            </nav>
        </header>
    )
}
