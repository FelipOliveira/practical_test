import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-users-jobs-list',
  templateUrl: './users-jobs-list.component.html',
  styleUrls: ['./users-jobs-list.component.css']
})
export class UsersJobsListComponent {
  @Input() viewMode = false;

  @Input() currentUser: User = {
    username: '',
    email: '',
    password: ''
  };
  message = '';

  jobs?: Job[];
  currentJob: Job = {};
  currentIndex = -1;
  title = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUsersJobs(this.route.snapshot.params['id']);
    }
  }

  setActiveJobs(job: Job, index: number): void {
    this.currentJob = job;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentJob = {};
    this.currentIndex = -1;

    this.jobService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.jobs = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  getUsersJobs(id: string): void {
    this.userService.getJobsAvaliable(id).subscribe({
      next: (data) => {
        this.jobs = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  applyToJob(id: string, job: Job): void{
    this.userService.addJobToUser(id, job).subscribe({
      next: (data) => {
        this.jobs = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
