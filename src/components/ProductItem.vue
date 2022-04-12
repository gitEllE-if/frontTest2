<template>
  <article class="card">
    <img class="card__img" :src="item.img" alt="product-image" />
    <section class="card-content">
      <div class="card-content-text">
        <h1 class="card-content-text__h1">{{ item.name }}</h1>
        <p class="card-content-text__p">{{ item.description }}</p>
      </div>
      <div class="card-content-price">
        {{ item.price }}&nbsp;{{ item.currency }}
      </div>
    </section>
    <button class="card__button" @click="deleteItem(item.id)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 791.908 791.908"
      >
        <g>
          <path
            d="M648.587,99.881H509.156C500.276,43.486,452.761,0,394.444,0S287.696,43.486,279.731,99.881H142.315   c-26.733,0-48.43,21.789-48.43,48.43v49.437c0,24.719,17.761,44.493,41.564,47.423V727.64c0,35.613,28.655,64.268,64.268,64.268   h392.475c35.613,0,64.268-28.655,64.268-64.268V246.087c23.711-3.937,41.564-23.711,41.564-47.423v-49.437   C697.017,121.67,675.228,99.881,648.587,99.881z M394.444,36.62c38.543,0,70.219,26.733,77.085,63.261H316.351   C324.225,64.268,355.901,36.62,394.444,36.62z M618.924,728.739c0,14.831-11.901,27.648-27.648,27.648H198.71   c-14.831,0-27.648-11.901-27.648-27.648V247.185h446.948v481.554H618.924z M660.397,197.748c0,6.958-4.944,11.902-11.902,11.902   H142.223c-6.958,0-11.902-4.944-11.902-11.902v-49.437c0-6.958,4.944-11.902,11.902-11.902h505.265   c6.958,0,11.901,4.944,11.901,11.902v49.437H660.397z M253.09,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761   s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761C260.964,680.309,253.09,671.337,253.09,661.45z    M378.606,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761c9.887,0,17.761,7.873,17.761,17.761V661.45   c0,9.887-7.873,17.761-17.761,17.761C386.57,680.309,378.606,671.337,378.606,661.45z M504.212,661.45V349.081   c0-9.887,7.873-17.761,17.761-17.761s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761   C513.093,680.309,504.212,671.337,504.212,661.45z"
          />
        </g>
      </svg>
    </button>
  </article>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    item: { type: Object, default: () => {} },
  },
  methods: {
    deleteItem(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 332px;
  height: 423px;
  margin-bottom: 16px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  &:not(:nth-child(3n)) {
    margin-right: 16px;
  }
  &__img {
    width: 332px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }
  &-content {
    padding: 16px 16px 24px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Source Sans Pro", serif;
    font-style: normal;
    color: #3f3f3f;
    &-text {
      &__h1 {
        margin: 0 0 16px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
      }
      &__p {
        margin: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }
    }
    &-price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
  &__button {
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 32px;
    height: 32px;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: none;
    & svg {
      fill: #ffffff;
      width: 16px;
      height: 16px;
    }
    &:hover {
      background: #ff5151;
    }
  }
  &:hover &__button {
    display: block;
  }
}

@media (max-width: 1439px) {
  .card {
    margin: 0 16px 16px;
  }
}
</style>
