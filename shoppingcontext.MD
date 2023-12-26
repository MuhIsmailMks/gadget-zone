import React, {
  createContext,
  useContext,
  ReactNode, 
  useState,
} from "react";


import ShoppingBag from "../components/ShoppingBag";

type BagItem = {
  id: number
  quantity: number
  price: number
};

type ShoppingBagData = {
  openBag : () => void
  closeBag : () => void
  getItemQuantity: (id: number) => number;
  increaseBagQuantity: (id: number) => void;
  decreaseBagQuantity: (id: number) => void;
  removeFromBag: (id: number) => void;
  bagQuantity : number
  bagItems: BagItem[]
};


const ShoppingBagContext = createContext<ShoppingBagData | undefined>(
  undefined
);


type ShoppingBagProviderProps = {
  children: ReactNode;
  value: ShoppingBagData;
};

export function useShoppingBag() {
  return useContext(ShoppingBagContext)!;
}

export function ShoppingBagProvider({
  children,
}: ShoppingBagProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [bagItems, setBagItems] = useState<BagItem[]>([]);


  const openBag = () => setIsOpen(true);
  const closeBag = () => setIsOpen(false);

  const bagQuantity = bagItems.reduce((quantity,item) => item.quantity + quantity,0);


  function getItemQuantity(id: number) {
    return bagItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseBagQuantity(id: number) {
     setBagItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    }
    );
  }

  function decreaseBagQuantity(id: number) {
    setBagItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromBag(id: number) {
    setBagItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingBagContext.Provider
      value={{ getItemQuantity, 
        increaseBagQuantity, 
        decreaseBagQuantity ,
        removeFromBag,
        openBag,
        closeBag,
        bagItems,
        bagQuantity
      }}
    >
      {children}
      <ShoppingBag isOpen={isOpen} closeBag={closeBag}/>
    </ShoppingBagContext.Provider>
  );
}
