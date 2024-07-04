import { IoShareSocialOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";
import Paginations from "../pagination/Paginations"
import { Link } from "react-router-dom";
import {productData} from "../imagedata/Imagedata";

const Products = ({page, title}) => {
  
  const initial = page == "home" ? 4 : 8;
  const initialPagination = page === "home" ? 8 : 4;
  
// pagination feature 
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostPerPage] = useState(initialPagination);

const lastPostIndex = currentPage * postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage
const currentPost = productData && productData.slice(firstPostIndex, lastPostIndex)




  const [showMore, setShowMore] = useState(initial);

  return (
    <div className="container-fluid container_products">
      <div className="header"><h2 className="title">{title}</h2></div>
      <div className="row">
        {currentPost &&
          currentPost.slice(0, showMore).map((item, key) => {
            return (
              <div className="col-12 col-md-3" key={key}>
                  <Link to={`../singleproduct/${item.id}`}>
                        <div className="card">
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.sub_title}</p>
                      <p className="card-text price">
                        <span className="fw-bold">Rp {item.price}</span> 
                        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <small className="text-body-secondary">{item.discount && "Rp "+item.discount} </small>
                      </p>
                    </div>
                      { item.percentage !== "" &&
                        <div className= {item.percentage === "New"? "angle_tag new_tag" : "angle_tag percentage_tag" }>{item.percentage}</div>}
                          <div className="card_hover">
                            <button type="button" className="btn btn-lg hover_btn">Add to cart</button>
                            <br />
                            <span>
                              <Link to="../" className="btn">
                                  <IoShareSocialOutline className="icon" />&nbsp;Share
                              </Link>
                              <Link to="../compare" className="btn">
                                  <MdCompareArrows className="icon" />&nbsp;compare
                              </Link>
                              <button className="btn">
                                  <IoIosHeartEmpty className="icon" />&nbsp;Like
                              </button>
                            </span>
                          </div>
                        </div>
                  </Link>
              </div>

            );
          })
          }
      </div>
       <div className="row">
     {
       page === "home" && 
        <button className="btn btn-lg show_more_btn" onClick={() => setShowMore(showMore > 4 ? 4 : productData.length)}>{showMore > 4 ? "Show Less" : "Show More"} </button>
     }
     {
     page === "shop" &&
        <Paginations  
            totalPosts = {productData && productData.length} 
            postsPerPage = {postsPerPage}
            setCurrentPage= {setCurrentPage}
            currentPage={currentPage}
            
            />
        } 
      </div>
    </div>
  );
};

export default Products;
