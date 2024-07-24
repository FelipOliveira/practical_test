import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  @Input() viewMode = false;

  @Input() currentJob: Job = {
    title: '',
    description: ''
  };

  @Input() currentUser: User = {
    username: '',
    email: '',
    password: ''
  };

  message = '';

  constructor(
    private jobService: JobService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getJob(this.route.snapshot.params['id']);
    }
  }

  getJob(id: string): void {
    this.jobService.get(id).subscribe({
      next: (data) => {
        this.currentJob = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  applyToJob(id: string, job: Job): void{
    this.userService.addJobToUser(id, job).subscribe({
      next: (data) => {
        this.currentJob = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  /* updatePublished(status: boolean): void {
    const data = {
      title: this.currentJob.title,
      description: this.currentJob.description,
      published: status
    };

    this.message = '';

    this.jobService.update(this.currentJob.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentJob.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  } */

  updateJob(): void {
    this.message = '';

    this.jobService
      .update(this.currentJob.id, this.currentJob)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Job was updated!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteJob(): void {
    this.jobService.delete(this.currentJob.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/jobs']);
      },
      error: (e) => console.error(e)
    });
  }
}
