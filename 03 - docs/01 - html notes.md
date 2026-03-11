\# homies.html – Full Structure \& Lessons Learned

\## Project Structure

my homies site/├── 01-live/├── 02-reference/├── 03-docs/├── fonts/└── images/

Because homies.html is inside 01-live/,images and fonts must use:

../images/../fonts/

---

\# Page Architecture

The page is wrapped in:

div class="page"

This is important because: Fade animation must NOT be applied to body. Animating body caused the entire site to become invisible before.

Lesson: Never animate body. Animate a wrapper like .page.

---

\# Navigation System

Each button:

button data-friend="nomore"

Each card:

section class="friend-section" id="nomore-card"

JS relies on this naming pattern:data-friend="name"id="name-card"

If this pattern breaks → cards won’t show.

Lesson:Naming consistency matters more than clever naming.

---

\# Friend Card Structure

Each friend card contains:
.friend-card
.card-content (flex container)
.card-info (description)
.friend-gallery (grid layout)

This layout uses: Flex for layout structure.Grid for image galleries.

Lesson: Flex = structure.Grid = gallery.
---

\# Image Paths

Correct format from 01-live:

img src="../images/example.jpg"

If images don’t load: Check for missing ../- 
Check folder spelling
Check case sensitivity

Lesson: Relative paths are based on file location, not project root.

---

\# External Links

Use:

a href="..." target="\_blank" title="..."

\- target="\_blank" opens new tab- title gives tooltip- alt is NOT valid for a tag, only for img tag

Lesson: Attributes matter. Use the right attribute for the right element.
