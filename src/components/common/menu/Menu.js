const Menu = {
  data() {
    return {
      isMenuOpened: true,
    };
  },
  methods: {
    toggle() {
      this.isMenuOpened = !this.isMenuOpened;
    },
  },
};

export default Menu;
