import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Album, Download, ThumbsDown, ThumbsDownIcon, ThumbsUp, ThumbsUpIcon } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assessts/Home.css';
import { ContextMessage } from './Login';
function Home() {
    useEffect(()=>{
        document.title='Home';
    })
    const home1 = useNavigate();
    const [like1,setlike1] = useState(false);
    const [like2,setlike2] = useState(false);
    const [like3,setlike3] = useState(false);
    const [like4,setlike4] = useState(false);
    const [like5,setlike5] = useState(false);
    const [like6,setlike6] = useState(false);
    const [like7,setlike7] = useState(false);
    const [like8,setlike8] = useState(false);
    const [like9,setlike9] = useState(false);
    const [like10,setlike10] = useState(false);
    const [like11,setlike11] = useState(false);
    const [like12,setlike12] = useState(false);
    const [like13,setlike13] = useState(false);
    const [like14,setlike14] = useState(false);
    const [like15,setlike15] = useState(false);
    const [like16,setlike16] = useState(false);
    const [like17,setlike17] = useState(false);
    const [like18,setlike18] = useState(false);
    const [like19,setlike19] = useState(false);
    const [like20,setlike20] = useState(false);
    const [like21,setlike21] = useState(false);
    const [like22,setlike22] = useState(false);
    const [like23,setlike23] = useState(false);
    const [like24,setlike24] = useState(false);
    function click1(){
        setlike1(!like1)
    }
    function click2(){
        setlike2(!like2)
    }
    function click3(){
        setlike3(!like3)
    }
    function click4(){
        setlike4(!like4)
    }
    function click5(){
        setlike5(!like5)
    }
    function click6(){
        setlike6(!like6)
    }
    function click7(){
        setlike7(!like7)
    }
    function click8(){
        setlike8(!like8)
    }
    function click9(){
        setlike9(!like9)
    }
    function click10(){
        setlike10(!like10)
    }
    function click11(){
        setlike11(!like11)
    }
    function click12(){
        setlike12(!like12)
    }
    function click13(){
        setlike13(!like13)
    }
    function click14(){
        setlike14(!like14)
    }
    function click15(){
        setlike15(!like15)
    }
    function click16(){
        setlike16(!like16)
    }
    function click17(){
        setlike17(!like17)
    }
    function click18(){
        setlike18(!like18)
    }
    function click19(){
        setlike19(!like19)
    }
    function click20(){
        setlike20(!like20)
    }
    function click21(){
        setlike21(!like21)
    }
    function click22(){
        setlike22(!like22)
    }
    function click23(){
        setlike23(!like23)
    }
    function click24(){
        setlike24(!like24)
    }
    function grid1c1(){
        home1('/AI')
    }
    function grid1c2(){
        home1('/Aditya')
    }
    function grid1c3(){
        home1('/Cinema')
    }
    function grid2c1(){
        home1('/Covid')
    }
    function grid2c2(){
        home1('/Economic')
    }
    function grid2c3(){
        home1('/ITpark')
    }
    function grid3c1(){
        home1('/Polls')
    }
    function grid3c2(){
        home1('/Pi')
    }
    function grid3c3(){
        home1('/IndoChina')
    }
    function grid4c1(){
        home1('/Cricket')
    }
    function grid4c2(){
        home1('/Football')
    }
    function grid4c3(){
        home1('/Tennis')
    }
    const user = useContext(ContextMessage);
  return (
    <>
    <div className='home_grid_body'>
    <div className='home_grid_Navigation'>
        <div className='home_grid_appname'><Album /><h2>Explore</h2></div>
        <div className='home_grid_navlink'>
            <Link to='/Home' className='home_link'><p className='home_current'>Home</p></Link>
            <Link to='/Anime' className='home_link'><p>Anime</p></Link>
            <Link to='/Music' className='home_link'><p>Music</p></Link>
        </div>
        <div className='home_grid_account'><p>{user}</p><AccountCircleIcon sx={{width:'50px',height:'50px'}}/></div>
    </div>
    <div className='home_grid_recommend'>
        <h1>Recommended</h1>
        <p>by Explore</p>
    </div>



    <div className='home_grid1'>
        <div></div>
        <div className='home_grid1component1' >
            <div onClick={grid1c1}>
            <div className='home_g1c1bgp1'>
                
            </div>
            <div className='home_g1c1bgm1'>
                <p>Artifical Intelligence 2024</p>
            </div>
            <div className='home_g1c1c1'>
                <h3>AI processing is expected to face limitations in 2024.</h3>
                <p> Limited chip manufacturing capabilities will result in a slowdown in AI processing by 2024. Businesses are expected to take a practical approach to AI, based on chip availability, economic considerations, and sustainability</p>
            </div>
            </div>
            <div className='home_g1c1l1'>
                <button className="home_grid_button" onClick={click1}>{like1?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click2}>{like2?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>
            <div className='home_grid1component2'>
                <div onClick={grid1c2}>
                    <div className='home_g1c2bgp2'>
                        
                    </div>
                    <div className='home_g1c2bgm2'>
                        <p>Aditya 2024</p>
                    </div>
                    <div className='home_g1c2c2'>
                        <h3>India's next Big step in Space Research</h3>
                        <p> Aditya-L1 will stay approximately 1.5 million km away from Earth, directed towards the Sun, which is about 1% of the Earth-Sun distance. The Sun is a giant sphere of gas and Aditya-L1 would study the outer atmosphere of the Sun. Aditya-L1 will neither land on the Sun nor approach the Sun any closer.</p>
                    </div>
                </div>
                <div className='home_g1c2l2'>
                <button className="home_grid_button" onClick={click3}>{like3?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click4}>{like4?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
        </div>
            <div className='home_grid1component3'>
                <div onClick={grid1c3}>
                    <div className='home_g1c3bgp3'>
                        
                    </div>
                    <div className='home_g1c3bgm3'>
                        <p>Cine Update</p>
                    </div>
                    <div className='home_g1c3c3'>
                        <h3>KNOW YOUR CINE INDUSTRY!!!</h3>
                        <p>Rajinikanth and Kamal Haasan ended up catching up with each other at work on Thursday, and pics of the two veterans have gone viral.</p>
                    </div>
                </div>
                <div className='home_g1c3l3'>
                <button className="home_grid_button" onClick={click5}>{like5?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click6}>{like6?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>

            </div>
    </div>
    

    <div className='home_grid_recommend'>
        <h1>Economy</h1>
    </div>
    <div className='home_grid2'>
        <div></div>
        <div className='home_grid2component1'>
            <div onClick={grid2c1}>
                <div className='home_g2c1bgp1'>
                    
                </div>
                <div className='home_g2c1bgm1'>
                    <p>Post Covid-19 Effects</p>
                </div>
                <div className='home_g2c1c1'>
                    <h3>COVID - 19 Impact on World's Economical Status</h3>
                    <p>COVID-19 is not only a global pandemic and public health crisis; it has also severely affected the global economy and financial markets.</p>
                </div>
            </div>
            <div className='home_g2c1l1'>
            <button className="home_grid_button" onClick={click7}>{like7?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click8}>{like8?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>

            <div className='home_grid2component2'>
                <div onClick={grid2c2}>
                    <div className='home_g2c2bgp2'>
                        
                    </div>
                    <div className='home_g2c2bgm2'>
                        <p>Economical Downfall</p>
                    </div>
                    <div className='home_g2c2c2'>
                        <h3>Risks of recession may reappear in 2024</h3>
                        <p> India's Finance Ministry has said a recession may appear in 2024 due to uncertainties related to higher food and energy prices and geopolitical tensions.</p>
                    </div>
                </div>
                <div className='home_g2c2l2'>
                <button className="home_grid_button" onClick={click9}>{like9?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click10}>{like10?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>

            <div className='home_grid2component3'>
                <div onClick={grid2c3}>
                    <div className='home_g2c3bgp3'>
                        
                    </div>
                    <div className='home_g2c3bgm3'>
                        <p>IT Sector Growth</p>
                    </div>
                    <div className='home_g2c3c3'>
                        <h3>10 new IT parks to be set up in Tamil Nadu: Minister Palanivel Thiagarajan</h3>
                        <p>Tamil Nadu Minister for IT and Digital Services Palanivel Thiagarajan said on Friday that the state government has started the process of setting up 10 new  parks in various locations of the state, including Hosur, Coimbatore, and  Chennai</p>
                    </div>
                </div>
                <div className='home_g2c3l3'>
                <button className="home_grid_button" onClick={click11}>{like11?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click12}>{like12?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
    </div>


    <div className='home_grid_recommend'>
        <h1>Global Poltics</h1>
    </div>
    <div className='home_grid3'>
        <div></div>
        <div className='home_grid3component1'>
            <div onClick={grid3c1}>
                <div className='home_g3c1bgp1'>
                    
                </div>
                <div className='home_g3c1bgm1'>
                    <p>Election 2024</p>
                </div>
                <div className='home_g3c1c1'>
                    <h3>Who will win 2024 polls? INDIA, NDA debate</h3>
                    <p> Union home minister Amit Shah has been looking after BJP's campaign for Madhya Pradesh and Chhattisgarh a tough terrain for his party. </p>
                </div>
            </div>
            <div className='home_g3c1l1'>
            <button className="home_grid_button" onClick={click13}>{like13?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click14}>{like14?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>
            <div className='home_grid3component2'>
                <div onClick={grid3c2}>
                    <div className='home_g3c2bgp2'>
                        
                    </div>
                    <div className='home_g3c2bgm2'>
                        <p>Israel-Palestine Dispute</p>
                    </div>
                    <div className='home_g3c2c2'>
                        <h3>Israeli–Palestinian conflict!!!</h3>
                        <p>The Israeli–Palestinian conflict is an ongoing military and political conflict in the Levant. Beginning in the mid-20th century, it is one of the world's longest continuing conflicts.</p>
                    </div>
                </div>
                <div className='home_g3c2l2'>
                <button className="home_grid_button" onClick={click15}>{like15?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click16}>{like16?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
            <div className='home_grid3component3'>
                <div onClick={grid3c3}>
                    <div className='home_g3c3bgp3'>
                        
                    </div>
                    <div className='home_g3c3bgm3'>
                        <p>Border Conflict</p>
                    </div>
                    <div className='home_g3c3c3'>
                        <h3>Bothering border: Tracing origin of lines dividing India, China</h3>
                        <p>Beginning on 5 May 2020, Chinese and Indian troops engaged in aggressive melee, face-offs, and skirmishes at locations along the Sino-Indian border.</p>
                    </div>
                </div>
                <div className='home_g3c3l3'>
                <button className="home_grid_button" onClick={click17}>{like17?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click18}>{like18?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
        </div>
    </div>


    <div className='home_grid_recommend'>
        <h1>Sports</h1>
    </div>
    <div className='home_grid4'>
        <div></div>
        <div className='home_grid4component1'>
            <div onClick={grid4c1}>
                <div className='home_g4c1bgp1'>
                    
                </div>
                <div className='home_g4c1bgm1'>
                    <p>Cricket</p>
                </div>
                <div className='home_g4c1c1'>
                    <h3>Who will be new ICC Men's T20 World Cup Champions ?</h3>
                    <p>The ICC Men's T20 World Cup, is the Twenty20 International cricket tournament, organised by the International Cricket Council (ICC) since 2007. As of 2024 it will include 20 teams.</p>
                </div>
            </div>
            <div className='home_g4c1l1'>
            <button className="home_grid_button" onClick={click19}>{like19?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click20}>{like20?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                <span><Download /></span>
                
            </div>
        </div>

            <div className='home_grid4component2'>
                <div onClick={grid4c2}>
                    <div className='home_g4c2bgp2'>
                        
                    </div>
                    <div className='home_g4c2bgm2'>
                        <p>Football</p>
                    </div>
                    <div className='home_g4c2c2'>
                        <h3>UEFA Euro Tournament 2024</h3>
                        <p> The 2024 UEFA European Football Championship, commonly referred to as UEFA Euro 2024 (stylised as UEFA EURO 2024) or simply Euro 2024, will be the 17th edition of the UEFA European Championship.</p>
                    </div>
                </div>
                <div className='home_g4c2l2'>
                <button className="home_grid_button" onClick={click21}>{like21?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click22}>{like22?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
            <div className='home_grid4component3'>
                <div onClick={grid4c3}>
                    <div className='home_g4c3bgp3'>
                        
                    </div>
                    <div className='home_g4c3bgm3'>
                        <p>Tennis</p>
                    </div>
                    <div className='home_g4c3c3'>
                        <h3>Will Rafael Nadal achieve the feat of 23rd Grand Slam ?</h3>
                        <p> The first tennis Grand Slam of 2024 is fast approaching. Melbourne will once again play host to the best players in the world who will battle it out to be crowned the Australian Open champion.</p>
                    </div>
                </div>
                <div className='home_g4c3l3'>
                <button className="home_grid_button" onClick={click23}>{like23?  <ThumbsUp  color="#ee1111" /> :<ThumbsUpIcon/> }</button>
                <button className='home_grid_button' onClick={click24}>{like24?<ThumbsDown  color="#ee1111" />:<ThumbsDownIcon/>}</button>
                    <span><Download /></span>
                    
                </div>
            </div>
    </div>





    </div>
    <br/><br/><br/>
    </>
)
}

export default Home
