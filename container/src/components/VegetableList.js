import React from "react";

const vegetables = [
  "আলু", "পটল", "বেগুন", "লাউ", "ঝিঙে", "চিচিঙ্গা", "কুমড়ো", "করলা", "ফুলকপি", "বাঁধাকপি",
  "গাজর", "মূলা", "পালং শাক", "মিষ্টি আলু", "ঢেঁড়স", "শসা", "টমেটো", "পেঁয়াজ", "রসুন", "আদা"
];

const VegetableList = ({ addToCart }) => {
  return (
    <div>
      <h2>ভেজিটেবল লিস্ট</h2>
      <ul>
        {vegetables.map((veg, index) => (
          <li key={index}>
            {veg} <button onClick={() => addToCart(veg)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegetableList;
