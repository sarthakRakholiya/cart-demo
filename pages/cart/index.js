// ***** start - imports from package *****
import { useSelector } from "react-redux";
// ***** end - imports from package *****

// ***** start - imports from files *****
import Cart from "@/components/Cart";
import AppLayout from "@/components/Layout/AppLayout";
// ***** end - imports from files *****

const CartPage = () => {

  // ***** start - define variable *****
  const cartData = useSelector(state => state.cart)
  // ***** end - define variable *****

  return (
    <AppLayout cartData={cartData}>
      <Cart />
    </AppLayout>
  );
};

export default CartPage;