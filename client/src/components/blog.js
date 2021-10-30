import axios from 'axios';
import { useState, useEffect } from 'react';
import borpa from '../assets/621.gif'

export default function Blog(){
    const val = 2
   
    const [blogs, getBlogData] = useState([])
   
    useEffect(()=>{
        getBlog()
    },[])
    
    const getBlog = async () => {
    const res = await axios.get(`http://localhost:3001/blog/blogs/${val}`)
    const data = res.data
    console.log(data)
    getBlogData(data)
    // const array = Array.from(data)
    // console.log(array)
    // return <h1>dfafasdf</h1>
    }
   
console.log(blogs)
// const date = blogs.datetime.toLocaleString();
// console.log(date)
    return(<div className='center'>
        <h2>{blogs.title}</h2>
        <h3>{blogs.datetime}</h3>
        <p>{blogs.body}</p>
        <img src={borpa} />
        </div>
    )
}