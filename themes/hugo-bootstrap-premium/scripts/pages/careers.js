import axios from 'axios';
import moment from 'moment';
import helpers from '../lib/helpers';

export default class Careers {
  constructor() {
    this.locale = helpers.getLocale();
  }

  loadCareers() {
    moment.locale(this.locale);
    const $careers = $('.careers');
    axios.get(`${helpers.getUrl('workable')}`).then((result) => {
      if (result && result.data) {
        let jobs = {};
        result.data.jobs.forEach((job) => {
          if (jobs[job.department] == null) {
            jobs[job.department] = [];
          }
          jobs[job.department].push(job);
        });

        const $departmentList = $('.department-list');
        const departmentNames = Object.keys(jobs).sort();
        departmentNames.forEach((department) => {
          const departmentName = department.replace(/ /g, '-');
          const departmentHtml = `<li role="presentation" class=""><a href="#${departmentName}" aria-controls="${departmentName}" role="tab" data-toggle="tab" aria-expanded="false">${department}</a></li>`;
          $departmentList.append(departmentHtml);

          const $jobDepartmentList = $('.job-per-department');
          $jobDepartmentList.append(`<div role="tabpanel" class="tab-pane" id="${departmentName}"></div>`);

          let jobListings = jobs[department];
          jobListings = jobListings.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
          let jobLinks = '';
          jobListings.forEach((jobListing) => {
            const jobLink = `<a class="job-detail-link" href="${jobListing.url}"><div class="col-xs-12 col-sm-7">${jobListing.title}</div><div class="col-xs-12 col-sm-5 text-right"><div class="work-place"><i class="glyphicon glyphicon-map-marker"></i>${jobListing.location.city}, ${jobListing.location.country}</div></div></a>`;
            jobLinks += jobLink;
          });
          $(`#${departmentName}`).append(jobLinks);
        });
        $('.department-list li a').first().click();
        if (window.location && window.location.hash) {
          const hash = window.location.hash;
          $(`.department-list a[href="${hash}"]`).tab('show');
          $([document.documentElement, document.body]).animate({
            scrollTop: $(".department-list").offset().top
          }, 2000);
        }
      }
    });
  }
}
