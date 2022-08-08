import React from "react";

// const Mobile = ({ image, name, price, highlights, link }) => {
//   return (
//     <section>
//       <img src={image} alt="" />
//       <h1> {name} </h1>
//       <h4> {price} </h4>
//       <p> {highlights} </p>
//     </section>
//   );
// };

const Mobile = ({ image, name, price, highlights, link }) => {
  return (
    <section>
      <div class="wrapper">
        <div class="product-img">
          <img src={image} height="420" width="327" alt="" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{name}</h1>
            <br />
            <p>{highlights}</p>
          </div>
          <div class="product-price-btn">
            <p>
              <span>{price}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
