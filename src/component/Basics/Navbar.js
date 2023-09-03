import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
    <div className="container">
    <div className="row">
      <nav className="navbar">
        <div className="col">
        </div>
        <div className="col bg_color">
          <div className="btn-group">
              {menuList.map((curElem) => {
                return (
                  <button
                    className="btn-group__item"
                    onClick={() => filterItem(curElem)}>
                    {curElem}
                  </button>
                );
              })}
            </div>
          </div>
        <div className="col">   
        </div>
      </nav>
      </div>
    </div>
    </>
  );
};

export default navbar;
