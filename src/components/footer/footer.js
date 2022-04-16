import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4">
            <h5 class="mb-3">O.A FW</h5>
            <p>Legendary Clothing Brand</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="mb-3">Brand</h5>
            <ul class="list-unstyled mb-0">
              <li class="mb-1">
                <a href="#!" class="text-dark">
                  About
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="text-dark">
                  Contact Us
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="text-dark">
                  Guideshop Locations
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h5 class="mb-3">Opening Hours</h5>
            <table class="table">
              <tbody>
                <tr>
                  <td>Mon - Fri</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Sat - Sun</td>
                  <td>8am - 1pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="text-center">@2022 O.A FW. All Rights Reserved.</div>
    </footer>
  );
};
export default Footer;
