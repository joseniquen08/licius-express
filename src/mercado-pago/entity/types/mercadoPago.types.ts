export interface IMercadoPago {
  title: string;
  unit_price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

export type CreatePreference = Omit<IMercadoPago, 'created_at' | 'updated_at'>;
