const Menu = {
  computed: {
    isMenuOpened() {
      return this.$store.getters.isOpenMenu;
    },
  },
};

export default Menu;
