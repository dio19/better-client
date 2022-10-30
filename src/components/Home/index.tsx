import React from 'react';
import { useEffect } from "react"
import {
  NavLink
} from 'react-router-dom';
import "./index.scss"

const Home = () => {

  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
    var swiper = new Swiper(".method-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".method-slider__pagination",
        clickable: true,
      },
    })`
    document.body.appendChild(script)
  }, [])

  return (
    <div className="container">
            <div className="method-slider">
        <div className="method-slider__wrp swiper-wrapper">
          <div className="method-slider__item swiper-slide">
            <div className="method-slider__img">
              <img
                src="https://blog.hubspot.com/hubfs/customer-iinteraction.jpg"
                alt=""
              />
            </div>
            <div className="method-slider__content">
              <span className="method-slider__method">POST</span>
              <div className="method-slider__title">Add Customer</div>
              <div className="method-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?{" "}
              </div>
              <NavLink
                  to="/add-customer"
                  children={<div className="method-slider__button">GO TO THE FORM</div>}
              ></NavLink>
            </div>
          </div>
          <div className="method-slider__item swiper-slide">
            <div className="method-slider__img">
              <img
                src="https://blog.hubspot.com/hubfs/Align-Sales-Customer-Service.jpg"
                alt=""
              />
            </div>
            <div className="method-slider__content">
              <span className="method-slider__method">PUT/POST</span>
              <div className="method-slider__title">Update or delete Customer</div>
              <div className="method-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <NavLink
                  to="/update-or-delete"
                  children={<div className="method-slider__button">GO TO THE FORM</div>}
              ></NavLink>
            </div>
          </div>

          <div className="method-slider__item swiper-slide">
            <div className="method-slider__img">
              <img
                src="https://www.hubspot.com/hubfs/customer%20acquisition%20specialist_featured%20image.jpg"
                alt=""
              />
            </div>
            <div className="method-slider__content">
              <span className="method-slider__method">TABLE</span>
              <div className="method-slider__title">All Customers</div>
              <div className="method-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <NavLink
                  to="/customers"
                  children={<div className="method-slider__button">GO TO THE TABLE</div>}
              ></NavLink>
            </div>
          </div>
        </div>
        <div className="method-slider__pagination"></div>
      </div>
    </div>

  )
}

export default Home;
