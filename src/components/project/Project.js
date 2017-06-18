import moment from 'moment';
import urls from '../../config';

async function getProjects(ctx) {
  try {
    const response = await ctx.$http.get(urls.projects);
    ctx.projects = response.body.data;
  } catch (error) {
    // Handle error
  }
}

async function saveProject(ctx) {
  try {
    const response = await ctx.$http.post(urls.projects, ctx.project);
    ctx.projects.push(response.body);
    ctx.closeAddDialog();
  } catch (error) {
  // Handle error
  }
}

async function deleteProject(ctx) {
  try {
    await ctx.$http.delete(`${urls.projects}/${ctx.currentProject._id}`);
    const index = ctx.projects.indexOf(ctx.currentProject);
    ctx.projects.splice(index, 1);
    ctx.currentProject = {};
    ctx.closeAddDialog();
  } catch (error) {
  // Handle error
  }
}

const Project = {
  mounted() {
    getProjects(this);
  },
  data() {
    return {
      projects: [],
      project: {
        title: '',
        description: '',
      },
      currentProject: {},
      projectNameConfirmation: '',
      isOpenAddDialog: false,
      isOpenDeleteDialog: false,
      dateFormat: 'D MMM, YYYY',
      lengthLimit: 30,
    };
  },
  methods: {
    showAddDialog() {
      this.isOpenAddDialog = true;
      console.log('now', moment.now());
    },
    closeAddDialog() {
      this.isOpenAddDialog = false;
      this.project = {
        title: '',
        description: '',
      };
    },
    showDeleteDialog(project) {
      this.projectNameConfirmation = '';
      this.currentProject = project;
      this.isOpenDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.isOpenDeleteDialog = false;
    },
    createProject() {
      saveProject(this);
    },
    deleteProject() {
      deleteProject(this);
    },
  },
  computed: {
    user() {
      return this.$store.getters.user.data;
    },
    isProjectEmpty() {
      return !(!!this.project.title && !!this.project.description);
    },
    isConfirmed() {
      return this.projectNameConfirmation === this.currentProject.title;
    },
  },
  filters: {
    truncate(value, limit) {
      return value.length > limit ? `${value.substring(0, limit)}...` : value;
    },
    date(date, format) {
      return moment(date).format(format);
    },
  },
};

export default Project;
