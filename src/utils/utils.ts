import {ref, computed} from 'vue';
import type {IProduct} from "@/interfaces";

const getLocalStorageItem = (key: string): IProduct[] => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
};

const setLocalStorageItem = (key: string, value: IProduct[]) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const cartKey = 'cart';
const cart = ref<IProduct[]>(getLocalStorageItem(cartKey));

const favoritesKey = 'favorites';
const favorites = ref<IProduct[]>(getLocalStorageItem(favoritesKey));

export const useStore = () => {
    const addTo = (category: 'cart' | 'favorites', product: IProduct) => {
        const list= category === 'favorites' ? favorites : cart;
        if (!list.value.find(p => p.id === product.id)) {
          list.value = [...list.value, product];
          setLocalStorageItem(category, list.value);
        }
    };

    const removeFrom = (category: 'cart' | 'favorites', productId: string) => {
        const list = category === 'favorites' ? favorites : cart;
        list.value = list.value.filter(p => p.id !== productId);
        setLocalStorageItem(category, list.value);
    };

    return {
        favorites: computed(() => favorites.value),
        cart: computed(() => cart.value),
        addTo,
        removeFrom,
    };
}