---
id: unexpected-changes
title: No unexpected change in context shall happen when a user interacts with a control
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
  - 3.2.2 A
roles:
  - Design
prio: 207
---

## Description

It’s important that form controls work in a predictable way and that no substantial changes occur when interacting (selecting, typing etc) with them - that can confuse users. For instance, do not automatically submit a form when all fields are filled, refresh the page when an option from a select element (drop down) is selected, move focus automatically from one text field to another.

## Exception

1. Changes in context when interacting with form controls are okay if there’s been clear instructions before the control (for example in the beginning of the form) that such changes will happen.

## Additional information

Showing additional fields (form controls) when the user selects a certain radio button is okay, that is considered a change in content, not a change in context. The overall structure of the form still remains the same.
