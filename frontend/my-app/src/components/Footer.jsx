import React from 'react'
import '../component_styles/Footer.css' 

function Footer() {
  return (
    <>
    <footer class="footer">
  <div class="footer-content">
    <h2 class='title_footer'>FIDALGO</h2>
    <div class="footer-divider"></div>
    <div class="footer-social-links">
      <a href="#" target="_blank">Facebook</a>
      <span class="diamond">♦</span>
      <a href="#" target="_blank">Instagram</a>
      <span class="diamond">♦</span>
      <a href="#" target="_blank">Pinterest</a>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-rights">
      <span class="diamond">♦</span>
      <p>© 2024 Made By Amaan</p>
      <span class="diamond">♦</span>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer