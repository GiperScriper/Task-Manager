import urls from '../../config';

async function getProjects(ctx) {
  try {
    const response = await ctx.$http.get(urls.projects);
    ctx.projects = response.body.data;
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
    };
  },
  filters: {
    date() {
      return '1111';
    },
  },
};

export default Project;
