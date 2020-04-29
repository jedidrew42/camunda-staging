---
title: "End-to-End Process Automation Monitoring, Reporting and Optimization | Camunda BPM"
description: "End-to-End Process Automation Monitoring and Reporting: Reports, Alerting and Analytics."
date: 2020-04-21T10:39:22+02:00
draft: false
showProductSubnav: true
contact: true
---
{{<highlight title="Optimize">}}
  End-to-End Process Automation Monitoring and Reporting
  <p style="margin-top:30px">
    <a href="/download/enterprise/" class="btn btn-primary">Get Started with 30-Day Trial</a>
  </p>
  <p>
  <div style="text-align: center;">
      <div style="display: inline-block; text-align: left;"><br>
      <li>Monitor Camunda and external process automation activities</li>
      <li>Detailed reports to answer the questions most important to your team</li>
      <li>See where end-to-end processes are running smoothly or hitting bottlenecks with BPMN Heatmaps</li>
      <li>Improve process analysis and identify slow branches</li>
      <li>Build custom dashboards and alerts to stay on top of current activities</li>
      </div>
  </div>
  </p>
{{</highlight>}}
<!-- {{<news img="webinar-white.png" title="Upcoming Webinar - Camunda Optimize 3.0 Release" text="End-to-End Business Process Monitoring and Reporting - even if only parts of your process have been automated with Camunda. Learn more: Wednesday, April 8, 2020 at 5pm CET / 11am ET"  btntext="Register Now" btnlink="https://camunda.com/learn/webinars/camunda-optimize-30-release-webinar/">}} -->
{{%list-item title="Process Automation Monitoring" video="https://www.youtube.com/embed/GGQ4hstOneA?rel=0&amp;&amp;showinfo=0" %}}
Camunda Optimize supports continuous process and decision table improvement by providing transparency into your automated workflows and decisions. Business-friendly reports and dashboards as well as alerts help you to identify process bottlenecks and improve your overall end-to-end process.

It works out-of-the-box, and the installation is very simple. Learn more about Optimize in detail below.
{{%/list-item%}}

{{%list-item title="Reports" img="/img/products/optimize/reports.png" img_shadow="true" img_width="100%" %}}
With Optimize, your business stakeholders can easily create and customize insightful reports.

For example, they can display the number of process instances grouped by days, the duration of process instances by hour.

Reports can be shared with others even if they do not have a user login for Optimize. And you can embed a report in other websites such as Atlassian Confluence to provide up to date information to your stakeholders.

You can also export your report data as CSV files in order to open them in tools like Microsoft Excel.

[Learn more about reporting capabilities in Optimize](/products/optimize/reports).
{{%/list-item%}}

{{%list-item title="Powerful Filters" img="/img/products/optimize/filter.png" img_shadow="true" img_width="100%" %}}
You can conveniently filter the process instances and decision evaluations you want to include in your reports.

For example, you can specifically look at process instances that

* are currently running, have been completed or (not) cancelled.
* started or ended in a defined time span, let it be absolute or relative such as the past 7 days or 24 hours.
* took more than a specific cycle time to complete which allows you to identify low performance.
* contain variables with specific values which you can conveniently select in the filter field.
* consist of specific steps which have been executed so that you focus your report on certain process variants.

{{%/list-item%}}


{{%list-item title="BPMN Heatmaps" img="/img/products/optimize/heatmap.png" img_shadow="true" img_width="100%" %}}
BPMN is the common language for business and IT and the perfect instrument for analyzing process data.

In Optimize you can use BPMN heatmaps to discover process steps that are frequently executed or were significantly slow to complete which provides you a shortcut to identify bottlenecks in process performance.

In combination with filters, this will help you to understand the circumstances under which low performance occurs and therefore point you to the respective root causes.

{{%/list-item%}}

{{%list-item title="Dashboards" img="/img/products/optimize/dashboard.png" img_shadow="true" img_width="100%" %}}
Arrange your reports in dashboards to provide a quick overview. If you like, you can even add external reports to your dashboard. You can create as many dashboards as you like to easily share the right information with different stakeholders.

Like reports, dashboards can be shared with others even if they do not have a user login for Optimize. And you can embed a dashboard in other websites such as Atlassian Confluence to provide up to date information to your stakeholders.
{{%/list-item%}}

{{%list-item title="Alerts" img="/img/products/optimize/alert.png" img_shadow="true" img_width="70%" %}}
If your stakeholders need to be informed immediately once certain thresholds are reached, you can set up alerts based on reports.

For example, you could define a report that counts the number of process instances that were started in the past 24 hours but are not yet completed. Then you could define an alert which will check every minute if this number is above a defined threshold, let's say 100 instances. In this case, the alert will trigger an email to the specified recipient, potentially reminding them in defined intervals and sending a fix notification once the the number has dropped below the defined threshold.

{{%/list-item%}}

{{%list-item title="Analyze Process Variants" img="/img/products/optimize/branch.png" img_shadow="true" img_width="100%" %}}
How do certain variants in your process impact the business results? You can find out with the branch analysis by selecting a process end event and a process gateway. Optimize will then tell you the statistical probability of reaching the respective end event when taking a specific gateway branch.

In this example, we are looking at incoming job applications. Some are assigned automatically to a hiring manager, in other cases the assignment happens manually. This variant is visualized by a gateway (diamond shape) and two outgoing branches. Unfortunately, job candidates sometimes change their mind and cancel their application as visualized by the interrupting event subprocess. In this example, this happened on average in 19.7% of the cases.

However, Optimize tells us that the cancellation rate was around 24% when the assignment happened manually and it dropped to 18% when the candidate was automatically assigned! Apparently we should consider automatic assignments for all candidates, thereby speeding up the hiring process and reducing the risk of cancellations.

{{%/list-item%}}

{{%list-item title="Simply try your own Data" img="/img/products/optimize/optimize-architecture.png" img_width="80%" %}}
Optimize is very easy to set up and non-intrusive to your Camunda environment: It will simply connect to the Camunda REST API and import the historical data, storing it in a big data repository (Elasticsearch) that allows for powerful queries. After the initial import, Optimize will pull new data from Camunda in configurable intervals providing you with up-to-date information in soft real-time. Deleting data in Camunda won’t automatically delete the data in Optimize, so you can create reports based on historic data that has been removed from Camunda before.

The data import itself can be customized, which allows you to enrich the data in Optimize with information that you can pull from any source available to you. For example, you can use this mechanism to query additional data that is related to the process instances and import that data as variables in Optimize in order to use them as filter parameters in your reports.
{{%/list-item%}}

{{%list-item title="Ingest External Events for End-to-End Reporting" img="/img/products/optimize/optimize-3-architecture.png" img_width="100%" %}}
Optimize can even be used in situations where you have not automated the complete end-to-end business process with Camunda or parts of it are being executed in other systems.
Simply ingest process-related events into Optimize, map the events to a process model and get full transparency for your whole process.

Please <a href="#contact">contact us</a> to schedule a demo or a technical discussion with our consultants.
{{%/list-item%}}
