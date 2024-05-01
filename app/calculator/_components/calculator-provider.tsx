'use client';

import React, { createContext, useEffect, useState } from 'react';

type CalculatorContext = {
  initialized: boolean;
  discount: number;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
  fullPrice: number;
  setFullPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const CalculatorContext = createContext<CalculatorContext>({
  initialized: false,
  discount: 0,
  setDiscount: () => {},
  fullPrice: 0,
  setFullPrice: () => {},
});

export const CalculatorProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [initialized, setInitialized] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    setInitialized(true);
  }, [setInitialized]);

  return (
    <CalculatorContext.Provider
      value={{ initialized, discount, setDiscount, fullPrice, setFullPrice }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
