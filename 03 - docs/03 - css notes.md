\# styles.css – Full Layout System \& Lessons

\# Core Layout Knowledge

display determines element behavior:

block → full widthinline → flows in textflex → one-dimensional layoutgrid → two-dimensional layoutnone → remove from layout

Lesson:display is personality.



---

\# Flexbox (Used for Card Layout)

Used in:.card-content

Purpose:Align description next to gallery.

Common properties used:justify-contentalign-itemsflex-direction

Lesson:Flex handles rows OR columns.Not both.



---

\# Grid (Used for Image Galleries)

Used in:.friend-gallery

Example:

display: grid;grid-template-columns: repeat(3, 1fr);

Rectangle image:

.double {  grid-column: span 2;}

Lesson:Grid controls exact placement.Flex does not.



---

\# Visibility Logic

.friend-section {  display: none;}

.friend-section.active {  display: flex;}

Lesson: Do not mix opacity: 0 and display: none Do not animate hidden elements Toggle classes instead of inline styles

This previously caused full site invisibility.



---

\# Font Loading

Fonts live in:

../fonts/

Correct:

src: url('../fonts/FontName.ttf');

If fonts revert to Times New Roman:- Path is wrong- Font file name mismatch- Browser fallback triggered

Lesson:If fonts disappear, check path first.



---

\# Per-Friend Overrides

Example:

\#nomore-card .friend-card { ... }#adan-card .friend-card { ... }

Lesson:Specificity matters.ID-based overrides must come after global styles.



---

\# Organization Lessons

Use section headers:

/\* ===== NO'MORE ===== \*/

Avoid over-commenting tiny lines.Comment structure, not every property.

Lesson:Comments are for orientation, not narration.



