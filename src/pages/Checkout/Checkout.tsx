import "./Checkout.css";
import useCartStore from "../../store/cartStore";

const Checkout = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.quantity,
    0,
  );

  return (
    <section className="checkout-page">
      <div className="checkout-layout">
        <div className="checkout-summary">
          <h1>Order Summary</h1>
          <div className="checkout-summary-list">
            {cartItems.length === 0 ? (
              <p className="checkout-empty">No items in cart yet.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.cartKey ?? item.id} className="checkout-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="checkout-item-image"
                  />
                  <div>
                    <p className="checkout-item-name">{item.name}</p>
                    <p className="checkout-item-meta">
                      ${Number(item.price || 0).toFixed(2)} x {item.quantity}
                    </p>
                    {item.spiceLevel && (
                      <p className="checkout-item-spice">
                        Spice Level: {item.spiceLevel}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          <p className="checkout-total">Total: ${totalPrice.toFixed(2)}</p>
        </div>

        <div className="checkout-form-card">
          <h2>Customer Details</h2>
          <form
            className="checkout-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              Full Name
              <input type="text" placeholder="John Doe" />
            </label>
            <label>
              Phone Number
              <input type="tel" placeholder="(000) 000-0000" />
            </label>
            <label>
              Order Notes
              <textarea rows={4} placeholder="Extra spicy, no pickles, etc." />
            </label>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
