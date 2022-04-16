import React from "react";

const Cart = () => {
  return (
    <div>
      <section class="h-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p class="mb-0">
                    <span class="text-muted">Sort by:</span>{" "}
                    <a
                      href="#!"
                      class="text-body"
                      style={{ textDecoration: "none" }}
                    >
                      Price <i class="bi bi-caret-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        class="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span class="text-muted">Size: </span>M{" "}
                        <span class="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i class="bi bi-dash"></i>
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        class="form-control form-control-sm"
                      />

                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0 py-3">$59.00</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger">
                        <h2>
                          <i class="bi bi-trash"></i>
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        class="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span class="text-muted">Size: </span>M{" "}
                        <span class="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i class="bi bi-dash"></i>
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        class="form-control form-control-sm"
                      />

                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0 py-3">$59.00</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger">
                        <h2>
                          <i class="bi bi-trash"></i>
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        class="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span class="text-muted">Size: </span>M{" "}
                        <span class="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i class="bi bi-dash"></i>
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        class="form-control form-control-sm"
                      />

                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0 py-3">$59.00</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger">
                        <h2>
                          <i class="bi bi-trash"></i>
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        class="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span class="text-muted">Size: </span>M{" "}
                        <span class="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i class="bi bi-dash"></i>
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        class="form-control form-control-sm"
                      />

                      <button
                        class="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0 py-3">$59.00</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger">
                        <h2>
                          <i class="bi bi-trash"></i>
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-4">
                <div class="card-body p-4 d-flex flex-row">
                  <div class="form-outline flex-fill">
                    <input
                      type="text"
                      id="form1"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" htmlFor="form1">
                      Discount code
                    </label>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-warning btn-sm ms-3"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <a
                    href="/payment"
                    type="button"
                    class="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="text-center">@2022 O.A FW. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default Cart;
