---
id: aria-describedby
title: Make sure that any hint text that is placed between the label and control has the role of aria-describedby
tags:
  - Markup
reqs:
  - 2.5.3 A
roles:
  - Tech
---

## Description

Make sure that the accessible name for the control will be associated with the label and not the hint text - use aria-describedby to associate the hint text with the control.

Note. You can check out each controls accessible name in the browser. In Chrome: Inspect element, then under “Accessibility” the name is shown under “Computed properties”.
