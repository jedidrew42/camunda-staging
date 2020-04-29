---
title: "Modeler"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---
{{<highlight-visual title="Modeler" svg="/products/modeler.svg" svg_width="20%">}}
The developer-friendly desktop app for editing<br> BPMN process diagrams and DMN Decision Tables.
{{</highlight-visual>}}

{{%list-item title="Design Workflows and Decisions" img="https://docs.camunda.org/manual/7.7/modeler/camunda-modeler/bpmn/img/demo.gif" img_clickable="true" img_shadow="true" img_width="100%" %}}
Camunda Modeler is a desktop application for modeling BPMN workflows and DMN decisions. It’s user-friendly, allowing multiple developers to work together on the same diagrams.

Camunda Modeler supports BPMN 2.0, CMMN 1.1 and DMN 1.1 (including Decision Tables and Decision Requirements Diagrams).

<a href="/download/modeler" class="btn btn-primary">Download</a>

{{%/list-item%}}

{{%list-item title="Create Executable Models" img="https://docs.camunda.org/manual/7.7/modeler/camunda-modeler/bpmn/img/quickstart-3.png" img_clickable="true" img_shadow="true" img_width="100%" %}}
Apart from visual modeling, Camunda Modeler allows you to edit all properties necessary for technical execution. Since the Camunda Modeler works directly on the BPMN and DMN XML files, developers can easily combine it with their preferred IDE (for example Eclipse, Netbeans, IntelliJ).

The created XML files can then be deployed to the Camunda Platform and executed by the BPMN and DMN engines.
{{%/list-item%}}

{{%list-item title="Element Templates" img="/svg/products/element-templates.png" img_clickable="true" img_shadow="true" img_width="100%" %}}
Element templates allow you create pre-defined configurations in Json files to allow users to work with a customized properties panel.

For example, you can configure an "Email Task" that will always ask for the sender's email address, the recipient's address, a subject and a body. Once deployed, this task will be executed based on a pre-defined execution logic for example in Java.

This allows you to provide a custom-tailored low-code environment for building and changing workflows in your organization.

[Element Templates Documentation](https://github.com/camunda/camunda-modeler/tree/master/docs/element-templates)
{{%/list-item%}}

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Additional Plugins</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
        	<p>
You can plug into the modeler in order to change its appearance, add new menu entries or extend the modeling tools for BPMN, CMMN and DMN.
</p>
<p> Adding a plugin is as easy as putting the files into the respective directory.
        	</p>
        	<p><a href="https://github.com/camunda/camunda-modeler-plugins#camunda-modeler-plugins-electric_plug">List of available Plugins</a></p>
        </div>
        <div class="col-md-6" >
			<blockquote class="twitter-tweet" data-lang="de"><p lang="en" dir="ltr">Token Simulation v0.6.0 is here. It ships with lots of improvements. Get the Camunda Modeler plugin: <a href="https://t.co/YR3ZJKIxoH">https://t.co/YR3ZJKIxoH</a> <a href="https://t.co/jAa1biPibZ">pic.twitter.com/jAa1biPibZ</a></p>&mdash; Philipp Fromme (@philippfromme) <a href="https://twitter.com/philippfromme/status/909449520676818944?ref_src=twsrc%5Etfw">17. September 2017</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
</section>
