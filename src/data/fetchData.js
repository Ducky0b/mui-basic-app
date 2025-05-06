import jobs from "./data.json";

async function getJobs(page, q = null) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

  if (q) {
    let filtedJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(q.toLowerCase()) ||
        job.description.toLowerCase().includes(q.toLowerCase()) ||
        job.city.toLowerCase().includes(q.toLowerCase()) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(q.toLowerCase())
        )
    );
    return { jobs: filtedJobs, pagesTotal: 1 };
  } else {
    return { jobs: jobs.slice((page - 1) * 6, page * 6 - 1), pagesTotal: 2 };
  }
}

async function getJob(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;

  return jobs.find((job) => job.id === id);
}

export default { getJobs, getJob };
