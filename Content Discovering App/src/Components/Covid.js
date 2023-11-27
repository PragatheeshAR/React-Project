import { Ticket } from 'lucide-react';
import React from 'react';
import '../Assessts/Covid.css';
function Covid() {
  return (
    <>
    <div className='bodycovid'>
    <div className='cov_nav'>
            <Ticket className='cov_tic'/>
            <h1 className='cov_h1'>Explore</h1>
            <button className='cov_navbutton'><b>Next</b></button>
        </div>
        <div className='cov_main'>
            <div className='cov_mainleft'>
                <div className='cov_mainleftimage'>
                </div>
            </div>
            <div className='cov_mainright'>
                <p className='cov_mainrightheading'>COVID - 19 Impact on World's Economical Status</p>
                <p className='cov_mainrightcontent'>COVID-19 is not only a global pandemic and public health crisis; it has also severely affected the global economy and financial markets. Significant reductions in income, a rise in unemployment, and disruptions in the transportation, service, and manufacturing industries are among the consequences of the disease mitigation measures that have been implemented in many countries. It has become clear that most governments in the world underestimated the risks of rapid COVID-19 spread and were mostly reactive in their crisis response. As disease outbreaks are not likely to disappear in the near future, proactive international actions are required to not only save lives but also protect economic prosperity.
Worsening inequality within and across countries
The economic impacts of the pandemic were especially severe in emerging economies where income losses caused by the pandemic revealed and worsened some preexisting economic fragilities. As the pandemic unfolded in 2020, it became clear that many households and firms were ill-prepared to withstand an income shock of that scale and duration. Studies based on precrisis data suggest, for example, that more than 50 percent of households in emerging and advanced economies were not able to sustain basic consumption for more than three months in the event of income losses.
<br></br><br></br><h2>Worsening inequality within and across countries</h2><br></br>
The economic impacts of the pandemic were especially severe in emerging economies where income losses caused by the pandemic revealed and worsened some preexisting economic fragilities. As the pandemic unfolded in 2020, it became clear that many households and firms were ill-prepared to withstand an income shock of that scale and duration. Studies based on precrisis data suggest, for example, that more than 50 percent of households in emerging and advanced economies were not able to sustain basic consumption for more than three months in the event of income losses.2 Similarly, the average business could cover fewer than 55 days of expenses with cash reserves.3 Many households and firms in emerging economies were already burdened with unsustainable debt levels prior to the crisis and struggled to service this debt once the pandemic and associated public health measures led to a sharp decline in income and business revenue.<br></br>
<br></br><h2>The short-term government responses to the crisis</h2><br></br>
The short-term government responses to the pandemic were extraordinarily swift and encompassing. Governments embraced many policy tools that were either entirely unprecedented or had never been used on this scale in emerging economies. Examples are large direct income support measures, debt moratoria, and asset purchase programs by central banks. These programs varied widely in size and scope (figure 1.1), in part because many low-income countries were struggling to mobilize resources given limited access to credit markets and high precrisis levels of government debt. As a result, the size of the fiscal response to the crisis as a share of the gross domestic product (GDP)</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default Covid;