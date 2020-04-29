---
title: "CamundaCon 2018"
date: 2017-10-25T10:39:22+02:00
draft: false
showSubNavCustom: true
---


{{<camundacon-talk title="Extension to build and evaluate process variants" date="Friday, September 21, 3:30 pm" speakers="Daniel Hilpoltsteiner" headshot="danielhilpoltsteiner.jpg" about="Daniel Hilpoltsteiner is a research associate at the University of Applied Sciences in Landshut. His main focus is information modeling in small and medium-sized companies. Prior to that, he earned a Bachelor's degree in Business Information Systems and a Master's degree in Applied Computer Science from Landshut University. During his time as a student, he worked in various companies to create software for the web." >}}
<p>
The IPIM (Institute for Project Management and Information Modelling of the University of Applied Sciences Landshut) deals with applied research, knowledge transfer and offers certified courses in project management. The institute is also a member of the Object Management Group (OMG). By a recommendation of the Camunda management and a scientific evaluation of different open source modelling tools the institute came to the decision to realize further software prototypes with the open source modelling tool Camunda Modeler1.
</p>
<p>
Many companies are confronted with variants of business processes that differ only in a few partial steps. The problems in the management of business process variants can be seen in many industries and application areas, e.g. in logistics or project management2. Each variant is often recorded in its own model, resulting in high redundancies. This quickly leads to inconsistencies in identical process parts across models, the maintenance effort increases, and model administration quickly becomes confusing.
</p>
<p>
A web application with Angular 4 and TypeScript was developed as a solution that extends the Camunda Modeler to model BPMN process variants3. The goal is to enable the construction of adaptive, configurable process models with the help of configuration terms. Using the "element selection via terms" method by Becker et al., only elements whose configuration terms are evaluated true remain in the model. This makes it possible to display several process variants in one model, but also to generate individual, concrete variants of a process from an adaptive, configurable process model4.. The developed solution enables a reduction of redundancies in different process variants and thus reduces the risk of inconsistencies and the effort involved in model maintenance.
</p>
{{</camundacon-talk>}}
