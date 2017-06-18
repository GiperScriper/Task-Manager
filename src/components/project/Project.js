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
    };
  },
  methods: {
    showAddDialog() {
      this.isOpenAddDialog = true;
    },
    closeAddDialog() {
      this.isOpenAddDialog = false;
      this.project = {
        title: '',
        description: '',
      };
    },
    showDeleteDialog(project) {
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
    isProjectEmpty() {
      return !(!!this.project.title && !!this.project.description);
    },
    isConfirmed() {
      return this.projectNameConfirmation === this.currentProject.title;
    },
  },
  filters: {
    date() {
      return '1111';
    },
  },
};

export default Project;
