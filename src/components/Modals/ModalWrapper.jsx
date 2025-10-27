import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModalWrapper = ({ title, setModalOpen, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-window"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setModalOpen(false)}
      >
        <motion.div
          className="modal-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-topbar">
            <h2>{title}</h2>
            <div
              className="close"
              onClick={() => setModalOpen(false)}
            ></div>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalWrapper;