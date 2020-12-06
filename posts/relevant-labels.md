---
id: relevant-labels
title: Every control must have a relevant and correctly marked up label that is associated with the control
tags:
  - Controls
  - Forms
  - Text fields
  - Radio buttons
  - Checkboxes
  - Drop downs
  - File select fields
  - Date pickers
reqs:
  - 3.3.2 A
  - 1.3.1 A
  - 4.1.2 A
roles:
  - Tech
  - Design
---

## Description

All controls must have a label so that all users - independent if they using assistive technology or not - can identify the purpose of the control and what type of information that she or he is expected to enter.

Please note that the term label is not limited to the label element in HTML, see examples below.

## Possible solutions

- The preferred solution is to use a visible label element and connect it to the control. By marking it up correctly with "for" the clickable area gets bigger since the label will also be included.
- If there's a single text field with an adjacent button, like with a search field and its button, the label on the button is sufficent as a label for the text field - no other visible label is needed. However, when there's no proper label associated with the control you need to add additional meaning for people using screen readers, using either title, aria-label or aria-labelledby.
- If you use several fields for one label, like dividing hour and minute in two seperate fields for “Starting time”, then group them in a fieldset with the legend “Starting time” and give each field an invisible label for screen readers to read.
- Make use of aria-labelledby in situations where a meaningful label should consist of more than one label string (it can concatenated different ids). Can be useful when the text field is part of a sentence.
