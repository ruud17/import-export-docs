import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import BookPagination from '../BookPagination.vue';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
global.ResizeObserver = require('resize-observer-polyfill');

describe('BookPagination.vue', () => {
  let wrapper: ReturnType<typeof mount>, vuetify: ReturnType<typeof createVuetify>;

  beforeEach(() => {
    vuetify = createVuetify({
      components,
      directives
    });

    // Mounting the component for testing
    wrapper = mount(BookPagination, {
      props: { currentPage: 1, totalPages: 5 },
      global: {
        components: {},
        plugins: [vuetify]
      }
    });
  });

  it('emits "updateCurrentPage" when pageChanged is called', async () => {
    // Trigger the update:model-value event on v-pagination to simulate the user changing the page.
    // This will internally call the pageChanged function and change the value of internalCurrentPage.
    const newCurrentPageValue = 3;
    wrapper
      .findComponent({ name: 'v-pagination' })
      .vm.$emit('update:model-value', newCurrentPageValue);

    // Allow any micro-tasks to complete (Vue updates and similar)
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().updateCurrentPage).toBeTruthy();
    expect(wrapper.emitted().updateCurrentPage[0]).toEqual([newCurrentPageValue]);
  });
});
