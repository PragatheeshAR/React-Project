import { Ticket } from 'lucide-react';
import React from 'react';
import '../Assessts/AI.css';
function AI() {
  return (
    <>
    <div>
        <div className='ai_nav'>
            <Ticket className='ai_tic'/>
            <h1 className='ai_h1'>Explore</h1>
            <button className='ai_navbutton'><b>Next</b></button>
        </div>
        <div className='ai_main'>
            <div className='ai_mainleft'>
                <div className='ai_mainleftimage'>
                    
                </div>
            </div>
            <div className='ai_mainright'>
                <p className='ai_mainrightheading'>AI in 2024</p>
                <p className='ai_mainrightcontent'>Progress in artificial intelligence (AI) refers to the advances, milestones, and breakthroughs that have been achieved in the field of artificial intelligence over time. AI is a multidisciplinary branch of computer science that aims to create machines and systems capable of performing tasks that typically require human intelligence. Artificial intelligence applications have been used in a wide range of fields including medical diagnosis, economic-financial applications, robot control, law, scientific discovery, video games, and toys.<br></br><br></br>

                However, many AI applications are not perceived as AI: "A lot of cutting edge AI has filtered into general applications, often without being called AI because once something becomes useful enough and common enough it's not labeled AI anymore."[1][2] "Many thousands of AI applications are deeply embedded in the infrastructure of every industry."[3] In the late 1990s and early 21st century, AI technology became widely used as elements of larger systems,but the field was rarely credited for these successes at the time.<br></br><br></br>Kaplan and Haenlein structure artificial intelligence along three evolutionary stages: 1) artificial narrow intelligence – applying AI only to specific tasks; 2) artificial general intelligence – applying AI to several areas and able to autonomously solve problems they were never even designed for; and 3) artificial super intelligence – applying AI to any area capable of scientific creativity, social skills, and general wisdom.[2]

To allow comparison with human performance, artificial intelligence can be evaluated on constrained and well-defined problems. Such tests have been termed subject matter expert Turing tests. Also, smaller problems provide more achievable goals and there are an ever-increasing number of positive results.

Humans still substantially outperform both GPT-4 and models trained on the ConceptARC benchmark that scored 60% on most, and 77% on one category, while humans 91% on all and 97% on one category</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default AI