import React from "react";
import { Animated } from "react-animated-css";
import "./education.css";
const Education = () => {
 return (
   <section className="education" id="Education">
     <div className="timeline">
       <ul>
         <li>
           <Animated animationIn="bounceInUp" isVisible={true}>
             <div className="content">
               <h3> Vignan's University,Guntur</h3>
               <p>
                 Completed my Bachelor Degree in Mechanical Engineering
                 with an aggregate of 77.06%
               </p>
             </div>
           </Animated>
           <Animated>
             <div className="time">
               <h4>2014-2018</h4>
             </div>
           </Animated>
         </li>
         <li>
           <Animated animationIn="bounceInRight" isVisible={true}>
             <div className="content">
               <h3>Sri Chaitanya Techno school</h3>
               <p>Completed my intermediate with an aggregate of 89.2% </p>
             </div>
           </Animated>
           <Animated isVisible={true}>
             <div className="time">
               <h4>2014</h4>
             </div>
           </Animated>
         </li>
         <li>
           <Animated animationIn="bounceInLeft" isVisible={true}>
             <div className="content">
               <h3>Narayana Junior College</h3>
               <p>Completed my 10th with an aggregate of 8.7</p>
             </div>
           </Animated>
           <Animated>
             <div className="time">
               <h4>2012</h4>
             </div>
           </Animated>
         </li>
         <div style={{ clear: "both" }}></div>
       </ul>
     </div>
   </section>
 );
};

export default Education;