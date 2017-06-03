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
    hide() {
      this.opened = false;
    },
  },
  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        el.clickEvent = (event) => {
          if (event.target.id !== 'dropdownMenu' && !el.contains(event.target)) {
            vnode.context[binding.expression]();
          }
        };
        document.body.addEventListener('click', el.clickEvent);
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickEvent);
      },
    },
  },
};

export default DropdownMenu;
