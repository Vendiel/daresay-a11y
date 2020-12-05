---
id: controls-consistent-names
title: Controls that has the same functionality, must have consistent labels/accessible names across the site
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
  - 3.4.2 AA
roles:
  - Design
  - Tech
---

## Description

If controls with identical functions across a site have different labels/accessible names the site will be considerably more difficult to use for screen reader users, as well as increasing cognitive load for people with cognitive limitations.

However, consistent does not always mean identical. For instance if the site is using the same printer icon button to print receipts and invoices, then it's okay to label the button with “Print receipt” and “Print invoice” (they still are consistent enough). The same goes for "Download <name of file\>".

## Exceptions

If the control has different meanings on different pages, then the labels should not match. For instance if a check mark icon button is used for “approved” on one page and “included” on another, then the text alternative/accessible name should differ.
