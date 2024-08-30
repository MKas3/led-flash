'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';

type CalculatorContext = {
  discount: number;
  fullPrice: number;
  initialized: boolean;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
  setFullPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const calculatorContext = createContext<CalculatorContext>({
  discount: 0,
  fullPrice: 0,
  initialized: false,
  setDiscount: () => {},
  setFullPrice: () => {}
});

export const CalculatorProvider = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  const [initialized, setInitialized] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    setInitialized(true);
  }, [setInitialized]);

  const contextValue = useMemo(() => ({
    discount,
    fullPrice,
    initialized,
    setDiscount,
    setFullPrice
  }), [
    discount,
    fullPrice,
    initialized
  ]);

  return (
    <calculatorContext.Provider
      value={contextValue}
    >
      {children}
    </calculatorContext.Provider>
  );
};
