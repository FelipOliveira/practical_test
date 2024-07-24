import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent {
  jobs?: Job[];
  currentJob: Job = {};
  currentIndex = -1;
  title = '';

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.retrieveJobs();
  }

  retrieveJobs(): void {
    this.jobService.getAll().subscribe({
      next: (data) => {
        this.jobs = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveJobs();
    this.currentJob = {};
    this.currentIndex = -1;
  }

  setActiveJobs(job: Job, index: number): void {
    this.currentJob = job;
    this.currentIndex = index;
  }

  /* removeAllJobs(): void {
    this.jobService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  } */

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
}
