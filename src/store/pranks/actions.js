import axios from "axios";
import queryString from "query-string";

import * as actionTypes from "./actionTypes";

/**
 * An object containing prank details.
 * @typedef {object} Prank
 * @property {string?} character
 * @property {string} description
 * @property {number} dislikes
 * @property {number} favourites
 * @property {number} id
 * @property {string} image
 * @property {string} image_mobile
 * @property {string} image_small
 * @property {number} likes
 * @property {number} prank_of_the_week
 * @property {number} sent
 * @property {string} share_text
 * @property {string} slug
 * @property {string} tags
 * @property {string} title
 * @property {number} views
 * @property {Voice[]} voices
 */

/**
 * Set loading state true/false
 * @param {boolean} value
 */
function setPranksLoading(value) {
  return {
    type: actionTypes.SET_PRANKS_LOADING,
    payload: { value },
  };
}

/**
 * Set pranks, page, page_limit
 * @param {{ items: Prank[], page: number, page_limit: number}} response
 */
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

/**
 * @typedef {object} PrankFilter
 * @property {string} category_slug
 * @property {string?} character_slug
 * @property {string[]} order
 * @property {number} page
 * @property {number} page_length
 * @property {string?} phrase
 */

/**
 * Fetch Pranks
 * @param {PrankFilter} options Filter params
 */
export function fetchAllPranks(options) {
  return function (dispatch) {
    dispatch(setPranksLoading(true));

    const query = queryString.stringify(options);

    return axios.get(`https://admin.ownagepranks.com/api/app-prank-scripts.json?${query}`)
      .then(res => {
        dispatch(setPranks(res.data))
      })
      .catch(err => {
        console.log("failed to fetch Pranks", err);
      })
      .finally(() => {
        dispatch(setPranksLoading(false));
      });
  };
}
