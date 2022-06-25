import "./index.css";

function About() {
  return (
    <div>
      <img
        src="https://broadview.org/wp-content/uploads/2019/08/empathy.jpg"
        alt=""
        className="banner-image"
      ></img>
      <h1 className="center"> ABOUT US </h1>
      <div className="rectangle">
        <h2 className="heading-two"> A helping hand. </h2>
        <p className="paragraph-main">
          {" "}
          After experiencing the School of Code bootcamp ourseleves, our{" "}
          <br></br>
          team decided to create a product to aid future bootcampers. <br></br>{" "}
          We saw how difficult doing an intense 16 week bootcamp was, <br></br>{" "}
          espically mentally. So The Happy Coder was born to do exactly{" "}
          <br></br> what it's named, produce a happy coder. <br></br>
          <br></br>
          We are here to support your wellbeing and ensure you have a <br></br>{" "}
          great experience at The School of Code Bootcamp. <br></br>
          We undertsand this process isn't easy so we will created <br></br>{" "}
          This app to aid your journey. <br></br>
          <br></br>
          This apps mission is to make the coding jounrey at the bootcamp{" "}
          <br></br> a positive and pleasent process that allows you blossom.{" "}
          <br></br>
          <br></br>
          You've got this coder!
        </p>
      </div>
    </div>
  );
}

export default About;
