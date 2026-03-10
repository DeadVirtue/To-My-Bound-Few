\# scripts.js – Logic \& Behavior Lessons

\# Core Purpose

\- Show one card at a time- Hide others- Remember last viewed card- Restore on reload



---

\# showCard(name)

Logic:1. Select all .friend-section2. Hide all3. Show matching id `${name}-card`4. Save name in localStorage

Lesson:Behavior is separate from style.JS controls state, not design.



---

\# localStorage

Stores:lastViewedCard

On page load:- If value exists → show saved- If not → default to "nomore"

Lesson:localStorage persists across refresh.No backend needed.



---

\# Why Not Inline Styles?

Instead of:

card.style.display = 'flex';

Better approach:Toggle .active class.

Lesson:Separation of concerns:HTML = structureCSS = designJS = behavior



---

\# Debugging Lessons Learned

If page is blank:- Check display: none- Check opacity- Check missing paths- Check console errors

If buttons work but nothing shows:- ID naming mismatch- Missing '-card' suffix

Lesson:Most bugs are small mismatches, not big failures.



