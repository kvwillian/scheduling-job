/**
 *  O(N^2))
 *  O(N))
 *  O(log N) 
 * 
 *  [1,2,3,4,5,6,7,8,9,10] = [1,7], [2,6], [3,5]
 *
 * */ 

let TIME_LIMIT = 8;

const listJobs = [
    {
        id: 1,
        description: 'Importação de arquivos', 
        conclusionDate: new Date("2019-11-10 12:00:00"),
        estimatedTime: 2,
    },
    {
        id: 2,
        description: 'Importação de dados', 
        conclusionDate: new Date("2019-11-11 12:00:00"),
        estimatedTime: 4,
    },
    {
        id: 3,
        description: 'Importação de integração', 
        conclusionDate: new Date("2019-11-11 08:00:00"),
        estimatedTime: 6,
    },
];

const sortJobs = (listJobs) => {
    const sortedArray = listJobs.sort((a, b) => a.conclusionDate - b.conclusionDate);
    return sortedArray;
}

const scheduleJobs = function(jobs, selectedJobs = {}, pivot = 0) {
    for (let index = 0; index < jobs.length; index++) {
        if (pivot + jobs[index].estimatedTime <= TIME_LIMIT) {
            pivot += jobs[index].estimatedTime;
            selectedJobs[jobs[index].id] = true;
        }
    }
    return selectedJobs;
}

const performSchedule = function(jobs, subJobs = []) {
    if (jobs.length == 0) return subJobs;
    const scheduleResult = scheduleJobs(jobs);
    subJobs.push(Object.keys(scheduleResult));
    jobs = jobs.filter(job => !scheduleResult[job.id]);
    return performSchedule(jobs, subJobs);
}

const sortAndFinishSchedule = function(listJobs) {
    const result = sortJobs(listJobs);
    return performSchedule(result);
}

console.log(sortAndFinishSchedule(listJobs));

module.exports = {
    sortAndFinishSchedule: sortAndFinishSchedule
};
 