import useCartStore from "./cartZustand"

const resetAll=()=>{
    useCartStore.getState().resetCart()
}

export default resetAll