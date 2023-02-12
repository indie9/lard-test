<template>
  <v-app :class="{ modalopen: modalOpen }">
    <v-main class="bg-mainbg pt-10">
      <v-container>
        <v-row no-gutters>
          <v-col class="mr-6" cols="12" sm="7">
            <v-text-field
              class="mr-8 pa-2 bg-mainbg"
              placeholder="Поиск сотрудника"
              clearable
              variant="plain"
              append-inner-icon="mdi-magnify"
              v-model="searchText"
            />
            <span class="text-hinttext"> Например: Иванов Иван </span>
            <h1>Список Сотрудников</h1>
            <TagsFilter @tagsSelected="applyFilter" />

            <UserCard
              v-for="user in users"
              :key="user.inn"
              :user="user"
              :searchedText="searchText"
            />
            <v-row no-gutters>
              <v-btn
                v-if="showCountBtn"
                class="mx-auto text-white"
                variant="elevated"
                size="large"
                color="#00B6ED"
                prepend-icon="mdi-cached"
                @click="showMore"
              >
                Показать еще
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn
              class="ms-2 text-white"
              variant="elevated"
              block
              size="x-large"
              color="#00B6ED"
              prepend-icon="mdi-account-plus-outline"
              @click="onOpen"
            >
              Добавить нового сотрудника
            </v-btn>
            <Filter @applyFilter="applyFilter" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <AddUserModal @onClose="onClose" v-if="modalOpen" @addUser="addUser" />
  </v-app>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import AddUserModal from "./components/AddUserModal.vue";
import Filter from "./components/Filter.vue";
import TagsFilter from "./components/TagsFilter.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "App",

  components: {
    UserCard,
    AddUserModal,
    Filter,
    TagsFilter,
  },
  props: {
    title: String,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const store = useStore();
    const getters = store.getters;
    const modalOpen = ref(false);
    const anyFilterActive = ref(false);
    const searchText = ref(null);
    const showCount = ref(3);
    const showCountBtn = computed(() => {
      return anyFilterActive.value
        ? getters.getFilteredUsers.length > showCount.value
        : getters.getUsers.length > showCount.value;
    });
    const users = computed(() => {
      return anyFilterActive.value
        ? getters.getFilteredUsers.slice(0, showCount.value)
        : getters.getUsers.slice(0, showCount.value);
    });

    const showMore = () => {
      showCount.value += 3;
    };
    const onClose = () => {
      modalOpen.value = false;
    };
    const onOpen = () => {
      modalOpen.value = true;
    };
    const addUser = (value) => {
      store.dispatch("saveUser", value);
      modalOpen.value = false;
    };
    const applyFilter = (value) => {
      anyFilterActive.value = true;
      store.dispatch("filterUsers", value);
      showCount.value = 3;
    };

    watch(
      () => searchText.value,
      (newValue) => {
        applyFilter({ query: newValue });
      }
    );
    return {
      searchText,
      modalOpen,
      showCountBtn,
      showMore,
      addUser,
      onOpen,
      onClose,
      applyFilter,
      users,
    };
  },
};
</script>

<style scoped>
.modalopen {
  height: 100vh;
  overflow: hidden;
}
</style>
