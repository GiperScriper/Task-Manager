import Auth from '../auth';
import router from '../../../router';

const DropdownMenu = {
  data() {
    return {
      opened: false,
    };
  },
  computed: {
    username() {
      const { firstName, lastName } = this.$store.getters.user.data;
      return `${firstName[0].toUpperCase()}. ${lastName}`;
    },
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    },
    logout() {
      Auth.logout(router);
    },
  },
  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        el.clickEvent = (event) => {
          if (event.target !== el && !el.contains(event.target)) {
            vnode.context[binding.expression]();
          }
        };
        window.addEventListener('click', el.clickEvent);
      },
      unbind(el) {
        window.removeEventListener('click', el.clickEvent);
      },
    },
  },
};

export default DropdownMenu;
