import { Ticket } from 'lucide-react';
import React from 'react';
import '../Assessts/Polls.css';
function Polls() {
  return (
    <>    
    <div>   
     <div className='Polls_nav'>
            <Ticket className='Polls_tic'/>
            <h1 className='Polls_h1'>Explore</h1>
            <button className='Polls_navbutton'><b>Next</b></button>
        </div>
        <div className='Polls_main'>
            <div className='Polls_mainleft'>
                <div className='Polls_mainleftimage'>
                    
                </div>
            </div>
            <div className='Polls_mainright'>
                <p className='Polls_mainrightheading'>Who will win 2024 polls? INDIA, NDA debate</p>
                <p className='Polls_mainrightcontent'>I’ve no doubt BJP will prevail & PM Modi will be back with a bigger margin in 2024: Amit Shah<br></br><br></br>
                Union home minister Amit Shah has been looking after BJP's campaign for Madhya Pradesh and Chhattisgarh a tough terrain for his party. It faces anti- incumbencyin MP, while the dominant political assessment puts Congress far ahead in Chhattisgarh. However, in a conversation with TOI, Shah struck a confident note about BJP's prospects in the two states.<br></br><br></br>
                He was optimistic about BJP's victory also in Rajasthan, and predicted a comfortable win, bigger than the last one, for PM Narendra Modi in the 2024 LS elections. Excerpts from the interview:
<br></br><br></br>There are still a few days to go before Telangana votes. But so far as the three
states of the Hindi belt
Chhattisgarh, Madhya Pradesh and Rajasthan
concerned, I see a strong current of anti-incumbency against Congress,
including in MP. I saw it first hand in my tours of the states. In Madhya
Pradesh, which I have looked at closely in the last two and a half months,
people vividly recall the misrule, corruption and non-governance that defined
the 1.5 years Congress was in office after 2018. In Rajasthan and
Chhattisgarh, Congress governments deviated from the tasks of development
and maintaining law and order, which has hurt people. In sharp contrast to the
adverse opinion towards Congress, people have a positive opinion towards BJP.
Not just because of the Modi government's welfare schemes but also because
the Centre, under BJP, never discriminated against Congress-governed states.
Even Congress has not accused the Modi government of pursuing a
stepmotherly attitude towards its governments. I think BJP is on a strong
footing in all three states and we will win all three, margins can vary.


</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default Polls