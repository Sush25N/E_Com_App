import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4"></div>
                  </div>
                );
              })}
            </DialogBody>
            {/* <DialogFooter></DialogFooter> */}
          </Dialog>
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
              <p className="text-black text-3xl font-inter tracking-normal leading-none">
                Add some products
              </p>
            </DialogBody>
            {/* <DialogFooter></DialogFooter> */}
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
