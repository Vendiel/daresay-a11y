---
id: stop-action
title: Make sure that it's possible to stop or undo the action when the action is triggered on the up-event
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
sidebar_label: Stopping or undoing action
---

### Description

The action on the up-event shall only happen if the finger or pointer is released within the boundary of the control that was activated. If the user moves the finger or pointer away from the control before releasing, the action shall be cancelled.

For more complex interactions like drag-and-drop it’s extra important that you can undo or abort the action. This could be done by either a confirmation dialog, undo button or possibility to cancel the action by releasing the item in the original location or releasing it an area that nullifies the action.
