const Spinner = {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};

export default Spinner;
