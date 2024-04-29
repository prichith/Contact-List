function Footer(){
    return(
        <footer className="container">
        <div className="aboutMe">
          <div className="footerContent"></div>
          <p>Created by prichith cp</p>
          <div className="socialmedia">
            <i onClick="linkedin()" className="fa-brands fa-linkedin-in"></i>
            <i onClick="facebook()" className="fa-brands fa-facebook"></i>
            <i onClick="github()" className="fa-brands fa-square-github"></i>
            <i onClick="instagram()" className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </footer>
    )
}
export default Footer;