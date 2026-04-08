import "./CartSidebar.css";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";

const CartSidebar = () => {
  const navigate = useNavigate();
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity } =
    useCartStore();

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  return (
    <>
      {isCartOpen && <div className="cart-overlay" onClick={closeCart} />}

      <aside
        className={`cart-sidebar ${isCartOpen ? "cart-sidebar--open" : ""}`}
      >
        <div className="cart-sidebar__header">
          <h2>Your Cart</h2>
          <button type="button" className="cart-close" onClick={closeCart}>
            x
          </button>
        </div>

        <div className="cart-sidebar__content">
          {cartItems.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.cartKey} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__image"
                />
                <div className="cart-item__body">
                  <p className="cart-item__name">{item.name}</p>
                  <p className="cart-item__price">${item.price.toFixed(2)}</p>
                  {item.spiceLevel && (
                    <p className="cart-item__spice">Spice: {item.spiceLevel}</p>
                  )}
                  <div className="cart-item__controls">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.cartKey ?? item.id,
                          item.quantity - 1,
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.cartKey ?? item.id,
                          item.quantity + 1,
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="cart-item__remove"
                  onClick={() => removeFromCart(item.cartKey ?? item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-sidebar__footer">
          <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
          <button
            type="button"
            className="cart-checkout"
            onClick={() => {
              closeCart();
              navigate("/checkout");
            }}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
