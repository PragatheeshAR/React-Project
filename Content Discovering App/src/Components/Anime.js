    import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Album } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assessts/Anime.css';
    function Anime() {
        useEffect(()=>{
            document.title = 'Anime';
        })
        function g1c1(){
            window.location.href="https://aniwatch.to/one-piece-100?ref=search"
        }
        function g1c2(){
            window.location.href="https://aniwatch.to/naruto-shippuden-355?ref=search"
        }
        function g1c3(){
            window.location.href="https://aniwatch.to/kaguya-sama-love-is-war-123"
        }
        function g2c2(){
            window.location.href='https://aniwatch.to/jujutsu-kaisen-tv-534'
        }
        function g2c3(){
            window.location.href='https://aniwatch.to/spy-x-family-17977'
        }
        function g3c1(){
            window.location.href="https://aniwatch.to/attack-on-titan-112?ref=search"
        }
        function g3c2(){
            window.location.href="https://aniwatch.to/demon-slayer-kimetsu-no-yaiba-47?ref=search"
        }
        function g3c3(){
            window.location.href="https://aniwatch.to/chainsaw-man-17406?ref=search"
        }
        function g4c1(){
            window.location.href="https://aniwatch.to/horimiya-15733"
        }
        function g4c2(){
            window.location.href="https://aniwatch.to/komi-cant-communicate-17906?ref=search"
        }
        function g4c3(){
            window.location.href="https://aniwatch.to/violet-evergarden-59?ref=search"
        }
        function g5c1(){
            window.location.href="https://aniwatch.to/your-name-10?ref=search"
        }
        function g5c2(){
            window.location.href="https://aniwatch.to/i-want-to-eat-your-pancreas-70?ref=search"
        }
        function g5c3(){
            window.location.href="https://aniwatch.to/weathering-with-you-111?ref=search"
        }
        return (
        <>
        <div className='anime_grid_body'>
        <div className='anime_grid_Navigation'>
            <div className='anime_grid_appname'><Album /><h2>Explore</h2></div>
            <div className='anime_grid_navlink'>
                <Link to='/Home' className='anime_link'><p>Home</p></Link>
                <Link to='/Anime' className='anime_link'><p className='anime_current'>Anime</p></Link>
                <Link to='/Music' className='anime_link'><p>Music</p></Link>
            </div>
            <div className='anime_grid_account'><AccountCircleIcon sx={{width:'50px',height:'50px'}}/></div>
        </div>
        <div className='anime_grid_recommend'>
            <h1>Recommended</h1>
            <p>by Explore</p>
        </div>


        <div className='anime_grid1'>
            <div></div>
            <div className='anime_grid1component1' onClick={g1c1}>
                <div className='anime_g1c1bgp1'>
                    
                </div>
                <div className='anime_g1c1bgm1'>
                    <h3>One Piece</h3>
                    <p>The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as the "One Piece" in order to become the next King of the Pirates.</p>
                </div>
            </div>
            <div className='anime_grid1component2' onClick={g1c2}>
                <div></div>
                <div className='anime_grid1component2'>
                    <div className='anime_g1c2bgp2'>
                        
                    </div>
                    <div className='anime_g1c2bgm2'>
                        <h3>Naruto</h3>
                        <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
                    </div>
                    
                </div>
            </div>
            <div className='anime_grid1component3' onClick={g1c3}>
                <div></div>
                <div className='anime_grid1component3'>
                    <div className='anime_g1c3bgp3'>
                        
                    </div>
                    <div className='anime_g1c3bgm3'>
                        <h3>Kaguya Sama Love is War</h3>
                        <p>Kaguya Shinomiya, a girl from a wealthy family, and Miyuki Shirogane, the top student of his school, seem to be perfect together. However, they struggle to reveal their true feelings for one another.</p>
                    </div>
                    
                </div>
            </div>
            <div></div>
        </div>


        <div className='anime_grid_recommend'>
            <h1>Trending</h1>
        </div>
        <div className='anime_grid2'>
            <div></div>
            <div className='anime_grid2component1' onClick={g1c1}>
                <div className='anime_g2c1bgp1'>
                    
                </div>
                <div className='anime_g2c1bgm1'>
                    <h3>One Piece</h3>
                    <p>The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as the "One Piece" in order to become the next King of the Pirates.</p>
                </div>
            </div>
            <div className='anime_grid2component2' onClick={g2c2}>
                <div></div>
                <div className='anime_grid2component2'>
                    <div className='anime_g2c2bgp2'>
                        
                    </div>
                    <div className='anime_g2c2bgm2'>
                        <h3>Jujutsu Kaisen</h3>
                        <p>The narrative centers on Yuji Itadori, a high school student blessed with remarkable physical prowess. Following his grandfather's passing, Yuji becomes entangled in the realm of Jujutsu Sorcery when he encounters a cursed object</p>
                    </div>
                    
                </div>
            </div>
            <div className='anime_grid2component3' onClick={g2c3}>
                <div></div>
                <div className='anime_grid2component3'>
                    <div className='anime_g2c3bgp3'>
                        
                    </div>
                    <div className='anime_g2c3bgm3'>
                        <h3>Spy × Family</h3>
                        <p>A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.</p>
                    </div>
                    
                </div>
            </div>
            <div></div>
        </div>



        <div className='anime_grid_recommend'>
            <h1>Action</h1>
        </div>
        <div className='anime_grid3'>
            <div></div>
            <div className='anime_grid3component1' onClick={g3c1}>
                <div className='anime_g3c1bgp1'>
                    
                </div>
                <div className='anime_g3c1bgm1'>
                    <h3>Attack On Titan</h3>
                    <p>It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans</p>
                </div>
            </div>
            <div className='anime_grid3component2' onClick={g3c2}>
                <div></div>
                <div className='anime_grid3component2'>
                    <div className='anime_g3c2bgp2'>
                        
                    </div>
                    <div className='anime_g3c2bgm2'>
                        <h3>Demon Slayer</h3>
                        <p>It follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, is turned into a demon.</p>
                    </div>
                    
                </div>
            </div>
            <div className='anime_grid3component3' onClick={g3c3}>
                <div></div>
                <div className='anime_grid3component3'>
                    <div className='anime_g3c3bgp3'>
                        
                    </div>
                    <div className='anime_g3c3bgm3'>
                        <h3>Chainsaw Man</h3>
                        <p>Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws.</p>
                    </div>
                    
                </div>
            </div>
            <div></div>
        </div>



        <div className='anime_grid_recommend'>
            <h1>Romance</h1>
        </div>
        <div className='anime_grid4'>
            <div></div>
            <div className='anime_grid4component1' onClick={g4c1}>
                <div className='anime_g4c1bgp1'>
                    
                </div>
                <div className='anime_g4c1bgm1'>
                    <h3>Horimiya</h3>
                    <p>Horimiya's narrative revolves around the unexpected connection between Kyouko Hori, a smart and popular high school student, and Izumi Miyamura, her seemingly gloomy and unassuming classmate.</p>
                </div>
            </div>
            <div className='anime_grid4component2' onClick={g4c2}>
                <div></div>
                <div className='anime_grid4component2'>
                    <div className='anime_g4c2bgp2'>
                        
                    </div>
                    <div className='anime_g4c2bgm2'>
                        <h3>Komi Can't Communicate</h3>
                        <p>An elite and aloof schoolgirl is in fact severely withdrawn and anxious about communicating with others. An ordinary schoolboy befriends her and helps her to open up and talk with people.</p>
                    </div>
                    
                </div>
            </div>
            <div className='anime_grid4component3' onClick={g4c3}>
                <div></div>
                <div className='anime_grid4component3'>
                    <div className='anime_g4c3bgp3'>
                        
                    </div>
                    <div className='anime_g4c3bgm3'>
                        <h3>Violet EverGarden</h3>
                        <p>In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people.</p>
                    </div>
                    
                </div>
            </div>
            <div></div>
        </div>


        <div className='anime_grid_recommend'>
            <h1>Movies</h1>
        </div>
        <div className='anime_grid5'>
            <div></div>
            <div className='anime_grid5component1' onClick={g5c1}>
                <div className='anime_g5c1bgp1'>
                    
                </div>
                <div className='anime_g5c1bgm1'>
                    <h3>Your Name</h3>
                    <p> Mitsuha Miyamizu is a high school student in the rural town of Itomori, Japan. Bored of the town, she wished to be a Tokyo boy in her life. Soon, she begins to intermittently switch bodies with Taki Tachibana, a boy from Tokyo.</p>
                </div>
            </div>
            <div className='anime_grid5component2' onClick={g5c2}>
                <div></div>
                <div className='anime_grid5component2'>
                    <div className='anime_g5c2bgp2'>
                        
                    </div>
                    <div className='anime_g5c2bgm2'>
                        <h3>I want to eat your pancreas</h3>
                        <p>A high school student discovers one of his classmates, Sakura Yamauchi, is suffering from a terminal illness. This secret brings the two together, as she lives out her final moments.</p>
                    </div>
                    
                </div>
            </div>
            <div className='anime_grid5component3' onClick={g5c3}>
                <div></div>
                <div className='anime_grid5component3'>
                    <div className='anime_g5c3bgp3'>
                        
                    </div>
                    <div className='anime_g5c3bgm3'>
                        <h3>Weathering With You</h3>
                        <p>It follows a 16-year-old high school boy, Hodaka Morishima, who runs away from his troubled rural home to Tokyo, and later befriends Hina Amano, an orphaned girl who has the ability to control the weather..</p>
                    </div>
                    
                </div>
            </div>
            <div></div>
        </div>

        </div>
        <br/><br/>
        </>
    )
    }

    export default Anime;
