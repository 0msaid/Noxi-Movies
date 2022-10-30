import React from "react";

export default function About() {
  return (
    <>
      <div className="carouselPart py-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <div className="carouselContent text-center w-50 m-auto">
                <i className="fas fa-quote-left text-danger fa-2x"></i>
                <div className="myImage">
                  <img
                    src="imgs/testi/mohamed2.jpg"
                    alt="Profile"
                    className="img-fluid rounded-circle w-25 "
                  />
                </div>
                <p>
                  Front-End Web Developer with 1 years of experience in
                  front-end web developer, I have good knowledge with javascript
                  also framework like angular And react js , Also I have strong
                  knowledge in html and css and bootstrap I can do responsive
                  website
                </p>
                <h6 className="my-5">Mohamed Ashery</h6>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="carouselContent text-center w-50 m-auto">
                <i className="fas fa-quote-left text-danger fa-2x"></i>
                <div className="myImage">
                  <img
                    src="imgs/testi/mohamed3.jpg"
                    alt="Profile"
                    className="img-fluid rounded-circle w-25"
                  />
                </div>
                <p>
                  Front-End Web Developer with 1 years of experience in
                  front-end web developer, I have good knowledge with javascript
                  also framework like angular And react js , Also I have strong
                  knowledge in html and css and bootstrap I can do responsive
                  website
                </p>
                <h6 className="my-5">Mohamed Ashery</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carouselContent text-center w-50 m-auto">
                <i className="fas fa-quote-left text-danger fa-2x"></i>
                <div className="myImage">
                <img
                    src="imgs/testi/mohamed1.jpg"
                    alt="Profile"
                    className="img-fluid rounded-circle w-25"
                  />
                </div>
                <p>
                  Front-End Web Developer with 1 years of experience in
                  front-end web developer, I have good knowledge with javascript
                  also framework like angular And react js , Also I have strong
                  knowledge in html and css and bootstrap I can do responsive
                  website
                </p>
                <h6 className="my-5">Mohamed Ashery</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
