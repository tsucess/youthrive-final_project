import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  return (
    <section className="container-fluid container_breadcrumbs">
        <div className="row p-0 m-0">
            <col-12>
                <span>Home &nbsp; <FaAngleRight /> &nbsp; Shop  &nbsp; | &nbsp; <b>Asgaard Sofa</b></span>
            </col-12>
        </div>
    </section>
  )
}

export default Breadcrumbs