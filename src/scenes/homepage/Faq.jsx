import plusIcon from "../../assets/plus-shape.svg";

export default function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="faq-heading">
              <h2>Faq</h2>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="faq-content">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <div class="plus-shapes">
                    <img src={plusIcon} />
                    <img src={plusIcon} />
                  </div>
                  <h3 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is Converge?
                    </button>
                  </h3>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        No, Converge does not hold custody of your funds. Our
                        platform is custody-free, meaning you retain full
                        control over your assets at all times. We provide
                        professional-grade tools and seamless access to multiple
                        markets without taking possession of your funds,
                        ensuring security and transparency throughout your
                        trading experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="plus-shapes">
                    <img src={plusIcon} />
                    <img src={plusIcon} />
                  </div>
                  <h3 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Does Converge hold custody of funds?
                    </button>
                  </h3>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        No, Converge does not hold custody of your funds. Our
                        platform is custody-free, meaning you retain full
                        control over your assets at all times. We provide
                        professional-grade tools and seamless access to multiple
                        markets without taking possession of your funds,
                        ensuring security and transparency throughout your
                        trading experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="plus-shapes">
                    <img src={plusIcon} />
                    <img src={plusIcon} />
                    <img src={plusIcon} />
                    <img src={plusIcon} />
                  </div>
                  <h3 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Which markets can i trade on Converge?
                    </button>
                  </h3>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        No, Converge does not hold custody of your funds. Our
                        platform is custody-free, meaning you retain full
                        control over your assets at all times. We provide
                        professional-grade tools and seamless access to multiple
                        markets without taking possession of your funds,
                        ensuring security and transparency throughout your
                        trading experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
