import React from 'react'

function Footer() {
  return (
    <footer>
    <div class="footer-content">
        <div class="company-info">
            <h3>ShopSphere</h3>
            <p>Mumbai,India</p>
            <p>Phone: +123456789</p>
            <p>Email: shopsphere@company.com</p>
        </div>
        <div class="social-links">
            <a href="#" target="_blank" style={{textDecoration:'none', color:'black', margin:'5vh'}}>Facebook</a>
            <a href="#" target="_blank" style={{textDecoration:'none', color:'black', margin:'5vh'}}>Twitter</a>
            <a href="#" target="_blank" style={{textDecoration:'none', color:'black', margin:'5vh'}}>Instagram</a>
        </div>
    </div>
    <div class="copyright">
        &copy; 2024 Company Name. All rights reserved.
    </div>
</footer>
  )
}

export default Footer