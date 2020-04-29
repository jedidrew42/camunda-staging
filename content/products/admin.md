---
title: "Admin"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---
{{<highlight-visual title="Admin" svg="/products/admin.svg" svg_width="20%">}}
Manage your Camunda web application or REST API users, organize them in groups and grant permissions with Camunda Admin.
{{</highlight-visual>}}

{{%list-item title="User Management" img="https://docs.camunda.org/manual/webapps/admin/img/admin-initial-user-setup.png" img_width="100%" %}}
Administrators use Admin to manage your users, organize them in groups and grant permissions. Camunda decouples the identification of users from their authorization to execute certain actions.

To complete identification, you can either use the user management system that ships with Camunda or your existing user management system that you can integrate with Camunda via LDAP. Once a user has identified themselves (e.g. submitted the login screen in a Camunda web application), Camunda will authorize them based on the permissions defined in Camunda Admin.

The permissions that you define in Camunda Admin will be considered at all levels, i.e. when calling the core engine API, the REST API and when using a Camunda web application.

{{%/list-item%}}
