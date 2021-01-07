---
id: no-change-on-focus
title: When a control receives focus no unexpected change in context shall occur
tags:
  - Forms
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
prio: 15
---

## Description

When a control receives focus it shall not result in a substantial change of context that disorients the users. All changes of context should be triggered by user action.

## Examples

- A form that’s automatically submitted when the submit button receives focus.
- A new window is launched when a link receives focus.
- Focus gets automatically moved to another control.

## Additional information

Showing additional things on hover, like a tooltip or a drop down menu is okay. These things are not changing the context (moving focus away to another place).
