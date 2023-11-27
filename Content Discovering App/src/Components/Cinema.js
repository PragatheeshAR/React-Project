import { Ticket } from 'lucide-react';
import React from 'react';
import '../Assessts/Cinema.css';
function Cinema() {
  return (
    <>    
    <div>   
     <div className='cine_nav'>
            <Ticket className='cine_tic'/>
            <h1 className='cine_h1'>Explore</h1>
            <button className='cine_navbutton'><b>Next</b></button>
        </div>
        <div className='cine_main'>
            <div className='cine_mainleft'>
                <div className='cine_mainleftimage'>
                    
                </div>
            </div>
            <div className='cine_mainright'>
                <p className='cine_mainrightheading'>KNOW YOUR CINE INDUSTRY!!!</p>
                <p className='cine_mainrightcontent'>
                <h2>After 21 years, Rajinikanth and Kamal Haasan shoot side by side!</h2><br></br>
                Rajinikanth and Kamal Haasan ended up catching up with each other at work on Thursday, and pics of the two veterans have gone viral. The two actors are shooting for their respective films — #Thalaivar170 and Indian 2 — in Chennai, and interestingly, both shoots are now taking place in the same studio!<br></br><br></br>
                <h2>As Simbu's 'Maanaadu' turns 2, Venkat Prabhu shares a heartfelt note</h2><br></br>
                The Tamil film 'Maanaadu' starring Simbu and SJ Suryah in lead roles was released in theatres in November, 2021. The movie has completed two years since its release, and on the second anniversary, movie director Venkat Prabhu took to social media to share a heartfelt note about the movie. Sharing a special poster, Venkat Prabhu's tweet read, "What an experience making this movie!!! Can never forget this for life!! Thanks to the team and my cast and crew!! Everyone involved in the release!! And spl thanks to cinema fans and #strbloods #maanaadu #2YearsOfMaanaadu #NewAgeCinema #aVPpolitics."
                <br></br><br></br>
                <h2>Samantha praises 'Kaathal The Core'; calls it movie of the year!</h2><br></br>
                The recently released Malayalam film 'Kaathal The Core' has received a lot of positive reviews and the movie has been critically acclaimed. Directed by Joe Baby, the movie was released in theatres on November 23 and it is making a huge hit not only in the Malayalam but also in other regional film industries. Starring Mammooty and Jyothika in lead roles, the film portrays how a gay man struggles to reclaim himself.
Taking to Instagram, actress Samantha praised the movie calling it the film of the year. Sharing it on her Instagram story, she said, "Movie of the year. Do yourself a favour and watch this beautiful yet powerful gem of a film. #KaathalTheCore. @Mammooty sir you are my hero. I will not be able to get over this performance for a long long time. @Jyotika Love you. @Jeobabymusic Legendary."
    <br></br>
                </p>
            </div>

        </div>
    </div>
    </>
  )
}

export default Cinema;