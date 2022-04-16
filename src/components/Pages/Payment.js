import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div>
      <div class="padding">
        <div class="row">
          <div class="container-fluid d-flex justify-content-center">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div class="card">
                <div class="card-header">
                  <div class="row">
                    <div class="col-md-6">
                      <span>CREDIT/DEBIT CARD PAYMENT</span>
                    </div>
                    <div
                      class="col-md-6 text-right"
                      style={{ marginTop: "-5px" }}
                    >
                      <img src="https://img.icons8.com/color/36/000000/visa.png" />
                      <img src="https://img.icons8.com/color/36/000000/mastercard.png" />
                      <img src="https://img.icons8.com/color/36/000000/amex.png" />
                    </div>
                  </div>
                </div>
                <div class="card-body" style={{ height: "350px" }}>
                  <div class="form-group">
                    <label htmlFor="cc-number" class="control-label py-2">
                      CARD NUMBER
                    </label>
                    <input
                      id="cc-number"
                      type="tel"
                      class="input-lg form-control cc-number"
                      autoComplete="cc-number"
                      placeholder="•••• •••• •••• ••••"
                      required
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label htmlFor="cc-exp" class="control-label py-2">
                          CARD EXPIRY
                        </label>
                        <input
                          id="cc-exp"
                          type="tel"
                          class="input-lg form-control cc-exp"
                          autoComplete="cc-exp"
                          placeholder="•• / ••"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label htmlFor="cc-cvc" class="control-label py-2">
                          CARD CVV
                        </label>
                        <input
                          id="cc-cvc"
                          type="tel"
                          class="input-lg form-control cc-cvc"
                          autoComplete="off"
                          placeholder="••••"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label htmlFor="numeric" class="control-label py-2">
                      CARD HOLDER NAME
                    </label>
                    <input type="text" class="input-lg form-control" />
                  </div>
                  <div class="form-group pt-4">
                    <input
                      value="MAKE PAYMENT"
                      type="button"
                      class="btn btn-success btn-lg form-control"
                      style={{ fontSize: ".8rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="text-center">@2022 O.A FW. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default Payment;
