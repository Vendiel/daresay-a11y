---
id: controls-contrast-ratio
title: Active controls must have a contrast ratio of at least 3:1 against adjacent colors
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
  - 1.4.11 AA
roles:
  - Design
prio: 204
---

## Description

Active controls like buttons, text fields, checkboxes, tabs, rating stars, etc must have enough contrast so that they are distinguishable by people with low vision or other impairments. This also includes the different states of the control (hover, active, focus, visisted etc).

Note. It's not needed to have a 3:1 contrast between the different states of the control, since they do not appear next to each other at the same time.

## Exceptions

1. If the component is inactive (disabled).
2. If the visual appearance of the control is decided by the user agent (browser) and hasn't been modified.

Note. This requirement does not imply that controls must have a visual boundary indicating the hit area and that visual boundary must fulfill the 3:1 contrast - that's only needed if the visual boundry is the only was to visually identify the control.

## Examples

Examples that will pass:

- A button that includes a text or an icon that is visible, i.e. has enough contrast against its background (4.5:1 resp. 3:1), but where there's no visual indication of the actual hit area of the button.
- A text fields with a placeholder text inside that is visible , i.e. has enough contrast against its background, but where there's no visual indication of the hit area of the text field.
- A button which has a distingushied indicator such as position, text style or context does not need a contrasting visual indicator to show that it is a button.

## Read more

https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
https://medium.com/ingeniouslysimple/contrasting-ui-components-passing-the-new-standards-cd1f96f96494
