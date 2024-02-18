const Footer = () => {
  return (
    <footer>
      <div className="categories-container">
        <div className="footer-category">
          <h2>Company</h2>
          <p>About us</p>
          <p>Contact us</p>
          <p>Careers</p>
          <p>Press</p>
        </div>

        <div className="footer-category">
          <h2>Product</h2>
          <p>Features</p>
          <p>Pricing</p>
          <p>News</p>
          <p>Help desk</p>
          <p>Support</p>
        </div>

        <div className="footer-category">
          <h2>Services</h2>
          <p>Digital Marketing</p>
          <p>Content Writing</p>
          <p>SEO for Business</p>
          <p>UI Design</p>
        </div>

        <div className="footer-category">
          <h2>Legal</h2>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Return Policy</p>
        </div>

        <div className="footer-category">
          <h2>Contact us</h2>
          <p>support@brainwave.io</p>
          <p>+133-394-3439-1435</p>
        </div>
      </div>

      <div className="footer-meta">
        <div className="copyright">
          2024 Copyright, All Right Reserved, Made by Seju_ui_ux with 💙
        </div>
        <div className="social-icons">
          <img
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
            height={30}
          ></img>
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
            height={30}
          ></img>
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
            height={30}
          ></img>
          <img src="https://pngimg.com/d/linkedIn_PNG14.png" height={30}></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
