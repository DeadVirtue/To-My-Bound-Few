File Structure -
my homies site
├── live/
│   ├── css/
│   │   ├── base.css
│   │   ├── card.css
│   │   ├── nav.css
│   │   └── themes.css
│   ├── friends/
│   │   ├── adan.html
│   │   ├── latravion.html
│   │   └── nomore.html
│   └── index.html
├── backup/
│   └── index.html
├── └── styles.css
├── └── scripts.js
├── docs/
│   ├── html notes.md
│   ├── js notes.md
│   └── css notes.md
├── fonts/
│   ├── Ascender.ttf
│   ├── Happy New Year.ttf
│   ├── manga_speak_bold.ttf
│   ├── manga_speak.ttf
│   ├── MaturaMTSC.TTF
│   ├── ringbearer.TTF
│   ├── Saiyan-Sans.ttf
│   └── Sigil Sans.otf
└── images/
    ├── aslpfp1.jpg
    ├── aslpfp2.jpg
    ├── aslwp.jpg
    ├── catselfie.jpg
    ├── favicon-32x32.png
    ├── lds.jpg
    ├── lods.jpg
    ├── lps.jpg
    ├── lrengoku.jpg
    ├── lselfie.jpg
    ├── lwd.jpg
    ├── nkatana.jpg
    ├── nminecraft.jpg
    ├── no'moreselfie.jpg
    ├── npfp.jpg
    ├── nselfie.jpg
    └── vergil.gif

Step up one level using ../ because homies.html is inside 01-live/
Check for missing ../, typos, and case sensitivity
You can go multiple levels up just keep adding ../

Page Wrapper & AnimationStructure: 
Wrap all content in <div class="page">.
Never animate the body. It breaks site visibility. Animate .page instead

Navigation BindingButton: 
<button data-friend="nomore"> Section: <section class="friend-section" id="nomore"> 
data-friend value must perfectly match the section id

Layout RulesStructure: 
.friend ➔ .card-content ➔ .card-info & .friend-gallery
Flexbox: Used for structure alignment in .card-content
CSS Grid: Used for the image layout in .friend-gallery

HTML AttributesLinks <a>: Use target="_blank (new tab) and title="..." (tooltip)
Images <img>: Use alt="..." (description)
alt is invalid on <a> tags
margin: [top] [right] [bottom] [left];