import React from "react";
import "./Shop.css";
import Menu from "../Navbar/navbar";
import Footer from "../footer/footer";

const Shop = () => {
  return (
    <div class="container">
      <Menu />
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <form>
            <div class="well">
              <div class="row">
                <div class="col-sm-12">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search Products..."
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form class="shop__filter py-3">
            <h3 class="headline py-2">
              <span>Price</span>
            </h3>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__price"
                id="shop-filter-price_1"
              />
              <label htmlFor="shop-filter-price_1">Under $25</label>
            </div>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__price"
                id="shop-filter-price_1"
              />
              <label htmlFor="shop-filter-price_1">Under $25</label>
            </div>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__price"
                id="shop-filter-price_1"
              />
              <label htmlFor="shop-filter-price_1">Under $25</label>
            </div>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__price"
                id="shop-filter-price_1"
              />
              <label htmlFor="shop-filter-price_1">Under $25</label>
            </div>
            <div class="form-group shop-filter__price">
              <div class="row">
                <div class="col-xs-12 col-sm-4">
                  <label
                    htmlFor="shop-filter-price_from"
                    class="sr-only"
                  ></label>
                  <input
                    id="shop-filter-price_from"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="From"
                    disabled=""
                  />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <label htmlFor="shop-filter-price_to" class="sr-only"></label>
                  <input
                    id="shop-filter-price_to"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="To"
                    disabled=""
                  />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <button
                    type="submit"
                    class="btn btn-block btn-md btn-info"
                    disabled=""
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
            <h3 class="headline py-2">
              <span>Size</span>
            </h3>
            <div class="checkbox py-1">
              <input type="checkbox" value="" id="shop-filter-checkbox_1" />
              <label htmlFor="shop-filter-checkbox_1">XS</label>
            </div>
            <div class="checkbox py-1">
              <input type="checkbox" value="" id="shop-filter-checkbox_2" />
              <label htmlFor="shop-filter-checkbox_2">Small</label>
            </div>
            <div class="checkbox py-1">
              <input type="checkbox" value="" id="shop-filter-checkbox_3" />
              <label htmlFor="shop-filter-checkbox_3">Medium</label>
            </div>
            <div class="checkbox py-1">
              <input type="checkbox" value="" id="shop-filter-checkbox_4" />
              <label htmlFor="shop-filter-checkbox_4">Large</label>
            </div>
            <div class="checkbox py-1">
              <input type="checkbox" value="" id="shop-filter-checkbox_5" />
              <label htmlFor="shop-filter-checkbox_5">XL</label>
            </div>
            <h3 class="headline py-2">
              <span>Material</span>
            </h3>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__radio"
                id="shop-filter-radio_1"
              />
              <label htmlFor="shop-filter-radio_1">100% Cotton</label>
            </div>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__radio"
                id="shop-filter-radio_2"
              />
              <label htmlFor="shop-filter-radio_2">Wool</label>
            </div>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__radio"
                id="shop-filter-radio_3"
              />
              <label htmlFor="shop-filter-radio_3">Leather</label>
            </div>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__radio"
                id="shop-filter-radio_4"
              />
              <label htmlFor="shop-filter-radio_4">Silk</label>
            </div>
            <div class="radio py-1">
              <input
                type="radio"
                name="shop-filter__radio"
                id="shop-filter-radio_5"
              />
              <label htmlFor="shop-filter-radio_5">Not specified</label>
            </div>
            <h3 class="headline py-2">
              <span>Colors</span>
            </h3>
            <div class="shop-filter__color">
              <input
                type="text"
                id="shop-filter-color_1"
                data-input-color="black"
              />
              <label
                htmlFor="shop-filter-color_1"
                style={{ backgroundColor: "black" }}
              ></label>
            </div>
            <div class="shop-filter__color">
              <input
                type="text"
                id="shop-filter-color_2"
                data-input-color="gray"
              />
              <label
                htmlFor="shop-filter-color_2"
                style={{ backgroundColor: "gray" }}
              ></label>
            </div>
            <div class="shop-filter__color">
              <input
                type="text"
                id="shop-filter-color_3"
                data-input-color="brown"
              />
              <label
                htmlFor="shop-filter-color_3"
                style={{ backgroundColor: "brown" }}
              ></label>
            </div>
            <div class="shop-filter__color">
              <input
                type="text"
                id="shop-filter-color_4"
                data-input-color="beige"
              />
              <label
                htmlFor="shop-filter-color_4"
                style={{ backgroundColor: "beige" }}
              ></label>
            </div>
            <div class="shop-filter__color">
              <input
                type="text"
                id="shop-filter-color_5"
                data-input-color="white"
              />
              <label
                htmlFor="shop-filter-color_5"
                style={{ backgroundColor: "white" }}
              ></label>
            </div>
          </form>
        </div>

        <div class="col-sm-8 col-md-9">
          <ul class="shop__sorting">
            <li class="active">
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Newest</a>
            </li>
            <li>
              <a href="#">Bestselling</a>
            </li>
            <li>
              <a href="#">Price (low)</a>
            </li>
            <li>
              <a href="#">Price (high)</a>
            </li>
          </ul>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="shop__thumb">
                <a href="/product">
                  <div class="shop-thumb__img">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <h5 class="shop-thumb__title">Product Title</h5>
                  <div class="shop-thumb__price">
                    <span class="shop-thumb-price_old">$80.99 </span>
                    <span class="shop-thumb-price_new">$59.99</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="shop__thumb">
                <a href="/product">
                  <div class="shop-thumb__img">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <h5 class="shop-thumb__title">Product Title</h5>
                  <div class="shop-thumb__price">$59.99</div>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="shop__thumb">
                <a href="/product">
                  <div class="shop-thumb__img">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <h5 class="shop-thumb__title">Product Title</h5>
                  <div class="shop-thumb__price">$59.99</div>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="shop__thumb">
                <a href="/product">
                  <div class="shop-thumb__img">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <h5 class="shop-thumb__title">Product Title</h5>
                  <div class="shop-thumb__price">$59.99</div>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="shop__thumb">
                <a href="/product">
                  <div class="shop-thumb__img">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <h5 class="shop-thumb__title">Product Title</h5>
                  <div class="shop-thumb__price">$59.99</div>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="shop__thumb">
                <a href="/product">
                  <div class="shop-thumb__img">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <h5 class="shop-thumb__title">Product Title</h5>
                  <div class="shop-thumb__price">$59.99</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Shop;
