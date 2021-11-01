import cert from '../assets/cert.pdf'
// import borpa from '../assets/621.gif'
import resume from '../assets/resume.pdf'
export default function general(){
    return(
        <div className='content center'>
            
            <p>After working in the skilled trades for most of my adult life, I decided to make a switch to the world of Web Development.</p>
            <p>Below you'll find some of the tools I'm most familiar with, but the list is ever growing.</p>
            <ul>
                <li data-aos="fade-right">JavaScript</li>
                <li data-aos="fade-left">jQuery</li>
                <li data-aos="fade-right">HTML/CSS</li>
                <li data-aos="fade-left">MySQL</li>
                <li data-aos="fade-right">MongoDB</li>
                <li data-aos="fade-left">React</li>
            </ul>
            <p>Here's my<a href={cert} target = "_blank">OSU Certification.</a></p>
            <p>Here's a copy of<a href={resume} target = "_blank">my Resume.</a></p>
            {/* <img src={borpa}  alt='borpa'/> */}
        </div>
    )
}