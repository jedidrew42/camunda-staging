---
title: "CamundaCon 2018"
date: 2017-10-25T10:39:22+02:00
draft: false
showSubNavCustom: true
---


{{<camundacon-talk title="Camunda In A Heterogeneous Cluster" date="Friday, September 21, 1:30 pm" speakers="Abhishek Pande" headshot="abhishek.jpg" about="Abhishek Pande has been working in the software industry for the past 19 years. He has worked mostly with Java technologies. He has worked as a software engineer, architect and consultant in domains such as engineering and finance. Since March 2018 he is working in technical architecture group at Generali." >}}
<p>
Generali Switzerland is an insurance company with products in the life and non-life sectors. We have a data integration backbone hosted on a private cloud using Redhat OpenShift. This infrastructure integrates the existing core backend systems with the frontend channels principally through data streaming. It also hosts new applications being developed in the company. The applications running on this environment are typically spring boot applications. 
</p>
<p>
Deployment of applications on this infrastructure is subject to security and regulatory compliance. Historically the process to ensure this compliance has only been on paper. To automate, audit and enforce these requirements, we have decided to implement these processes using Camunda. Examples of such processes are a business process to deploy to production, and another to provide temporary access to production data.
</p>
<p>
It was decided to deploy the business processes on the OpenShift backbone itself. Each process is deployed as a spring boot application. 
<ul>
<li>This leverages the existing infrastructure</li>
<li>Isolates one BPM process execution from another (micro-service)</li>
</ul>
</p>
<p>
After much deliberation it was also decided to use a central database for all processes. The main driver for this decision was the business need to have a central task list and the limited time in which to deliver such a task list. 
This architecture leads to a unique problem. 
<ul>
<li>
User interaction in the central task list leads to the execution of code which is only present in the JVM of the spring boot application of that process (and not of the central task list)
</li>
<li>
Embedded UI forms
</li>
<li>
Java classes (task listeners, execution listeners, service tasks)
</li>
</ul>

This talk presents how an approach to resolve this problem using mechanisms that exist within the Camunda architecture.
</p>
{{</camundacon-talk>}}
