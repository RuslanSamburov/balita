import React, { useEffect, useState } from 'react'
import Fa from '../Components/Fa'
import Container from '../Components/Container'
import Row from '../Components/Row'
import Navbar from '../Components/Nav/Navbar'
import NavItem from '../Components/Nav/NavItem'
import NavLink from '../Components/Nav/NavLink'
import DropdownMenu from '../Components/Nav/DropdownMenu'
import { Link } from 'react-router-dom'
import DropdownToggle from '../Components/Nav/DropdownToggle'
import DropdownItem from '../Components/Nav/DropdownItem'

export default function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([
            {
                id: 1,
                name: 'Lifestyle',
                to: 'lifestyle',
            },
            {
                id: 2,
                name: 'Food',
                to: 'food',
            },
            {
                id: 3,
                name: 'Adventure',
                to: 'adventure',
            },
            {
                id: 4,
                name: 'Travel',
                to: 'travel',
            },
            {
                id: 5,
                name: 'Business',
                to: 'business',
            },
        ]);
    }, []);

    return (
        <header role="banner">
            <div className="top-bar">
                <Container>
                    <Row>
                        <div className="col-9 social">
                            <a href="#"><Fa name="twitter"/></a>
                            <a href="#"><Fa name="facebook" /></a>
                            <a href="#"><Fa name="instagram" /></a>
                            <a href="#"><Fa name="youtube-play" /></a>
                            <a href="#"><Fa name="vimeo" /></a>
                            <a href="#"><Fa name="snapchat" /></a>
                        </div>
                        <div className="col-3 search-top">
                            <form action="#" className="search-top-form">
                                <Fa className="icon" name="search"/>
                                <input type="text" id="s" placeholder="Type keyword to search..."/>
                            </form>
                        </div>
                    </Row>
                </Container>
            </div>

            <Container className="logo-wrap">
                <Row className="pt-5">
                    <div className="col-12 text-center">
                        <a className="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></a>
                        <h1 className="site-logo"><Link to="/">Balita</Link></h1>
                    </div>
                </Row>
            </Container>

            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Container>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <Navbar className="mx-auto">
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>

                            <NavItem dropdown>
                                <DropdownToggle id="dropdown05">Categories</DropdownToggle>
                                <DropdownMenu aria-labelledby="dropdown05">
                                    {categories.map(x => <DropdownItem key={x.id} to={x.to}>{x.name}</DropdownItem>)}
                                </DropdownMenu>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/about">About</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                        </Navbar>
                    </div>
                </Container>
            </nav>
        </header>
    )
}
