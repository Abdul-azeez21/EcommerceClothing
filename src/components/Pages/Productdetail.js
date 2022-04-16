import React from "react";
import "./Productdetail.css";

const Product = () => {
  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Product</h3>
            <h6 class="card-subtitle">Product</h6>
            <div class="row">
              <div class="col-lg-5 col-md-5 col-sm-12">
                <div class="white-box text-center">
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-sm-12">
                <h4 class="box-title mt-5">Product description</h4>
                <p>
                  Lorem Ipsum available,but the majority have suffered
                  alteration in some form,by injected humour,or randomised words
                  which don't look even slightly believable.but the majority
                  have suffered alteration in some form,by injected humour
                </p>
                <h2 class="mt-5 py-3">
                  $59.99<small class="text-success">(20% off)</small>
                </h2>
                <a
                  href="/cart"
                  class="btn btn-dark btn-rounded px-4 mx-3"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Add to cart"
                >
                  <i class="bi bi-cart"></i>
                </a>
                <a href="/payment" class="btn btn-primary btn-rounded">
                  Buy Now
                </a>
                <h3 class="box-title mt-5">Key Highlights</h3>
                <ul class="list-unstyled">
                  <li>
                    <i class="bi bi-check2"></i>Durable materials
                  </li>
                  <li>
                    <i class="bi bi-check2"></i>Designed to fit perfectly
                  </li>
                  <li>
                    <i class="bi bi-check2"></i>Premium aesthetics
                  </li>
                </ul>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h3 class="box-title mt-5">General Info</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-product">
                    <tbody>
                      <tr>
                        <td width="390">Color</td>
                        <td>White</td>
                      </tr>
                      <tr>
                        <td>Material</td>
                        <td>Cotton</td>
                      </tr>
                      <tr>
                        <td>Size</td>
                        <td>Medium</td>
                      </tr>
                      <tr>
                        <td>Fit</td>
                        <td>Broad</td>
                      </tr>
                      <tr>
                        <td>Care</td>
                        <td>
                          Machine wash cold with like colors | Do not bleach |
                          Tumble dry low | Remove promptly | Cool iron if needed
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
