import React from 'react'
import { cardPlans } from '../constants'
import CardPlan from './CardPlan';

function Footer() {
  return (
    <footer className="bg-[#fefbf8] px-12">
      <div className="w-full flex flex-col justify-between mb-20">
        <div className='flex justify-between items-center my-20'>
          <span>MEMBERSHIP</span>
          
          <p className="text-black text-7xl font-medium">
            Select the best plan
          </p>
        </div>
        
        <div className="card-footer self-center grid grid-cols-1 lg:grid-cols-3">
          {cardPlans.map(plan => (
            <CardPlan
              name={plan.name}
              price={plan.price}
              description={plan.description}
            />
          ))}
        </div>
      </div>


      {/* <!-- badminton --> */}
      <div className="contact">
        <div>
          <a href="#" id="logo">
            <span>Badminton Excel</span>
          <p class="card-text">Embrace Diversity, Elevate Skills,<br /> Achieve Fitness!</p></a>
        </div>
          
        <div>
          <h4 className="text-[80px] mb-2 font-semibold">Let's play</h4>
          <button className="btn3 py-3 px-2">Register with us !</button>
        </div>
      </div>

      <div className="social">
      <ul>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-instagram fa-beat mr-1" style={{color: '#818181'}}></i>
          Instagram</a></li>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-facebook fa-shake mr-1" style={{color: '#818181'}}></i>
          Facebook</a></li>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-twitter fa-bounce mr-1" style={{color: '#818181'}}></i>
          Twitter</a></li>
      </ul>
      <p className="copyright">&copy;Badminton Excel. All Rights Reserved 2023. </p>
      </div>
    </footer>
  );
}

export default Footer;