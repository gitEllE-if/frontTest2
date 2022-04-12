<template>
  <form class="item-add__form" action="#">
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
        type="number"
        min="0"
        id="itemPrice"
        placeholder="Введите цену"
        v-model.number="$v.price.$model"
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
        v-if="$v.price.$dirty && !$v.price.numeric"
      >
        Значение должно быть числом
      </div>
    </div>

    <button
      class="g-button item-add__button"
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
  numeric,
  between,
} from "vuelidate/lib/validators";
export default {
  name: "ItemAdd",
  data() {
    return {
      name: "",
      img: "",
      price: null,
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
      numeric,
      between: between(1, 9999999),
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
    color: #b4b4b4;
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
    color: #b4b4b4;
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
