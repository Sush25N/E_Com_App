import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../features/slices/cartSlice";
import PaymentConfirmationModal from "./PaymentConfirmationModal";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleIncrement = (item) => {
    dispatch(
      incrementQuantity({ id: item.id, size: item.size, color: item.color })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      decrementQuantity({ id: item.id, size: item.size, color: item.color })
    );
  };

  const handlePayNow = (item) => {
    setSelectedProduct(item);
  };

  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>CART</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => (
                <div key={index}>
                  <div className="grid grid-cols-2 py-4">
                    <div>
                      <img
                        className="h-[250px] rounded-md"
                        src={item.img}
                        alt={item.name}
                      />
                      <div className="flex flex-col items-start">
                        <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                          {item.name}
                        </h4>
                      </div>
                      <div className="max-w-xs">
                        <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected size: <span className="ml-2">{item.size}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected color:{" "}
                        <span
                          className="ml-2 rounded px-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        <Button
                          size="sm"
                          color="red"
                          ripple={true}
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.amount}</span>
                        <Button
                          size="sm"
                          color="green"
                          ripple={true}
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </Button>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Single Item Price:{" "}
                        <span className="ml-2">₹{item.price}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Total Item Price:{" "}
                        <span className="ml-2">₹{item.totalPrice}</span>
                      </p>
                      <div className="pt-4">
                        <Tooltip
                          content="Remove from the Cart"
                          placement="bottom"
                        >
                          <Button
                            onClick={() => dispatch(removeFromCart(item))}
                            size="sm"
                            color="red"
                            ripple={true}
                            variant="filled"
                            className="mr-2"
                          >
                            Remove
                          </Button>
                        </Tooltip>
                        <Button
                          onClick={() => handlePayNow(item)}
                          size="sm"
                          color="blue"
                          ripple={true}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                Total Price of All Products:{" "}
                <span className="ml-2">₹{totalPrice}</span>
              </p>
            </DialogFooter>
          </Dialog>
          {selectedProduct && (
            <Dialog open={true}>
              <DialogHeader>ORDER SUMMARY</DialogHeader>
              <DialogBody divider>
                <PaymentConfirmationModal product={selectedProduct} />
              </DialogBody>
              <DialogFooter>
                <h1 style={{ marginRight: "10px" }}>
                  Thank You for Shopping..!
                </h1>
                <Button
                  onClick={() => setSelectedProduct(null)}
                  size="sm"
                  color="blue"
                  ripple={true}
                >
                  Close
                </Button>
              </DialogFooter>
            </Dialog>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>CART</DialogHeader>
            <DialogBody divider>
              <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                Cart is empty
              </h1>
              <p className="text-black text-base font-inter tracking-normal leading-none">
                Add some products
              </p>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
