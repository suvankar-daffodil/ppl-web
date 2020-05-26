import React from "react";
import { useEffect } from "react";
import $ from "jquery";

const PopUp = props => {
  return (
    <div className="popup_sec" id="pop_forgt">
      <div
        className="clos_btn"
        onClick={() => {
          $("#pop_forgt").toggle("slide");
          setTimeout(() => {
            props.setPopUpData(null);
          }, 100);
        }}
      >
        <img src="/images/clos.png" alt="" id="clos_pop" />
      </div>
      <div className="pop_hdr">{props.title}</div>
      <div className="man_contnt">
        <span>{props.message}</span>
        <input
          type="submit"
          value="Ok"
          onClick={() => {
            $("#pop_forgt").toggle("slide");
            setTimeout(() => {
              props.setPopUpData(null);
            }, 100);
          }}
        />
      </div>
    </div>
  );
};

export default PopUp;
