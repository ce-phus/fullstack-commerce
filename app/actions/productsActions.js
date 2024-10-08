import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,

    PRODUCTS_INDEX_REQUEST,
    PRODUCTS_INDEX_SUCCESS,
    PRODUCTS_INDEX_FAIL,

    SEARCH_PRODUCTS_REQUEST,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_FAIL,

    CATEGORY_DETAIL_REQUEST,
    CATEGORY_DETAIL_SUCCESS,
    CATEGORY_DETAIL_FAIL,

    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,

    PRODUCT_REVIEW_REQUEST,
    PRODUCT_REVIEW_SUCCESS,
    PRODUCT_REVIEW_FAIL,

    CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_SUCCESS, 
    CATEGORY_LIST_FAIL,

} from "../constant/index"

import axios from "axios"


const apiUrl  = process.env.EXPO_PUBLIC_API_URL
// console.log("API URL: ", apiUrl );


export const allproducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        const { data } = await axios.get(`${apiUrl }/home/allproducts/`);

        dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: ALL_PRODUCTS_FAIL, payload: error.message });
    }
};

export const getProductIndexList = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCTS_INDEX_REQUEST });

        const response = await axios.get(`${apiUrl }/home/index/`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = response.data;
        // console.log("API Response: ", data);

        dispatch({ type: PRODUCTS_INDEX_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCTS_INDEX_FAIL, payload: error.message });
    }
};

export const searchProducts = (query, instock, priceFrom, priceTo, sorting) => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_PRODUCTS_REQUEST });

        const { data } = await axios.get(`${apiUrl }/store/search/`, {
            params: {
                query,
                instock,
                price_from: priceFrom,
                price_to: priceTo,
                sorting
            }
        });

        dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: SEARCH_PRODUCTS_FAIL, payload: error.message });
    }
};

export const getCategoryDetail = (slug) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_DETAIL_REQUEST });

        const { data } = await axios.get(`${apiUrl }/store/category/${slug}/`);

        dispatch({ type: CATEGORY_DETAIL_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: CATEGORY_DETAIL_FAIL, payload: error.message });
    }
};

export const getProductDetail = (category_slug, slug) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST });

        const { data } = await axios.get(`${apiUrl }/store/${category_slug}/${slug}/`);

        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.message });
    }
};


export const submitProductReview = (category_slug, slug, reviewData) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REVIEW_REQUEST });

        const { data } = await axios.post(`${apiUrl }/store/product/${category_slug}/${slug}/`, reviewData);

        dispatch({ type: PRODUCT_REVIEW_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_REVIEW_FAIL, payload: error.message });
    }
};


export const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });

        const { data } = await axios.get(`${apiUrl }/store/categories/`);
       

        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
};