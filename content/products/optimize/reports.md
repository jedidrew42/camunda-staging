---
title: "Camunda Optimize Reports | Camunda BPM"
description: ""
date: 2018-10-08T10:00:00+02:00
draft: false
showProductSubnav: true
contact: true
---

{{<highlight title="Process Questions? Optimize Has The Answers.">}}
  Build custom reports and dashboards for business activity monitoring
{{</highlight>}}


{{%list-item title="Process performance made transparent" img="/img/products/optimize/dashboard.png" img_shadow="true" img_width="100%" %}}
Camunda Optimize enables continuous process and decision table improvement by providing transparency into your automated workflows and decisions.
With Optimize, you can create custom reports in an easy-to-use report builder to find insights in your workflow and decision table data.

If you're a process owner or the person responsible for process performance, it's important to know exactly what's happening inside your processes and your decision tables.

Here are just a few of the questions you can answer with Optimize.

- [How many process instances have been executed this year, and how has this number changed over time?](#question1)
- [Have we achieved our process goals across different departments?](#question2)
- [Which steps in the process are executed most frequently?](#question3)
- [How long does it take on average for a process instance to finish?](#question4)
- [How much time do we spend on a specific task on average?](#question5)
- [How long did the longest process instance part take?](#question6)
- [Is our team carrying out the process quickly enough, or do they need more time than we'd planned for?](#question7)
- [How much time do we actually spend on User Tasks?](#question8)
- [How can we improve our decision tables?](#question9)
- [Are there any User Task instances that take much longer than usual?](#question10)
{{%/list-item%}}

{{%list-item title="How many process instances have been executed this year, and how has this number changed over time?" id="question1" video_int="/video/products/optimize/question1.mp4" video_width="100%" %}}
Camunda Optimize allows you to create reports that analyze the number of process instances that have been executed. This number can be narrowed down using a range of filters.

Along with single number reports, you can group by different characteristics such as the start date of the process instances.

The report builder gives you a variety of visualization options, including:

  - Bar, Line and Pie Charts
  - Tables
{{%/list-item%}}

{{%list-item title="Have we achieved our process goals across different departments?" id="question2" video_int="/video/products/optimize/question2.mp4" video_width="100%" %}}
With the help of Optimize, you can look at the number of executed instances narrowed down to the instances that executed a specific flow node and also ended during a defined period of time.

Additionally, you can specify target values and visualize them within your bar or line chart.
{{%/list-item%}}

{{%list-item title="Which steps in the process are executed most frequently?" id="question3" video_int="/video/products/optimize/question3.mp4" video_width="100%" %}}
Optimize allows you to take a closer look at the number of flow node executions to find out which steps in the process are executed most frequently.

This helps to identify potential bottlenecks in your workflow.
{{%/list-item%}}

{{%list-item title="How long does it take on average for a process instance to finish?" id="question4" video_int="/video/products/optimize/question4.mp4" video_width="100%" %}}
Process owners often need to know the duration of process instances when grouped by different process variables.
Optimize allows you to group minimum, maximum, median and average process instance duration by start date and process variables.

This information can be visualized as:

- Bar, Line and Pie Charts
- Tables
{{%/list-item%}}

{{%list-item title="How much time do we spend on a specific task on average?" id="question5" video_int="/video/products/optimize/question5.mp4" video_width="100%" %}}
Optimize allows you to analyze the minimum, maximum, median, and average duration of BPMN symbols in your workflow. This information can be grouped by flow nodes. Optimize provides different visualization options such as:

  - Bar, Line and Pie Chart
  - Tables
  - BPMN Heatmap
{{%/list-item%}}

{{%list-item title="How long did the longest process instance part take?" id="question6" video_int="/video/products/optimize/question6.mp4" video_width="100%" %}}
Besides analyzing minimum, maximum, median and average durations for whole process instances, Optimize also allows to only get this number for a specific part of the process.

Optimize allows different grouping options including:

  - None
  - Start Date
  - Variable

In this scenario the single number report fits the best.
{{%/list-item%}}

{{%list-item title="Is our team carrying out the process quickly enough, or do they need more time than we'd planned for?" id="question7" video_int="/video/products/optimize/question7.mp4" video_width="100%" %}}
Optimize allows not only to define target values for frequency reports, but you can also specify target values for flow node durations when using the BPMN Heatmap visualization.

The Heatmap will automatically adjust the color based on the targets.
{{%/list-item%}}

{{%list-item title="How much time do we actually spend on User Tasks?" id="question8" video_int="/video/products/optimize/question8.mp4" video_width="100%" %}}
Optimize allows to inspect User Task Durations in more detail: You can have a look into Idle, Work and Total durations of User Tasks.

With the help of a Combined Report the numbers can even be compared with each other in Bar and Line Charts.
{{%/list-item%}}

{{%list-item title="How can we improve our decision tables?" id="question9" video_int="/video/products/optimize/question9.mp4" video_width="100%" %}}
Besides BPMN, it is also possible to analyse DMN Decision Tables in Optimize.

DMN Decision Tables that are being called by BPMN processes in a business rule task or Decision Tables that are being used separately from your processes, can be analyzed in detail using Camunda Optimize.

You can look at the number of evaluations as a single number, grouped by input and output variables or evaluation time.
Optimize also allows you to look at the number of matches that each rule had, helping you to identify which rules are never or frequenly used.
{{%/list-item%}}

{{%list-item title="Are there any User Task instances that take much longer than usual?" id="question10" video_int="/video/products/optimize/question10.mp4" video_width="100%" %}}

Optimize offers capabilities to automatically analyse your processes for duration outliers. This helps you to quickly identify instances where certain tasks take significantly longer than for other instances.

Besides just finding the process instances where these tasks take much longer, Optimize even supports you with root-causing by automatically showing you significant variable combinations within these instances. With the help of this you directly have an idea why these tasks eventually took so long.
{{%/list-item%}}
