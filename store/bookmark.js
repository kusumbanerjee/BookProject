// tried vuex, store for bookmark
import { createStore } from 'vuex';

export default createStore({
  state: {
    wantToReadBooks: [], 
  },
  mutations: {
    addWantToReadBook(state, book) {
      state.wantToReadBooks.push(book);
    },
  },
});
