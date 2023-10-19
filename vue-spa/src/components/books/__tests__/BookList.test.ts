import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { useBookStore } from '@/store/bookStore';
import { createVuetify } from 'vuetify';
import { createTestingPinia } from '@pinia/testing';
import { mockedBooks } from './mock';
import BookList from '../BookList.vue';
import BookRow from '../BookRow.vue';
import BookTableHeader from '../BookTableHeader.vue';
import BookHeader from '../BookHeader.vue';
import ErrorBox from '../../common/ErrorBox.vue';
import BookPagination from '../BookPagination.vue';
import NoContent from '../../common/NoContent.vue';
import ContentLoader from '../../common/ContentLoader.vue';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
global.ResizeObserver = require('resize-observer-polyfill');

describe('BookList.vue', () => {
  let wrapper: ReturnType<typeof mount>;
  let vuetify: ReturnType<typeof createVuetify>;
  let store: ReturnType<typeof useBookStore>;

  beforeEach(() => {
    vuetify = createVuetify({
      components,
      directives
    });

    // Mounting the component for testing
    wrapper = mount(BookList, {
      props: {},
      global: {
        components: {
          BookRow,
          BookTableHeader,
          BookHeader,
          ErrorBox,
          BookPagination,
          NoContent,
          ContentLoader
        },
        plugins: [
          vuetify,
          createTestingPinia({
            initialState: {
              books: [],
              error: '',
              loading: false
            }
          })
        ]
      }
    });

    // Mocking Pinia store
    store = useBookStore();
  });

  it('calls getBooks on mounted', async () => {
    expect(store.getBooks).toHaveBeenCalled();
  });

  it('renders ContentLoader component when getting the data from API', async () => {
    store.loading = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'ContentLoader' }).exists()).toBe(true);
  });

  it('renders ErrorBox component when an error occurs', async () => {
    store.error = 'Some Error';
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'ErrorBox' }).exists()).toBe(true);
  });

  it('renders NoContent component when the response from an API is empty array', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'NoContent' }).exists()).toBe(true);
  });

  it('renders BookHeader, BookTableHeader components when books are loaded', async () => {
    await wrapper.vm.$nextTick(() => {
      store.books = mockedBooks;
      store.loading = false;
      store.error = '';
    });

    expect(wrapper.findComponent(BookHeader).exists()).toBe(true);
    expect(wrapper.findComponent(BookTableHeader).exists()).toBe(true);

    const bookRows = wrapper.findAllComponents(BookRow);
    expect(bookRows.length).toBe(mockedBooks.length);
  });

  it('renders BookRow component as many times as the books are retrieved from API', async () => {
    await wrapper.vm.$nextTick(() => {
      store.books = mockedBooks;
      store.loading = false;
      store.error = '';
    });

    expect(wrapper.findComponent(BookHeader).exists()).toBe(true);
    expect(wrapper.findComponent(BookTableHeader).exists()).toBe(true);

    const bookRows = wrapper.findAllComponents(BookRow);
    expect(bookRows.length).toBe(mockedBooks.length);
  });

  it('updates currentPage correctly', async () => {
    (wrapper.vm as any).updateCurrentPage(3);
    expect((wrapper.vm as any).currentPage).toBe(3);
  });
});
