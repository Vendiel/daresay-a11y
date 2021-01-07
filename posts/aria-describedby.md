---
id: aria-describedby
title: The hint text should have the role of aria-describedby
tags:
  - Forms
  - Markup
reqs:
  - 2.5.3 A
roles:
  - Tech
prio: 35
---

## Description

Make sure that the accessible name for the control will be associated with the label and not the hint text - use aria-describedby to associate the hint text with the control.

Note. You can check out each controls accessible name in the browser. In Chrome: Inspect element, then under “Accessibility” the name is shown under “Computed properties”.
