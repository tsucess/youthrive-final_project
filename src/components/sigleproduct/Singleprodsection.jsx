import React from "react";
import "./Singleprodsection.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Singleprodsection = () => {
  return (
    <section className="container-fluid container_sigle-product">
      <div className="row">
        <div className="col-12 col-md-5 item-images">
          <div className="display-images">
            <span className="other-images">
              <div className="images">
                <img src="" alt="image-1" />
              </div>
              <div className="images">
                <img src="" alt="image-2" />
              </div>
              <div className="images">
                <img src="" alt="image-3" />
              </div>
              <div className="images">
                <img src="" alt="image-4" />
              </div>
            </span>
            <span className="main-image">
              <div className="image-container">
                <img src="" alt="MainImage" />
              </div>
            </span>
          </div>
        </div>
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-6 item-info">
          <h2 className="item-title">Asgaard sofa</h2>
          <h4 className="item-price">Rs. 250,000.00</h4>
          <p className="item-ratings">
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>{" "}
            | <span>5 customer Review</span>
          </p>
          <p className="desc">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="item-sizes">
            <p>Size</p>
            <span>
              <div className="size active">L</div>
              <div className="size">XL</div>
              <div className="size">XS</div>
            </span>
          </div>
          <div className="item-colors">
            <p>color</p>
            <span>
              <div className="color color-1"></div>
              <div className="color color-2"></div>
              <div className="color color-3"></div>
            </span>
          </div>
          <div className="call-to-actions">
            <div className="count">
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>
            <button className="btn">Add to cart</button>
            <button className="btn">Compare</button>
          </div>
          <hr />
          <table className="item-data">
            <tr>
              <td>SKU</td>
              <td>: SS001</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>: Sofas</td>
            </tr>
            <tr>
              <td>Tags</td>
              <td>: Sofa, Chair, Home, Shop</td>
            </tr>
            <tr>
              <td>Share</td>
              <td>: icon icon icon</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <span>Description</span>
          <span>Additional Information</span>
          <span>Reviews [5]</span>
        </div>
        <div className="col-12">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6"><img src="" alt="Sofa" /></div>
            <div className="col-12 col-md-6"><img src="" alt="Sofa" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singleprodsection;
