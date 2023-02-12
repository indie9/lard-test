<template>
  <v-container class="pa-6 mb-6 bg-cardbg" height="150px">
    <v-row class="h-25 flex-nowrap mb-2">
      <span
        class="text-titleprimary mr-5 text-h6 text-nowrap-center"
        v-html="userName"
      >
      </span>

      <span class="mr-6 px-2 text-nowrap text-nowrap-center">
        ИНН {{ user.inn }}
      </span>
      <span
        class="mr-2 text-nowrap text-nowrap-center bg-grenprimary rounded-lg px-2 py-1 contract"
      >
        {{ user.type_contract.slug }}
      </span>
      <span class="mr-2 text-nowrap text-nowrap-center">
        {{ user.position.name }}
      </span>
    </v-row>
    <v-row class="mb-2">
      <v-img
        :src="require(`../assets/${user.country.icon}.svg`)"
        max-height="20"
        max-width="20"
        class="mr-2 pr-4"
        contain
      />

      <span class="pr-4 border-right"> {{ user.country.slug }} </span>
      <span class="px-4 border-right"> {{ user.address }} </span>
      <span class="px-4 border-right">
        Дата рождения: {{ user.date_birth }}
      </span>
      <span class="px-4 border-right"> Возраст: {{ user.age }} </span>
      <span class="pl-4"> Пол: {{ user.gender.title }} </span>
    </v-row>
    <v-row>
      <span
        class="text-white rounded-lg pa-2"
        :style="{ background: user.status.tag.color }"
      >
        {{ user.status.description }}
      </span>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    user: Object,
    searchedText: String,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const userName = computed(() => {
      if (!props.searchedText) {
        return props.user.full_name;
      } else {
        const regExp = new RegExp(props.searchedText, "gi");
        return props.user.full_name.replace(
          regExp,
          `<span class="text-red"> ${props.searchedText} </span>`
        );
      }
    });
    return {
      userName,
    };
  },
};
</script>

<style lang="css">
.border-right {
  border-right: 1px solid #cedae5;
}
.contract {
  line-height: 25px;
  max-height: 30px;
}
.text-nowrap-center {
  display: flex;
  align-items: center;
}
</style>
