import React from 'react'
import industry from './industry.svg'
import sol from './sol-maintenance.svg'
import truck from './truck.svg'
import globe from './globe.svg'

export default function Zeesh1() {
  return (<>
  
    <div class="industry-section-container">
      <section class="industry-section">
        <div class="industry-header" >
        What we can do for your business 
        </div>
        <div class="industry-cards">
          <div class="industry-card">
            <img src={truck} alt="Trucking Icon" width="50" height="50" />
            <h3>Trucking</h3>
            <p>
              Monetize Tele-matics data, synchronize it with the TMS, automate
              tedious tasks, improve your fleet KPIs, and cut costs.
            </p>
          </div>
          <div class="industry-card">
            <img src={globe} alt="Container Icon" width="50" height="50" />
            <h3>Empty Container Management</h3>
            <p>
              Leverage predictive container management software to achieve
              efficiency and reduce fleet costs.
            </p>
          </div>
          <div class="industry-card">
            <img
              src={industry}
              alt="Planning Icon"
              width="50"
              height="50"
            />
            <h3>Linehaul Planning</h3>
            <p>
              Optimize shipment data for better capacity planning, purchasing,
              and data-driven decision-making.
            </p>
          </div>
          <div class="industry-card">
            <img
              src={sol}
              alt="Maintenance Icon"
              width="50"
              height="50"
            />
            <h3>Fleet Maintenance</h3>
            <p>
              Get a complete overview of your fleet's condition to plan
              maintenance before breakdowns occur.
            </p>
          </div>
        </div>
      </section>
    </div>
 

 </>)
}
