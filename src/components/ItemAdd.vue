<template>
  <form class="item-add__form" action="#" @submit.prevent="addItem">
    <div class="item-add" :class="{ 'item-add__error': $v.name.$error }">
      <label class="item-add__label item-add__label__required" for="itemName"
        >Наименование товара
      </label>
      <input
        class="item-add__input"
        type="text"
        id="itemName"
        placeholder="Введите наименование товара"
        v-model.trim="$v.name.$model"
      />
      <div
        class="item-add__error-txt"
        v-if="$v.name.$dirty && !$v.name.required"
      >
        Поле является обязательным
      </div>
      <div
        class="item-add__error-txt"
        v-if="$v.name.$dirty && !$v.name.minLength"
      >
        Минимальное количество символов: {{ $v.name.$params.minLength.min }}
      </div>
      <div
        class="item-add__error-txt"
        v-if="$v.name.$dirty && !$v.name.maxLength"
      >
        Максимальное количество символов: {{ $v.name.$params.maxLength.max }}
      </div>
    </div>

    <div class="item-add">
      <label class="item-add__label" for="itemDescription"
        >Описание товара
      </label>
      <textarea
        class="item-add__textarea"
        id="itemDescription"
        placeholder="Введите описание товара"
        rows="4"
        v-model="description"
      >
      </textarea>
    </div>

    <div class="item-add" :class="{ 'item-add__error': $v.img.$error }">
      <label class="item-add__label item-add__label__required" for="itemImg"
        >Ссылка на изображение товара
      </label>
      <input
        class="item-add__input"
        type="text"
        id="itemImg"
        placeholder="Введите ссылку"
        v-model.trim="$v.img.$model"
      />
      <div class="item-add__error-txt" v-if="$v.img.$dirty && !$v.img.required">
        Поле является обязательным
      </div>
      <div class="item-add__error-txt" v-if="$v.img.$dirty && !$v.img.url">
        Неверная ссылка
      </div>
    </div>

    <div class="item-add" :class="{ 'item-add__error': $v.price.$error }">
      <label class="item-add__label item-add__label__required" for="itemPrice"
        >Цена товара
      </label>
      <input
        class="item-add__input"
        type="text"
        min="0"
        id="itemPrice"
        placeholder="Введите цену"
        v-model.trim="$v.price.$model"
      />
      <div
        class="item-add__error-txt"
        v-if="$v.price.$dirty && !$v.price.required"
      >
        Поле является обязательным
      </div>
      <div
        class="item-add__error-txt"
        v-if="$v.price.$dirty && !$v.price.between"
      >
        Значение должно быть от {{ $v.price.$params.between.min }} до
        {{ $v.price.$params.between.max }}
      </div>
      <div
        class="item-add__error-txt"
        v-if="$v.price.$dirty && !$v.price.decimal"
      >
        Значение должно быть числом
      </div>
    </div>

    <button
      class="g-button item-add__button"
      :class="{ 'g-button__animation': isSubmit }"
      type="submit"
      :disabled="$v.$invalid"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  url,
  decimal,
  between,
} from "vuelidate/lib/validators";
export default {
  name: "ItemAdd",
  data() {
    return {
      name: "",
      description: "",
      img: "",
      price: null,
      isSubmit: false,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(64),
    },
    img: {
      required,
      url,
    },
    price: {
      required,
      decimal,
      between: between(0.1, 9999999),
    },
  },
  methods: {
    addItem() {
      if (!this.$v.$invalid) {
        const newItem = {
          name: this.name,
          description: this.description,
          img: this.img,
          price: parseFloat(this.price),
          currency: "руб.",
        };
        this.$store.dispatch("addItem", { newItem });
        this.isSubmit = true;
        setTimeout(() => (this.isSubmit = false), 1000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.item-add__form {
  min-width: 332px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin-right: 16px;
}
.item-add {
  position: relative;
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    margin-top: 16px;
  }
  &__label {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    margin-bottom: 4px;
  }
  &__label__required {
    display: flex;
  }
  &__label__required::after {
    content: "";
    display: inline-block;
    background: #ff8484;
    width: 4px;
    height: 4px;
    border-radius: 4px;
  }
  &__input {
    height: 36px;
    outline: none;
    border: 1px solid #fffefb;
    padding: 10px 16px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;
    &::placeholder {
      color: #b4b4b4;
    }
  }
  &__textarea {
    outline: none;
    border: none;
    resize: none;
    padding: 10px 16px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;
    &::placeholder {
      color: #b4b4b4;
    }
  }
  &__button {
    margin-top: 24px;
    height: 36px;
  }
}
.item-add__error {
  & label {
    color: #ff8484;
  }
  & input {
    border: 1px solid #ff8484;
    animation: shake 0.6s cubic-bezier(0.36, 0.09, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.item-add__error-txt {
  position: absolute;
  bottom: -10px;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #ff8484;
}
@media (max-width: 760px) {
  .item-add__form {
    margin-bottom: 24px;
    margin-right: initial;
  }
}
</style>
