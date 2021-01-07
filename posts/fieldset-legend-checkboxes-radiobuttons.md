---
id: fieldset-legend-checkboxes-radiobuttons
title: Related checkboxes and radiobuttons should be grouped with fieldset-legend
tags:
  - Checkboxes
  - Radio buttons
reqs:
  - 1.3.1 A
roles:
  - Tech
  - Design
prio: 4
---

## Description

If a set of checkboxes and radiobuttons submit to the same named field then it's important to semantically group them together so they get treated as one single control. The individual label associated with each radiobutton or checkbox may not fully convey the group's descriptive context.

## Exception

- When a group of related radiobuttons or checkboxes includes clear instructions and distinct selections (i.e. where the individual label associated with each particular control provides a sufficient description), then the use of the fieldset and legend elements is not required.

## Additional information

For those occasions where fieldset-legend is not an option, then consider grouping the controls in a div with role="group" together with aria-labeledby. For radiobuttons, use role="radiogroup".

Avoid nesting fieldsets unnecessarily as this can lead to confusion.
