import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
    total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
    totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const tour = action.payload;
            const index = state.wishlist.findIndex((item) => item._id === tour._id);

            if(index >= 0){
                toast.error("Tour already in wishlist");
                return
            }
            
            // add to wishlist
            state.wishlist.push(tour);
            state.total += tour.price;
            state.totalItems += 1;

            // update local storage
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

            toast.success("Tour added to wishlist");
        },

        removeFromWishlist: (state, action) => {
            const tourId = action.payload;
            const index = state.wishlist.findIndex((item) => item._id === tourId);

            if(index >= 0){
                // tour is in the wishlist, remove it
                state.total -= state.wishlist[index].price;
                state.totalItems -= 1;
                state.wishlist.splice(index, 1);

                // update local storage
                localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
                localStorage.setItem("total", JSON.stringify(state.total));
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

                toast.success("Tour removed from wishlist");
            }
        },

        resetWishlist: (state) => {
            state.wishlist = [];
            state.total = 0;
            state.totalItems = 0;

            // update local storage
            localStorage.removeItem("wishlist");
            localStorage.removeItem("total");
            localStorage.removeItem("totalItems");
        },
    },
});

export const { addToWishlist, removeFromWishlist, resetWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;