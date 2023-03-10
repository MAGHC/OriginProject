export interface ProductI {
  file?: Blob;
  title?: string;
  price?: number;
  option?: string;
  description?: string;
}

export interface CartI {
  id: string;
  title: string;
  quantity: number;
  option: string;
  img: string;
  price: number;
  description: string;
}
