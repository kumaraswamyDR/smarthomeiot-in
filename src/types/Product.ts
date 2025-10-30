// src/types/Product.ts
export interface Product {
  slug: string;
  title: string;
  blurb: string;
  image?: string;
  details?: string;
  features: readonly string[]; // ✅ Fix: allow readonly arrays
}
