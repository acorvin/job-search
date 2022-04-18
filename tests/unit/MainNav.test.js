import { mount } from '@vue/test-utils';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch('Corvin Careers');
  });

  it('displays menu items for navigation', () => {
    const wrapper = mount(MainNav);
    const navMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navMenuItemsText = navMenuItems.map((item) => item.text());
    expect(navMenuItemsText).toEqual([
      'Teams',
      'Locations',
      'Our Mission',
      'Work With Us',
      'Learn',
      'Jobs',
    ]);
  });

  describe('when user is logged out', () => {
    it('prompts the user to sign in', () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      const loginButton = wrapper.findComponent({ name: 'ActionButton' });
      const profileImage = wrapper.findComponent({ name: 'ProfileImage' });
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe('when user logs in', () => {
    it('displays user profile picture', () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const loginButton = wrapper.findComponent({ name: 'ActionButton' });
      const profileImage = wrapper.findComponent({ name: 'ProfileImage' });
      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
