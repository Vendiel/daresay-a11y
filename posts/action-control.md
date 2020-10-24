---
id: action-control
title: Make sure that any action takes place when the user releases a control (up-event), not when pressing or clicking down on it
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
  - 2.5.2 A
roles:
  - Design
  - Tech
sidebar_label: Control release for action
---

### Description

This aims to reduce accidentally triggering things on a page, making it easier for all users for hitting the wrong control.

### Examples

Examples of pop-up content: custom tooltips, sub-menus (drop down menus), nonmodal popovers.

### Exceptions

1. When it’s essential that the action takes place on the down-event, like playing an on-screen piano keyboard or emulating a keyboard or numeric keypad.
2. When the up-event reverses the outcome of the down-event, like when a pop-up is shown on the down-event and disappears with the up-event.
