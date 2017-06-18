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
      console.log('current project', project);
      this.currentProject = project;
      const index = this.projects.indexOf(project);
      console.log('index', index);
      this.projects[index].hide = true;
      // this.isOpenDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.isOpenDeleteDialog = false;
    },
    createProject() {
      saveProject(this);
    },
  },
  computed: {
    isProjectEmpty() {
      return !(!!this.project.title && !!this.project.description);
    },
  },
  filters: {
    date() {
      return '1111';
    },
  },
};

export default Project;
