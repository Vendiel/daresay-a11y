---
id: semantic-markup
title: Use correct semantic markup for the elements that are used
tags:
  - Markup
reqs:
  - 1.3.1 A
  - 4.1.1 A
roles:
  - Tech
prio: 301
---

## Description

Use elements according to their meaning, not because of the way they appear visually. By using the semantic appropriate elements blind/low-vision people using screen readers will have an easier time understanding how to navigate and use the UI.

## Examples

- Use h1, h2, h3, etc for headings (if it's not possible to use native heading mark-up due to legacy code, use role="heading").
- Use a element for links.
- Group navigation links with nav.
- Use button element for buttons.
- Use labels for input fields.
- Group related controls in forms.
- Use tables for tabular data, never for layout purposes.
- Use the appropriate list type for lists (ordered, unorder, definition).
- Avoid emulating links and buttons by using div, span etc.
- Emphasize text correctly.

## Additional information

Complement with ARIA when standard markup isn't insufficent. Like for instance if it's not possible to use native heading mark-up due to legacy, then use role="heading".
