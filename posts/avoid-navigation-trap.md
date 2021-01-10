---
id: avoid-navigation-trap
title: Don't trap users in a section of the page or in a component while navigating with a keyboard
tags:
  - Interaction
  - Navigation
reqs:
  - 2.1.2 A
roles:
  - Tech
prio: 16
---

## Description

This can become an issue when using plug-ins or embedded applications on the page, as well as modal dialogs, form controls, calendar pickers or autocomplete widgets. The user must be able to leave the component with standard navigation such as arrow or tab keys (or other standard exit method).

## Additional information

If there is no way to leave the subsection of the content with ordinary keys, then the user must be notified of how to do it before entering as well as inside the section/component.
