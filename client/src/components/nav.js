
import {useState, useEffect} from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import axios from 'axios'
export default function Navigation() {
    const styles = {
        color: '#17252A',
        fontSize: 32
    }
    const right = {
        color: '#17252A',
        float: 'right',
        fontSize: 12,
        
    }
    const rtl ={
        color: '#17252A',
        direction: 'rtl'
    }

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(()=>{
        getQuote()
    },[])
    const getQuote = async () => {
        const req = await axios.get('https://api.quotable.io/random?maxLength=60')
        const author = req.data.author;
        const quote = req.data.content
        setAuthor(author)
        setQuote(quote)
    }
    return (
        <Navbar fixed="top" className='nav' expand="lg">
        <Container>
          <Navbar.Brand style={styles} href="/">LANCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/blog">BLOG</Nav.Link>
              <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="/kit">KIT</Nav.Link>
            </Nav>
            <Navbar.Brand style={right}>{quote}
            <br/>
           <small style={rtl}>- {author}</small> </Navbar.Brand>
          </Navbar.Collapse>
          
        </Container>
        <p></p>
      </Navbar>
    )
}