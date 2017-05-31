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
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    getProjects(this);
  },
};

export default Project;
