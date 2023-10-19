import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BookHeader from '../BookHeader.vue';

describe('BookHeader.vue', () => {
  // Mounting the component for testing
  const wrapper = mount(BookHeader, {
    props: {},
    global: {
      components: {}
    }
  });

  it('renders the correct title', () => {
    expect(wrapper.text()).toContain('Most popular Books of All time');
  });
});
