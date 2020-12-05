---
id: fieldset-legend-controls
title: Group related controls with fieldset-legend
tags:
  - Forms
reqs:
  - 1.3.1 A
roles:
  - Tech
  - Design
---

## Description

A group of controls that are logically related, like for instance controls for entering a users's adress, can be grouped with fieldset-legend.

For those occasions where fieldset-legend is not an option, then consider grouping the controls in a div with role=""group"" together with aria-labeledby.

## Additional Information

Avoid nesting fieldsets unnecessarily, as this can lead to confusion.
