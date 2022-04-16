import React from "react";
import Menu from "../Navbar/navbar";
import Footer from "../footer/footer";
import "./homepage.css";

const Homepage = () => {
  return (
    <div class="body">
      <Menu />
      <section class="">
        <div class=" d-flex justify-content-center align-items-center image">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <h1 class="text-white display-2 py-3">O.A FW</h1>
            <a href="/shop" alt="image" class="btn btn-dark">
              Shop New Arrivals
            </a>
          </div>
        </div>
      </section>
      <section class="py-4">
        <div class=" container text-center">
          <h2 class="py-3 border-bottom">O.A FW</h2>
          <h5 class="">
            *Looking for a change in wardrobe?! This legendary Clothing brand is
            your go-to for the best fashion and accessories, trust. From iconic
            denim cuts, cozy knits and sport gears to fire suits, it's all here
            for you to enjoy. Check it out!*
          </h5>
        </div>
      </section>
      <section class="py-3 container-fluid">
        <div class="d-flex align-items-center justify-content-center image1 pr-5">
          <div class="container">
            <h1 class="text-white py-3 display-5">Shop from our Collections</h1>
            <p class="text-white display-6">
              O.A FW has Men, Women & Children Collection you can choose from.
            </p>
            <a href="/shop" alt="image" class="btn btn-dark ">
              Shop Collections
            </a>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid">
          <h2 class="pb-3">Featured Categories</h2>
          <div class="row">
            <a href="/shop" class="col col-md-6 col-sm-12 col-xs-12">
              <div>
                <div class="cozy"></div>
                <h3 class="image-text display-6">Cozy Outfits</h3>
              </div>
            </a>
            <a href="/shop" class="col col-md-6 col-sm-12 col-xs-12">
              <div>
                <div class="sport"></div>
                <h3 class="image-text display-6">Sports Gear</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="container-fluid py-5">
        <h2 class="pb-2 pt-4">The Gentlemen's Hall</h2>
        <div class="suit d-flex justify-content-center align-items-center">
          <div class="row container">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <h3 class="display-5 text-white">Need a Suit?</h3>
              <p class="text-white display-6">
                Book an appointment at a Guideshop and get a nicely tailored
                suit.
              </p>
              <a href="/gentlemen" alt="image" class="btn btn-dark">
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid py-5">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h2 class="text-center py-2">Free Shipping, Returns & Exchanges</h2>
            <p class="text-center lead text=-muted">
              We offer free shipping, exchanges and returns both ways on all
              orders in Nigeria
            </p>
            <h4 class="text-center py-2">See Details</h4>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h2 class="text-center py-2">Fast & Friendly Costumer Service</h2>
            <p class="text-center lead">
              If you have comments, questions, or issues, our Guides are always
              on call. Need help? Contact a Guide.
            </p>
            <h4 class="text-center py-2">Contact Us</h4>
          </div>
        </div>
      </section>
      <section class="pt-5">
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
