function Footer() {
  function linkedin() {
    window.location.href =
      "https://www.linkedin.com/in/prichith-c-p-3047a7220/";
  }
  function github() {
    window.location.href = "https://github.com/prichith";
  }
  function instagram() {
    window.location.href = "https://www.instagram.com/prichithcp/?hl=en";
  }
  function facebook() {
    window.location.href = "https://www.facebook.com/prichith.cp.50";
  }

  return (
    <footer className="container">
      <div className="aboutMe">
        <div className="footerContent"></div>
        <p>Created by prichith cp</p>
        <div className="socialmedia">
          <i onClick={linkedin} className="fa-brands fa-linkedin-in"></i>
          <i onClick={facebook} className="fa-brands fa-facebook"></i>
          <i onClick={github} className="fa-brands fa-square-github"></i>
          <i onClick={instagram} className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
