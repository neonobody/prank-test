import axios from "axios";
import * as actionTypes from "./actionTypes";

function setPranks({ items, page, page_limit }) {
  return {
    type: actionTypes.SET_PRANKS,
    payload: {
      items,
      page,
      page_limit
    }
  };
}

export function fetchAllPranks(phrase = "", page = 1, page_length = 10) {
  console.log(phrase);
  return function (dispatch) {
    return axios.get(`https://admin.ownagepranks.com/api/app-prank-scripts.json?category_slug=view-all-pranks&amp;page=${page}&amp;page_length=${page_length}&amp;phrase=${phrase}`)
      .then(res => {
        dispatch(setPranks(res.data))
      });
  };
}
