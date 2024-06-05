export interface ISelectOption {
    id: string,
    name: string
}

export interface IProduct {
    id: string,
    name: string,
    code: string | null,
    price: {
      old_price: number |null,
      current_price: number
    },
    image: {
      url: string
    },
    material: number
}