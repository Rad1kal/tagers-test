<template>
  <div class="cards-catalog__card">
    <img class="cards-catalog__card-img" :src="cardData.image.url" :alt="cardData.name ?? 'Ошибка загрузки'"/>
    <div class="cards-catalog__card-info-container">
      <p class="cards-catalog__card-code" :class="cardData.code ? '' : 'invisible'">
        {{ cardData.code ?? 'Нет данных!' }}
      </p>
      <h4 class="cards-catalog__card-name">
        {{ cardData.name ?? 'Нет данных!' }}
      </h4>
      <div class="cards-catalog__card-bottom-selling-container">
        <h4 class="cards-catalog__card-price">
          <span v-if="cardData.price.old_price" class="cards-catalog__card-price_old">
            {{ Number.parseInt(cardData.price.old_price) + '₽' }}
          </span>
          {{ cardData.price.current_price ? Number.parseInt(cardData.price.current_price) : '' }}₽
        </h4>
        <div class="cards-catalog__card-selling-controls">
          <div class="cards-catalog__card-selling-control" :id="cardData.id" @click="toggleCart">
            <div :class="inCart ? 'cards-catalog__card-selling-controls-cart_in' : 'cards-catalog__card-selling-controls-cart'"></div>
          </div>
          <div class="cards-catalog__card-selling-control" @click="toggleFavorite">
            <div :class="inFavorite ? 'cards-catalog__card-selling-controls-favorite_in' : 'cards-catalog__card-selling-controls-favorite'"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="cards-catalog__card-sale" :class="cardData.price.old_price ? '' : 'hide'">Скидка</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { IProduct } from '@/interfaces';
import { useStore } from '@/utils/utils';

const props = defineProps<{ cardData: IProduct }>();
const baseURL = import.meta.env.BASE_URL

const { addTo, removeFrom, favorites, cart } = useStore();

const inCart = ref(!!cart.value.find(p => p.id === props.cardData.id));
const inFavorite = ref(!!favorites.value.find(p => p.id === props.cardData.id));

const handleAddToCart = () => {
  addTo('cart', props.cardData);
};

const handleRemoveFromCart = () => {
  removeFrom('cart', props.cardData.id);
};

const handleAddToFavorites = () => {
  addTo('favorites', props.cardData);
};

const handleRemoveFromFavorites = () => {
  removeFrom('favorites', props.cardData.id);
};

const toggleCart = () => {
  inCart.value ? handleRemoveFromCart() : handleAddToCart();
};

const toggleFavorite = () => {
  inFavorite.value ? handleRemoveFromFavorites() : handleAddToFavorites();
};

watch(cart, () => {
  inCart.value = !!cart.value.find(p => p.id === props.cardData.id);
});

watch(favorites, () => {
  inFavorite.value = !!favorites.value.find(p => p.id === props.cardData.id);
});
</script>

<style>
.cards-catalog__card {
  font-family: 'SF-UI-Text';

  position: relative;
  width: 336px;
  border: 1px solid rgba(238, 238, 238, 1);
  padding: 10px 12px;
  text-align: center;
}

.cards-catalog__card-img {
  margin-bottom: 20px;
  object-fit: cover;
}

.cards-catalog__card-info-container {
  width: 100%;
  text-align: left;
}

.cards-catalog__card-code {
  margin-bottom: 6px;

  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.02em;

  color: rgba(136, 136, 136, 1);
}

.cards-catalog__card-name {
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.02em;
}

.cards-catalog__card-bottom-selling-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cards-catalog__card-price_old {
  text-decoration: line-through;
  font-weight: normal;
  color: rgba(136, 136, 136, 1);
}

.cards-catalog__card-selling-controls {
  display: flex;
  gap: 8px;
}

.cards-catalog__card-selling-controls-cart, .cards-catalog__card-selling-controls-cart_in, .cards-catalog__card-selling-controls-favorite, .cards-catalog__card-selling-controls-favorite_in {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
}

.cards-catalog__card-selling-control {
  padding: 8px;
  border-radius: 20%;
}

.cards-catalog__card-selling-control:hover {
  background-color: #efefef;
}

.cards-catalog__card-selling-controls-cart {
  background-image: url(/src/assets/icons/shopping-cart.svg);
}

.cards-catalog__card-selling-controls-cart_in {
  background-image: url(/src/assets/icons/green-circle-checked.svg);
}

.cards-catalog__card-selling-controls-favorite {
  background-image: url(/src/assets/icons/heart.svg);
  transform: translateY(1px);
}

.cards-catalog__card-selling-controls-favorite_in {
  background-image: url(/src/assets/icons/heart-red.svg);
  transform: translateY(1px);
}

.cards-catalog__card-sale {
  font-family: 'SF-Pro-Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 18.2px;
  letter-spacing: 0.01em;

  padding: 3px 16px;
  background: rgba(235, 87, 87, 1);
  color: white;
  position: absolute;
  top: 8px;
  left: 0;
}

@media (max-width: 1490px) {
  .cards-catalog__card {
    width: 320px;
  }
}
</style>
