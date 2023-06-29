import React from 'react'
import { cardPlans } from '../constants'
import CardPlan from './CardPlan';

function Footer() {
  return (
    <footer className="bg-[#fefbf8] px-12">
      <div className="w-full flex flex-col justify-between mb-20">
        <div className='flex justify-between items-center my-20'>
          <span className='text-red-600 text-5xl'>MEMBERSHIP</span>
          
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
              key={plan.name}
            />
          ))}
        </div>
      </div>


      {/* <!-- badminton --> */}
      <div className="contact">
        <div>
          <a href="#" id="logo">
            <span>Badminton Excel</span>
          <p className="card-text">
            Embrace Diversity, Elevate Skills,<br /> Achieve Fitness <p className='text-red-600 inline'>!</p>
          </p></a> 
        </div>

        <div>
          <h4 className="text-[80px] mb-2 font-semibold">Let's play</h4>
          <a href="/membership">
            <button className="btn3 py-3 px-2 text-black border-black hover:bg-black hover:text-white">Register with us !</button>
          </a>
        </div>
      </div>

      <div className="social">
      <ul>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-instagram fa-beat mr-2" style={{color: 'rgb(220 38 38)'}}></i>
          Instagram</a></li>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-facebook fa-shake mr-2" style={{color: '#1877F2'}}></i>
          Facebook</a></li>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-twitter fa-bounce mr-2" style={{color: '#1DA1F2'}}></i>
          Twitter</a></li>
      </ul>
      <p className="copyright text-sm uppercase tracking-widest">&copy;Badminton Excel. All Rights Reserved 2023. </p>
      </div>
    </footer>
  );
}

export default Footer;