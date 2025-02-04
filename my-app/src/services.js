import React from 'react'
import './services.css';

export default function Services() {
  return (
 
    <>
       <div class="svc-container" style={{marginBottom:'70px'}}>
    <h2 class="svc-title">TOP SERVICES</h2>  
    <div class="svc-grid">
        <div class="svc-card">
            <div class="svc-icon"><i class="fa-solid fa-link"></i></div>
            <div class="svc-text">Connecting Businesses</div>
        </div>

        <div class="svc-card">
            <div class="svc-icon"><i class="fa-regular fa-folder"></i></div>
            <div class="svc-text">Resource Sharing</div>
        </div>

        <div class="svc-card">
            <div class="svc-icon"><i class="fa-solid fa-handshake"></i></div>
            <div class="svc-text">Partnership Development</div>
        </div>

        <div class="svc-card">
            <div class="svc-icon"><i class="fa-solid fa-map-location-dot"></i></div>
            <div class="svc-text">Transportation Solutions</div>
        </div>

        <div class="svc-card">
            <div class="svc-icon"><i class="fa-solid fa-boxes-stacked"></i></div>
            <div class="svc-text">Warehousing</div>
        </div>

        <div class="svc-card">
            <div class="svc-icon"><i class="fa-solid fa-truck-fast"></i></div>
            <div class="svc-text">Delivery & Distribution</div>
        </div>

        <div class="svc-card">
            <div class="svc-icon"><i class="fa-solid fa-chart-line"></i></div>
            <div class="svc-text">Real-time Tracking & Analytics</div>
        </div>

        <div class="svc-card">
            <div class="svc-icon"><i class="fa-solid fa-leaf"></i></div>
            <div class="svc-text">Green Logistics</div>
        </div>
    </div>
</div>
 </>
  )
}
