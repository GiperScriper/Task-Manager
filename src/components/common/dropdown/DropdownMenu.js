const DropdownMenu = {
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened;
    },
  },
};

export default DropdownMenu;
