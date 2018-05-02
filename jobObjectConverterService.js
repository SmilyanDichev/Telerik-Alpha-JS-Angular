const jobObjectConverter = (job) => {
let i = job.createdAt;
const date = i[8] + i[9] + '/' + i[5] + i[6] + '/' + i[0]+ i[1] + i[2] + i[3]
job.createdAt = date;

if (job.isActive) {
    job.isActive = 'Active';
} else {
    job.isActive = 'Inactive';
}


return job;
};
const someJob = {
    JobCategoryId: 1,
    createdAt: "2018-04-30T09:32:12.000Z",
    description: "cool job eh?",
    id: 1,
    isActive: true,
    isDeleted: false,
    title: "web developer",
    updatedAt: "2018-04-30T09:32:12.000Z",
};
console.log(jobObjectConverter(someJob));


