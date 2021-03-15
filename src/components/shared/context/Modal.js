import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext({
  visible: false,
  setModalVisible: () => {},
});

const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const setModalVisible = () => {
    setVisible((show) => !show);
  };

  return (
    <ModalContext.Provider
      value={{
        visible,
        setModalVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;
