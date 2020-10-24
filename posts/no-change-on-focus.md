---
id: no-change-on-focus
title: No unexpected change in context shall occur when a control receives focus
tags:
  - Controls
  - Buttons
  - Text fields
  - Radio buttons
  - Checkboxes
  - Drop downs
  - File select fields
  - Date pickers
  - Buttons
  - Tabs
  - Slider
reqs:
  - 3.2.1 A
roles:
  - Design
sidebar_label: Controls context
---

### Description

When a control receives focus it shall not result in a substantial change that disorients the users. All changes of context would be triggered only by a specific action on the part of the user.

### Examples

- A form that’s automatically submitted when the submit button receives focus.
- A new window is launched when a link receives focus.
- Focus gets automatically moved to another control.

### Additional Information

Showing additional things on hover, like a tooltip or a drop down menu is okay. These things are not changing the context (moving focus away to another place).
