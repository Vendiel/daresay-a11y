---
id: avoid-navigation-trap
title: Make sure that users don’t get trapped in a particular section of the page or in a component while navigating with a keyboard
tags:
  - Interaction
  - Navigation
reqs:
  - 2.1.2 A
roles:
  - Tech
---

## Description

This can become an issue when using plug-ins or embedded applications on the page, as well as modal dialogs, form controls as a calendar picker or autocomplete widgets. The user must be able to leave the component with standard navigation such as arrow or tab keys (or other standard exit method).

Note. If there is no way to leave the subsection of the content with ordinary keys, then the user must be notified of how to do it before entering as well as inside the section/component.
