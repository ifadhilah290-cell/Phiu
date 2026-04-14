
export interface GamePackage {
  id: string;
  name: string;
  amount: number;
  price: number;
  bonus?: number;
  image?: string;
}

export interface Game {
  id: string;
  title: string;
  publisher: string;
  category: 'Mobile' | 'PC' | 'Console';
  image: string;
  packages: GamePackage[];
  idPlaceholder: string;
  regions?: string[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'E-Wallet' | 'Virtual Account' | 'QRIS' | 'Retail';
  image: string;
}

export interface Order {
  gameId: string;
  userId: string;
  zoneId?: string;
  packageId: string;
  paymentMethodId: string;
  status: 'Pending' | 'Success' | 'Failed';
  orderDate: Date;
}