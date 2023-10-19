import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import BookTableHeader from '../BookTableHeader.vue';

describe('BookTableHeader.vue', () => {
  let wrapper: ReturnType<typeof mount>, vuetify: ReturnType<typeof createVuetify>;

  beforeEach(() => {
    vuetify = createVuetify({
      components,
      directives
    });

    // Mounting the component for testing
    wrapper = mount(BookTableHeader, {
      props: {},
      global: {
        components: {},
        plugins: [vuetify]
      }
    });
  });

  it('renders the correct content', () => {
    // Test for static content
    expect(wrapper.html()).toContain('TITLE');
    expect(wrapper.html()).toContain('PUBLISHED');
    expect(wrapper.html()).toContain('RATING');
    expect(wrapper.html()).toContain('BUY ON');
  });

  it('has the expected number of columns', () => {
    const cols = wrapper.findAllComponents(components.VCol);
    expect(cols.length).toBe(4);
  });
});
