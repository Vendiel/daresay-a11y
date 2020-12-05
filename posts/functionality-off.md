---
id: functionality-off
title: Functionality offered through motion like tilting and shaking must be possible to turn off
tags:
  - Interaction
reqs:
  - 2.5.4 A
roles:
  - Design
---

## Description

Some users might accidentally trigger the function connected to the motion due to tremors or other motor impairments.

## Additional information

Applications may be able to meet this reqsuirement by supporting operating system settings which allow the user to disable motion detection at system level (prefers-reduced-motion).

## Exceptions

1. When the motion is essential for the function or not using motions or gestures would invalidate the activity. Like pedometer that relies on device motion to count steps.
