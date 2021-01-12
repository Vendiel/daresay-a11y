---
id: controls-accessible-name
title: Controls with a visible label (as text or image) must have a matching accessible name
tags:
  - Controls
  - Buttons
  - Text fields
  - Radio buttons
  - Checkboxes
  - Drop downs
  - File select fields
  - Date pickers
  - Tabs
  - Slider
reqs:
  - 2.5.3 A
roles:
  - Tech
prio: 203
---

## Description

The accessible name is the programmatic name for a control and is derived from a visible or invisible property of the element, like a visible text on a button or the text alternative that describes an icon.

The accessible name is important when user uses speech as input. When speech recognition software processes speech input and looks for matches, it matches against the accessible name of the control. If there is a mismatch between the text in the visible label and the text in the accessible name, it can cause issues for the user when trying to navigate to it or selecting it.

Preferably the visible label and accessible name should match 1:1. In those situations where additional context is needed its important that the visual label occur in its entirely in the accessible name, preferably in the beginning.

## Examples

- Visual text: "Search". Accessible name: "Search for a value".

## Additional Information

<!---->

- Additional context may be more appropriately included through use of aria-describedby. This has the significant benefit of improving context for some users of assistive technology without altering the accessible name.

- Both aria-label and aria-labelledby take precedence in the name calculation, overriding the visible text as the accessible name even when the visible text label is programmatically associated with the control. Avoid or use with care.

- You can check out each controls accessible name in the browser. In Chrome: Inspect element, then under “Accessibility” the name is shown under “Computed properties”.
