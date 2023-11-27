import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Album } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assessts/Music.css';

function Music() {
    useEffect(()=>{
        document.title = 'Music';
    })
    function g1c1(){
        window.location.href = 'https://open.spotify.com/track/2eAvDnpXP5W0cVtiI0PUxV'
    }
    function g1c2(){
        window.location.href = 'https://open.spotify.com/track/5KJSI1MjQeXEBHBYMjgP41'
    }
    function g1c3(){
        window.location.href = 'https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp'
    }
    function g1c4(){
        window.location.href = 'https://open.spotify.com/track/0cVrLxeQjiAcftuGzp32qY'
    }
    function g2c1(){
        window.location.href = 'https://open.spotify.com/artist/1mYsTxnqsietFxj1OgoGbG'
    }
    function g2c2(){
        window.location.href = 'https://open.spotify.com/artist/3m49WVMU4zCkaVEKb8kFW7'
    }
    function g2c3(){
        window.location.href = 'https://open.spotify.com/artist/2ae6PxICSOZHvjqiCcgon8'
    }
    function g2c4(){
        window.location.href = 'https://open.spotify.com/artist/4zCH9qm4R2DADamUHMCa6O'
    }
    function g3c1(){
        window.location.href = 'https://open.spotify.com/album/58rfEEYCmEImlPaaqQddVF'
    }
    function g3c2(){
        window.location.href = 'https://open.spotify.com/album/4DyPmer9GfEcRosw671Eaq'
    }
    function g3c3(){
        window.location.href = 'https://open.spotify.com/album/634XiL0HdManH26qduu9Xw'
    }
    function g3c4(){
        window.location.href = 'https://open.spotify.com/album/6NiIEKpKQaWY16PwCfbS5V'
    }
    function g4c1(){
        window.location.href = 'https://open.spotify.com/playlist/37i9dQZF1DWYfvJNWU1bKi'
    }
    function g4c2(){
        window.location.href = 'https://open.spotify.com/playlist/37i9dQZF1DX3bcfiyW6qms'
    }
    function g4c3(){
        window.location.href = 'https://open.spotify.com/playlist/37i9dQZF1DX5yXx6e61fbM'
    }
    function g4c4(){
        window.location.href = 'https://open.spotify.com/playlist/37i9dQZF1DX2VPTYZ31HYJ'
    }
    function g5c1(){
        window.location.href = 'https://open.spotify.com/show/5NgtQbBWRvf1xj2is6XIo0'
    }
    function g5c2(){
        window.location.href = 'https://open.spotify.com/show/4g8FIlkrXH0SpUEH35NLdV'
    }
    function g5c3(){
        window.location.href = 'https://open.spotify.com/show/58g95EqsrSk5ViIl3wGDzo'
    }
    function g5c4(){
        window.location.href = 'https://open.spotify.com/show/0ydyxy2HLi2Q2TAOHphrFa'
    }
  return (
    <>
    <div className='music_grid_body'>
    <div className='music_grid_Navigation'>
        <div className='music_grid_appname'><Album /><h2>Explore</h2></div>
        <div className='music_grid_navlink'>
            <Link to='/Home' className='music_link'><p>Home</p></Link>
            <Link to='/Anime' className='music_link'><p>Anime</p></Link>
            <Link to='/Music' className='music_link'><p className='music_current'>Music</p></Link>
        </div>
        <div className='music_grid_account'><AccountCircleIcon sx={{width:'50px',height:'50px'}}/></div>
    </div>

    <div className='music_grid_recommend'>
        <h1>Recommended</h1>
        <p>by Explore</p>
    </div>


    
    <div className='music_grid1'>
        <div></div>
        <div className='music_grid1component1' onClick={g1c1}>
            <div className='music_g1c1bgp1'>
                
            </div>
            <div className='music_g1c1bgm1'>
                <h3>Dandelions</h3>
                <h4>-by Ruth B</h4>
                
            </div>
        </div>
        <div className='music_grid1component2' onClick={g1c2}>
            <div></div>
            <div className='music_grid1component2'>
                <div className='music_g1c2bgp2'>
                </div>
                <div className='music_g1c2bgm2'>
                    <h3>Innum Konjam Neram</h3>
                    <h4>-by A.R. Rahman</h4>
                </div>
                
            </div>
        </div>
        <div className='music_grid1component3' onClick={g1c3}>
            <div></div>
            <div className='music_grid1component3'>
                <div className='music_g1c3bgp3'>
                    
                </div>
                <div className='music_g1c3bgm3'>
                    <h3>Heat Waves</h3>
                    <h4>-by Glass Animals</h4>
                    
                </div>
                
            </div>
        </div>
        <div className='music_grid1component4' onClick={g1c4}>
            <div></div>
            <div className='music_grid1component4'>
                <div className='music_g1c4bgp4'>
                    
                </div>
                <div className='music_g1c4bgm4'>
                    <h3>Newyork Nagaram</h3>
                    <h4>-by A.R. Rahman</h4>
                    
                </div>
                
            </div>
        </div>
        <div></div>
    </div>


    <div className='music_grid_recommend'>
        <h1>Artist</h1>
    </div>
    <div className='music_grid2'>
        <div></div>
        <div className='music_grid2component1' onClick={g2c1}>
            <div className='music_g2c1bgp1'>
                
            </div>
            <div className='music_g2c1bgm1'>
                <h3>A.R. Rahman</h3>
                
            </div>
        </div>
        <div className='music_grid2component2' onClick={g2c2}>
            <div></div>
            <div className='music_grid2component2'>
                <div className='music_g2c2bgp2'>
                </div>
                <div className='music_g2c2bgm2'>
                    <h3>Ilaiyaraaja</h3>
                </div>
                
            </div>
        </div>
        <div className='music_grid2component3' onClick={g2c3}>
            <div></div>
            <div className='music_grid2component3'>
                <div className='music_g2c3bgp3'>
                    
                </div>
                <div className='music_g2c3bgm3'>
                    <h3>S.P. BalaSubrahmanyam</h3>
                    
                </div>
                
            </div>
        </div>
        <div className='music_grid2component4' onClick={g2c4}>
            <div></div>
            <div className='music_grid2component4'>
                <div className='music_g2c4bgp4'>
                    
                </div>
                <div className='music_g2c4bgm4'>
                    <h3>Anirudh Ravichander</h3>
                    
                </div>
                
            </div>
        </div>
        <div></div>
    </div>

    <div className='music_grid_recommend'>
        <h1>Album</h1>
    </div>

    <div className='music_grid3'>
        <div></div>
        <div className='music_grid3component1' onClick={g3c1}>
            <div className='music_g3c1bgp1'>
                
            </div>
            <div className='music_g3c1bgm1'>
                <h3>Vaaranam Aayiram</h3>
                <h4>-Harris Jayaraj</h4>
                
            </div>
        </div>
        <div className='music_grid3component2' onClick={g3c2}>
            <div></div>
            <div className='music_grid3component2'>
                <div className='music_g3c2bgp2'>
                </div>
                <div className='music_g3c2bgm2'>
                    <h3>Engeyum Kadhal</h3>
                    <h4>-Harris Jayaraj</h4>
                </div>
                
            </div>
        </div>
        <div className='music_grid3component3' onClick={g3c3}>
            <div></div>
            <div className='music_grid3component3'>
                <div className='music_g3c3bgp3'>
                    
                </div>
                <div className='music_g3c3bgm3'>
                    <h3>Paiya</h3>
                    <h4>Yuvan Shankar Raja</h4>
                    
                </div>
                
            </div>
        </div>
        <div className='music_grid3component4' onClick={g3c4}>
            <div></div>
            <div className='music_grid3component4'>
                <div className='music_g3c4bgp4'>
                    
                </div>
                <div className='music_g3c4bgm4'>
                    <h3>Yaaradi Nee Mohini</h3>
                    <h4>-Yuvan Shankar Raja</h4>
                    
                </div>
                
            </div>
        </div>
        <div></div>
    </div>

    <div className='music_grid_recommend'>
        <h1>Collections</h1>
    </div>

    <div className='music_grid4'>
        <div></div>
        <div className='music_grid4component1' onClick={g4c1}>
            <div className='music_g4c1bgp1'>
                
            </div>
            <div className='music_g4c1bgm1'>
                <h3>Tamil Romance</h3>
                
            </div>
        </div>
        <div className='music_grid4component2' onClick={g4c2}>
            <div></div>
            <div className='music_grid4component2'>
                <div className='music_g4c2bgp2'>
                </div>
                <div className='music_g4c2bgm2'>
                    <h3>Sad Melodies Tamil</h3>
                </div>
                
            </div>
        </div>
        <div className='music_grid4component3' onClick={g4c3}>
            <div></div>
            <div className='music_grid4component3'>
                <div className='music_g4c3bgp3'>
                    
                </div>
                <div className='music_g4c3bgm3'>
                    <h3>Melodies Tamil</h3>
                    
                </div>
                
            </div>
        </div>
        <div className='music_grid4component4' onClick={g4c4}>
            <div></div>
            <div className='music_grid4component4'>
                <div className='music_g4c4bgp4'>
                    
                </div>
                <div className='music_g4c4bgm4'>
                    <h3>Music Cafe</h3>
                    
                </div>
                
            </div>
        </div>
        <div></div>
    </div>

    <div className='music_grid_recommend'>
        <h1>Podcast</h1>
    </div>
    
    <div className='music_grid5'>
        <div></div>
        <div className='music_grid5component1' onClick={g5c1}>
            <div className='music_g5c1bgp1'>
                
            </div>
            <div className='music_g5c1bgm1'>
                <h3>Schumy Vanna Kaviyangal</h3>
                
            </div>
        </div>
        <div className='music_grid5component2' onClick={g5c2}>
            <div></div>
            <div className='music_grid5component2'>
                <div className='music_g5c2bgp2'>
                </div>
                <div className='music_g5c2bgm2'>
                    <h3>The Modern Akatsuki</h3>
                </div>
                
            </div>
        </div>
        <div className='music_grid5component3' onClick={g5c3}>
            <div></div>
            <div className='music_grid5component3'>
                <div className='music_g5c3bgp3'>
                    
                </div>
                <div className='music_g5c3bgm3'>
                    <h3>Naallanaa Murukku</h3>
                    
                </div>
                
            </div>
        </div>
        <div className='music_grid5component4' onClick={g5c4}>
            <div></div>
            <div className='music_grid5component4'>
                <div className='music_g5c4bgp4'>
                    
                </div>
                <div className='music_g5c4bgm4'>
                    <h3>Vocal Oli</h3>
                    
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

export default Music
