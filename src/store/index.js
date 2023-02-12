import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [
      {
        full_name: "Константинопольский Константин Константинович",
        inn: "124512515",
        address: "г. Санкт-Петербург",
        date_birth: " 23.06.2001",
        age: 21,
        type_contract: { id: 1, title: "Трудовой договор", slug: "ТД" },
        type_contract_id: 1,
        gender: { id: 1, title: "Мужской", slug: "М" },
        gender_id: 1,
        country: { id: 1, icon: "rus", title: "Россия", slug: "RUS" },
        country_id: 1,
        position: { id: 1, name: "Промышленный альпинист" },
        position_id: 1,
        status: {
          tag_id: 1,
          tag: {
            id: 1,
            title: "Проблемные",
            slug: "ТД",
            color: "#E2BD06",
          },
          description: "Истекают все документы",
        },
      },
      {
        full_name: "Иванов Иван Иванович",
        inn: "12451124515",
        address: "г. Санкт-Петербург",
        date_birth: " 23.06.2002",
        age: 24,
        type_contract: {
          id: 2,
          title: "Трудовой договор гражданско-правового характера",
          slug: "ГПХ",
        },
        type_contract_id: 2,
        gender: { id: 2, title: "Женский", slug: "Ж" },
        gender_id: 2,
        country: {
          id: 3,
          icon: "uz",
          title: "Узбекистан",
          slug: "UZ",
        },
        country_id: 2,
        position: { id: 2, name: "Пекарь" },
        position_id: 2,
        status: {
          tag_id: 2,
          tag: {
            id: 2,
            title: "Критические",
            slug: "ГПХ",
            color: "#E52E2E",
          },
          description: "Прошел все процедуры",
        },
      },
      {
        full_name: "Семенов Семен Семенович",
        inn: "12542346346335",
        address: "г. Москва",
        date_birth: "13.10.1994",
        age: "28",
        type_contract_id: 3,
        gender_id: 1,
        country_id: 1,
        position_id: 2,
        status_id: 3,
        statusDescription: "есть вопросики",
        type_contract: { id: 3, title: "Самознятый", slug: "СМЗ" },
        gender: { id: 1, title: "Мужской", slug: "М" },
        country: { id: 1, icon: "rus", title: "Россия", slug: "RUS" },
        position: { id: 2, name: "Токарь" },
        status: {
          tag_id: 3,
          description: "Каие то проблемы",
          tag: {
            id: 3,
            title: "Есть замечания",
            slug: "СМЗ",
            color: "#00B6ED",
          },
        },
      },
      {
        full_name: "Александров Александ Александрович",
        inn: "235421345623456",
        address: "г. Валуйки",
        date_birth: "16.08.2003",
        age: "30",
        type_contract_id: 4,
        gender_id: 2,
        country_id: 2,
        position_id: 1,
        status_id: 1,
        statusDescription: "Большие проблемы",
        type_contract: {
          id: 4,
          title: "Кандидат на должность",
          slug: "Кандидат",
        },
        gender: { id: 2, title: "Женский", slug: "Ж" },
        country: {
          id: 3,
          icon: "uz",
          title: "Узбекистан",
          slug: "UZ",
        },
        position: { id: 1, name: "Промышленный альпинист" },
        status: {
          tag_id: 4,
          description: "Каие то проблемы",
          tag: {
            id: 4,
            title: "Выполнено",
            slug: "Кандидат",
            color: "#00AE5B",
          },
        },
      },
      {
        full_name: "Никитин Никита Нитьевич",
        inn: "235234757",
        address: "г. Архангельск",
        date_birth: "12.10.1994",
        age: "28",
        type_contract_id: 3,
        gender_id: 1,
        country_id: 1,
        position_id: 1,
        status_id: 1,
        statusDescription: "Каие то проблемы",
        type_contract: { id: 3, title: "Самознятый", slug: "СМЗ" },
        gender: { id: 1, title: "Мужской", slug: "М" },
        country: { id: 1, icon: "rus", title: "Россия", slug: "RUS" },
        position: { id: 1, name: "Промышленный альпинист" },
        status: {
          tag_id: 4,
          description: "Каие то проблемы",
          tag: {
            id: 4,
            title: "Выполнено",
            slug: "Кандидат",
            color: "#00AE5B",
          },
        },
      },
      {
        full_name: "Алексеев Алексе Алексеевич",
        inn: "651235654",
        address: "г. Самара",
        date_birth: "14.08.2004",
        age: "20",
        type_contract_id: 2,
        gender_id: 2,
        country_id: 2,
        position_id: 2,
        status_id: 4,
        statusDescription: "Все гуд",
        type_contract: {
          id: 2,
          title: "гражданско-правового характера",
          slug: "ГПХ",
        },
        gender: { id: 2, title: "Женский", slug: "Ж" },
        country: { id: 2, icon: "tj", title: "Таджикистан", slug: "TJ" },
        position: { id: 2, name: "Токарь" },
        status: {
          tag_id: 2,
          tag: {
            id: 2,
            title: "Критические",
            slug: "ГПХ",
            color: "#E52E2E",
          },
          description: "Прошел все процедуры",
        },
      },
      {
        full_name: "Николайев Николай Николаевич",
        inn: "1254216351346",
        address: "г. Волгоград",
        date_birth: "14.10.1997",
        age: "27",
        type_contract_id: 3,
        gender_id: 1,
        country_id: 1,
        position_id: 1,
        status_id: 1,
        statusDescription: "Каие-то проблемки",
        type_contract: { id: 3, title: "Самознятый", slug: "СМЗ" },
        gender: { id: 1, title: "Мужской", slug: "М" },
        country: {
          id: 3,
          icon: "uz",
          title: "Узбекистан",
          slug: "UZ",
        },
        position: { id: 1, name: "Промышленный альпинист" },
        status: {
          tag_id: 3,
          description: "Каие то проблемы",
          tag: {
            id: 3,
            title: "Есть замечания",
            slug: "СМЗ",
            color: "#00B6ED",
          },
        },
      },
      {
        full_name: "Мариева Мария Мариевна",
        inn: "124124124",
        address: "г.Сингапур",
        date_birth: "15.10.1993",
        age: "27",
        type_contract_id: 3,
        gender_id: 2,
        country_id: 1,
        position_id: 1,
        status_id: 2,
        statusDescription: "Большие проблемы",
        type_contract: { id: 3, title: "Самознятый", slug: "СМЗ" },
        gender: { id: 2, title: "Женский", slug: "Ж" },
        country: { id: 1, icon: "rus", title: "Россия", slug: "RUS" },
        position: { id: 1, name: "Промышленный альпинист" },
        status: {
          tag_id: 2,
          tag: {
            id: 2,
            title: "Критические",
            slug: "ГПХ",
            color: "#E52E2E",
          },
          description: "Все Критические",
        },
      },
      {
        full_name: "Павлов Павел Павлович",
        inn: "1254231476234",
        address: "г.Берлин",
        date_birth: "13.04.1995",
        age: "28",
        type_contract_id: 4,
        gender_id: 1,
        country_id: 2,
        position_id: 2,
        status_id: 4,
        statusDescription: "Все хорошо",
        type_contract: {
          id: 4,
          title: "Кандидат на должность",
          slug: "Кандидат",
        },
        gender: { id: 1, title: "Мужской", slug: "М" },
        country: { id: 2, icon: "tj", title: "Таджикистан", slug: "TJ" },
        position: { id: 2, name: "Токарь" },
        status: {
          description: "Все хорошо",
          tag_id: 1,
          tag: {
            id: 1,
            title: "Проблемные",
            slug: "ТД",
            color: "#E2BD06",
          },
        },
      },
    ],
    filteredUsers: [],
    filterModel: {
      query: null,
      tag_ids: null,
      country_id: null,
      gender_id: null,
      position_id: null,
      type_contract_id: null,
    },
  },
  getters: {
    totalUsers(state) {
      return state.users.length;
    },
    getUsers(state) {
      return state.users;
    },
    getFilteredUsers(state) {
      return state.filteredUsers;
    },
  },
  mutations: {
    SAVE_USER(state, user) {
      state.users.unshift(user);
    },
    FILTER_USERS(state, filter) {
      state.filterModel = { ...state.filterModel, ...filter };
      state.filteredUsers = state.users
        .filter((x) => {
          const regex = new RegExp(`${state.filterModel.query || ""}`, "gi");
          return !state.filterModel.query || !!x.full_name.match(regex);
        })
        .filter((x) => {
          return (
            !state.filterModel.tag_ids ||
            !state.filterModel.tag_ids.length ||
            !!state.filterModel.tag_ids.find((j) => j == x.status.tag_id)
          );
        })
        .filter(
          (x) =>
            !state.filterModel.country_id ||
            state.filterModel.country_id == x.country_id
        )
        .filter(
          (x) =>
            !state.filterModel.gender_id ||
            state.filterModel.gender_id == x.gender_id
        )
        .filter(
          (x) =>
            !state.filterModel.position_id ||
            state.filterModel.position_id == x.position_id
        )
        .filter(
          (x) =>
            !state.filterModel.type_contract_id ||
            !state.filterModel.type_contract_id.length ||
            state.filterModel.type_contract_id.find(
              (j) => j == x.type_contract_id
            )
        );
    },
  },
  actions: {
    saveUser({ commit }, user) {
      commit("SAVE_USER", user);
    },
    filterUsers({ commit }, filter) {
      commit("FILTER_USERS", filter);
    },
  },
});

export default store;
