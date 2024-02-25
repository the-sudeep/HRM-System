# Human Resource Management System
The backend application API which allows you to fetch the information of HR , Jobs, and candidates for the respective job.
**API Features and endpoints:**


## Functionalities:

<ul>
  <li>Only HR/Admin can register to the system and has the most authorities. </li>
  <li>HR can post , update and delete jobs.</li>
  <li>An automated email is sent to the HR's email-address when the new Job is posted.</li>
  <li>Candidates are allowed to see all the jobs and can apply any job.</li>
  <li> Candidates will receive an email to confirm their application is submitted successfully.</li>
  <li>Only HR has the permission to see the job applications. </li>
</ul>

## Endpoints : 

### APIs for HR :
The api endpoint for HR looks like : 

=> `/api/hr/register` to register or sign-up the HR identity,

=> `/api/hr/login` to login HR's existing identity,

=> `/api/hr/logout` and finally for logout .

## The enpoints for posting JOB will look like :

=> `/api/jobs/create` For POSTING new job (Only HR can : Strict validations are implemented )

=> `/api/jobs/` Get all the jobs available (Anyone can view the jobs)

=> `/api/jobs/job-id` Get the specific job of the given ID

=> `/api/jobs/update/job-id` Update the job of the given ID 

=> `/api/jobs/delete/job-id` Delete the job of the given ID 


