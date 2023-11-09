// categoriesAndFeaturedJobs.js

import { getAppliedJobs } from "../utils/fakeDb";

export async function fetchCategories() {
    const response = await fetch('categories.json');
    const categories = await response.json();
    return categories;
  }
  
  export async function fetchJobs() {
    const response = await fetch('jobs.json');
    const jobs = await response.json();
    return jobs;
  }
  
  export async function categoriesAndFeaturedJobs() {
    const categoriesData = await fetchCategories();
    const jobsData = await fetchJobs();
    // Fetch applied jobs logic
    const appliedJobsData = [];
    const jobsResponse = await fetch('jobs.json');
    const jobs = await jobsResponse.json();
  
    // Get applied jobs from local storage
    const appliedJobs = getAppliedJobs();
  
    // Find applied jobs based on id
    for (const id in appliedJobs) {
      const foundJob = jobs.find(job => job.id === parseInt(id));
      if (foundJob) {
        appliedJobsData.push(foundJob);
      }
    }
  
    return { categories: categoriesData, jobs: jobsData, appliedJobsData };
  }

  // export async function fetchAppliedJobs(){
  //   const jobsData = await fetch('jobs.json');
  //   const jobs = await jobsData.json();

  // // Get applied jobs from local storage
  // const appliedJobs = getAppliedJobs();

  // // Find applied jobs based on id
  // const appliedJobsData = [];
  // for (const id in appliedJobs) {
  //   const foundJob = jobs.find(job => job.id === parseInt(id));
  //   if (foundJob) {
  //     appliedJobsData.push(foundJob);
  //   }
  // }

  // return {appliedJobsData} ;
  // }
  