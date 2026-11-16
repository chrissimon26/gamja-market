export type PurchaseRequest = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly minPrice: number;
  readonly maxPrice: number;
  readonly category: string;
  readonly region: string;
  readonly createdAt: string;
};
