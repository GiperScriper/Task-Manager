import moment from 'moment';
import urls from '../../config';

async function getProjects() {
  try {
    const response = await this.$http.get(urls.projects, { headers: { spinner: 'true' } });
    this.projects = response.body.data;
  } catch (error) {
    // Handle error, show notification
  }
}

async function createProject() {
  try {
    const response = await this.$http.post(urls.projects, this.project);
    this.projects.push(response.body);
    this.closeAddDialog();
  } catch (error) {
  // Handle error
  }
}

async function deleteProject() {
  try {
    await this.$http.delete(`${urls.projects}/${this.currentProject._id}`);
    const index = this.projects.indexOf(this.currentProject);
    this.projects.splice(index, 1);
    this.currentProject = {};
    this.closeAddDialog();
  } catch (error) {
  // Handle error
  }
}

const Project = {
  mounted() {
    this.getProjects();
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
      isLeaveAddDialog: true,
      isOpenDeleteDialog: false,
      dateFormat: 'D MMM, YYYY',
      lengthLimit: 30,
    };
  },
  methods: {
    getProjects,
    createProject,
    deleteProject,
    afterLeaveDeleteDialog() {
      this.currentProject = {};
    },
    afterLeaveCreateDialog() {
      this.isLeaveAddDialog = true;
    },
    showAddDialog() {
      this.isOpenAddDialog = true;
    },
    closeAddDialog() {
      this.isOpenAddDialog = false;
      this.isLeaveAddDialog = false;
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
  },
  computed: {
    user() {
      return this.$store.getters.user.data;
    },
    isLoading() {
      return this.$store.getters.isLoading;
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
