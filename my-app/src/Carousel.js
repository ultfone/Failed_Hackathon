import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import stocks from './stock.jpg';
import man from './man.jpg';
import girls from './girl.png';
export default function Caarousel() {
  return (
   <>
    <div className="chain">
    <Carousel style={{margin:'10px', marginBottom:'20px'}}>
      <Carousel.Item interval={1000}>
        <img src={girls}  text="First slide" style={{height:'87vh', width:'89vw', marginLeft:'5%'}}/>
        <Carousel.Caption  style={{backgroundColor:' rgba(0, 0, 0, 0.65)'}}>
          <h3>"Driven by Efficiency, Delivered with Precision."</h3>
          <p>We optimize every step of the supply chain to ensure swift and accurate deliveries. With cutting-edge technology and streamlined processes, we guarantee efficiency at every mile.

</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={man} text="Second slide" style={{height:'87vh', width:'89vw' , marginLeft:'5%'}} />
        <Carousel.Caption  style={{backgroundColor:' rgba(0, 0, 0, 0.65)'}}>
          <h3>"Seamless Logistics, Limitless Possibilities."</h3>
          <p>From warehousing to last-mile delivery, we provide end-to-end solutions that keep your business moving. No destination is too far, no challenge too big—our logistics open doors to new opportunities.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={stocks} text="Third slide" style={{height:'87vh', width:'89vw' , marginLeft:'5%'}}/>
        <Carousel.Caption style={{backgroundColor:' rgba(0, 0, 0, 0.65)'}}>
          <h3>"Your Cargo, Our Commitment."</h3>
          <p>
          We treat every shipment with the utmost care, ensuring it reaches its destination safely and on time. Trust us to handle your cargo with dedication, reliability, and professionalism.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   </>
  )
}
