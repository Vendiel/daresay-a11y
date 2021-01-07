---
id: controls-action
title: An action should be triggered when a user releases a control (up-event) and it must be possible to stop or undo
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
prio: 16
---

## Description

An action should be triggered when the user releases a control (on the up-event), not when pressing or clicking down on it.

It's important to make sure that the action on the up-event only happens if the finger or pointer is released within the boundary of the control that was activated. If the user moves the finger or pointer away from the control before releasing, the action shouldd be cancelled.

This aims to reduce triggering the wrong control when the user clicks something by accident.

## Exceptions

1. When it’s essential that the action takes place on the down-event, like playing an on-screen piano keyboard or emulating a keyboard or numeric keypad.
2. When the up-event reverses the outcome of the down-event, like when a pop-up is shown on the down-event and disappears with the up-event.

## Additional information

For more complex interactions like drag-and-drop it’s extra important that you give the users a way to undo or abort the action. This could be done by either a confirmation dialog, undo button or possibility to cancel the action by releasing the item in the original location or releasing it an area that nullifies the action.
