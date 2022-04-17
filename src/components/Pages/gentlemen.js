import React from "react";
import Footer from "../footer/footer";
import Menu from "../Navbar/navbar";
import "./gentlemen.css";

const Gentlemen = () => {
  return (
    <div>
      <Menu />
      <section class="">
        <div class=" d-flex justify-content-center align-items-center g1">
          <div class="container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 float-left">
              <h5 class="text-white display-6">
                GET YOUR SUIT STYLED YOUR WAY
              </h5>
              <h3 class="text-white lead py-2">
                Be the sharpest looking gentleman in the room.
              </h3>
              <a href="/shop" alt="image" class="btn btn-dark btn-sm">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="container">
          <h1 class="text-center">How It Works</h1>
          <div class="row text-center py-3">
            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-2">
              <h1>
                <i class="bi bi-calendar-plus"></i>
              </h1>
              <h2 class="py-1">Set a Date</h2>
              <h3 class="lead">
                Choose a date and time that works for you, then we’ll make sure
                we get everything just right.
              </h3>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-2">
              <h1>
                <i class="bi bi-chat"></i>
              </h1>
              <h2 class="py-1">Get Style Advice</h2>
              <h3 class="lead">
                With a little help from an expert Guide, you’ll find the perfect
                fabric, style, and color with ease.
              </h3>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-2">
              <h1>
                <i class="bi bi-cart-check"></i>
              </h1>
              <h2 class="py-1">Find Your Fit</h2>
              <h3 class="lead">
                We’ll run through our fits and sizes to make sure your suit
                looks incredible from every angle.
              </h3>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-2">
              <h1>
                <i class="bi bi-box-seam"></i>
              </h1>
              <h2 class="py-1">Leave Worry-Free</h2>
              <h3 class="lead">
                All orders are shipped to you on our dime. And if you change
                your mind, returns & exchanges are also free.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <div>
          <div class="row text-center d-flex justify-content-center align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <img
                src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1aXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 py-5">
              <h5 class=" display-6">OWNABLE QUALITY</h5>
              <h3 class=" lead py-2">
                The right suit should be one you want to have and to hold
                forever. With impeccable craftsmanship worth investing in, you
                can find the “one” you’ll wear more than once.
              </h3>
              <a href="/shop" alt="image" class="btn btn-dark btn-sm">
                SHOP SUITS & TUXEDOS
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="row text-center d-flex justify-content-center align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12 py-5">
            <h5 class=" display-6">PERSONALIZED SERVICE</h5>
            <h3 class=" lead py-2">
              Come see us in-person and an expert Guide will help you find the
              perfect fabric, style, and color.
            </h3>
            <a href="/shop" alt="image" class="btn btn-dark btn-sm">
              BOOK A FITTING
            </a>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <img
              src="https://images.unsplash.com/photo-1633655442356-ab2dbc69c772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFpbG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              class="img-fluid"
            />
          </div>
        </div>
      </section>
      <section class="container">
        <div>
          <div class="row text-center d-flex justify-content-center align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 pt-2">
              <img
                src="https://images.unsplash.com/photo-1633193231840-e8fcfcead786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1aXQlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 py-5">
              <h5 class=" display-6">Fit & Sizes</h5>
              <h3 class=" lead py-2">
                We strive to offer a fit and size combo for everyone so entire
                you can look dashing in matching suits. Bonus: groups get 20%
                off at the Guideshop. Come one, come all.
              </h3>
              <a href="/shop" alt="image" class="btn btn-dark btn-sm">
                FIND A GUIDESHOP LOCATION
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-5">
        <Footer />
      </section>
    </div>
  );
};

export default Gentlemen;
