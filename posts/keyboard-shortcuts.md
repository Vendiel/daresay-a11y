---
id: keyboard-shortcuts
title: If you implement custom keyboard shortcuts for your content make sure they can either be turned off, remapped or are only active when a specific control has focus
tags:
  - Navigation
reqs:
  - 2.4.1 A
roles:
  - Tech
  - Design
sidebar_label:
---

### Description

This applies to keyboard shortcuts consisting of printable character keys:

- Letters (including upper- and lower-case)
- Punctuations
- Numbers (digits)
- Symbol characters

These types of keyboard shortcuts can make it faster to navigate your content, but should be used with care. Certain users can due to motor difficulties accidentally tap the wrong key, people who uses speech input can accidentally trigger a shortcut and some users might have set their own shortcuts to make navigation easier for them which then gets mixed up.

It’s therefore important that if custom keyboard shortcuts are used, then users must be able to either turn them off or reconfigure them to include one or more non-printable keys.

Not applied:

- When shortcuts consisting of printable characters only works when a component has focus, like listboxes and dropdown menus.
- Two-step shortcut that includes a non-printable key, for example first accessing an element with a single non-character shortcut (e.g. Alt or Alt+F) and then pressing a single character key to select an item.
- When a modifier key is reqsuired, like with accesskeys.

### Exceptions

It’s unclear if this reqsuirement only applies when the keyboard shortcuts consist of a single character shortcut. Single character shortcuts seem to yield more problems.

### Additional information

Different definitions of characters and keys:

- https://en.wikipedia.org/wiki/ASCII#Printable_characters
- https://en.wikipedia.org/wiki/Control_character (non-printing character)
- https://en.wikipedia.org/wiki/Keyboard_layout
