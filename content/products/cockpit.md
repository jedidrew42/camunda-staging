---
title: "Cockpit"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---
{{<highlight-visual title="Cockpit" svg="/products/cockpit.svg" svg_width="20%">}}
With Camunda Cockpit you can monitor workflows and decisions in production to discover, analyze and solve technical problems.
{{</highlight-visual>}}

{{%list-item title="Discover Problems" img="https://docs.camunda.org/manual/7.7/webapps/cockpit/img/cockpit-process-definitions-view.png" img_shadow="true" img_width="100%" %}}
Cockpit provides a dashboard of running BPMN process models that allows you to quickly see what's going on and find specific process instances based on different criteria.

Technical incidents are highlighted. You can inspect them in order to understand the root cause.
Typical examples for incidents are

* A task within the workflow tried to call an API service but received a timeout or the API responded with a technical error message or with corrupt data.
* A technical expression at a conditional flow (gateway branch), an event attribute or similar failed because of missing data.
* An executed Java code that was invoked from a Service Task threw an exception.
* A BPMN error event was thrown within a subprocess.


{{%/list-item%}}

{{%list-item title="Analyze Problems" img="https://docs.camunda.org/manual/webapps/cockpit/img/cockpit-decision-instance-view.png" img_shadow="true" img_width="100%"  %}}
To gain a full understanding of a technical problem you often need to inspect the process execution flow that happened before the error occured.
For example, a technical expression at a gateway may have failed as 5 steps before that gateway, a variable was populated with a wrong value due to a design error in a DMN decision table that was invoked from a BPMN business rule task.

With Cockpit you can quickly discover such an error by inspecting

* the [BPMN audit log](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-history-views/#process-instance-history-view) of executed steps,
* the way process variables have been changed during those steps
* and the [historic decision table executions](https://docs.camunda.org/manual/webapps/cockpit/dmn/decision-instance-view/) to see which rules applied in the specific execution of that process.
{{%/list-item%}}

{{%list-item title="Solve Problems" img="https://docs.camunda.org/manual/webapps/cockpit/img/migration/step1_overview.png"  img_shadow="true" img_width="100%"  %}}
Once you've understood the problem, you can

* [Suspend the process](https://docs.camunda.org/manual/webapps/cockpit/bpmn/suspension/) to prevent further execution while you're fixing the root cause,
* [Add, edit or delete process variables](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-view/#add-variables),
* [Modify the current status](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-modification/) of one or many process instances, e.g. move the execution state to a different step,
* [Migrate](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-migration/) one or many process instances to a newer version of the process model,
* [Change decision table logic](https://docs.camunda.org/manual/webapps/cockpit/dmn/live-editing/) directly in Cockpit,
* [Cancel](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-view/#cancel-a-process-instance) one or many process instances,
* [Retry](https://docs.camunda.org/manual/webapps/cockpit/bpmn/failed-jobs/) the execution of one or many process instances.


{{%/list-item%}}

{{%list-item title="User Management & LDAP" img="https://docs.camunda.org/manual/webapps/admin/img/admin-initial-user-setup.png" img_width="100%" %}}
Administrators use Admin to manage your users, organize them in groups and grant permissions. Camunda decouples the identification of users from their authorization to execute certain actions.

To complete identification, you can either use the user management system that ships with Camunda or your existing user management system that you can integrate with Camunda via LDAP. Once a user has identified themselves (e.g. submitted the login screen in a Camunda web application), Camunda will authorize them based on the permissions defined in Camunda Admin.

The permissions that you define in Camunda Admin will be considered at all levels, i.e. when calling the core engine API, the REST API and when using a Camunda web application.

{{%/list-item%}}


<center id="features" style="margin-bottom: 50px; margin-top:150px;">
<h2 class="light lead">Community vs. Enterprise</h2>
<p class="light lead" style="width:60%">Cockpit comes with a basic feature set as part of the open source Community Platform. The full feature set is available with the Enterprise Platform.</p>
</center>
{{<cockpit>}}
