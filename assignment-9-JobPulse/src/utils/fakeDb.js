
// add aplliedJobs id in loacl storage
export const addToAppliedJobs = (id) =>{
    let appliedJobs = {};
    const storedJobs = localStorage.getItem('applied-jobs');
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs);
        if(appliedJobs[id]){
            alert('You have already applied for this job'); 
            return; //it stops further execution
        }
    }
    // add applied job id
    appliedJobs[id] = true;
   
    // update localStorage with the new applied jobs list
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

export const getAppliedJobs = () =>{
    let appliedJobs = {};
    const storedJobs = localStorage.getItem('applied-jobs');
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;

}