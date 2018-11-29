Atypon Front End Engineer assignment
=================

Nunjucks decision
----------------

I used nunjucks to break down the test into partials instead of php, because as a quick to setup test i was aiming to use as few tools as possible.

Fonts:
I have opted for not using any fonts as there were none specified, but using the svgs from  figma. Fonts can be very specific for each project and so didnt want to use just ones that 'looked' similar.

Setup steps
--------------
1) unzip.
2) npm install
3) run gulp
4) navigate to localhost:8080

Future steps
--------------
a) Better tree: example, separate node_modules and package-lock.json from the rest of folders and files. (done)

b) breakpoint at 780px

c) Complete mobile responsive

d) find a way to make the sidebar opener stop at footer top, and continue when scrolling up. (I know a way with jquery, need to research with vanila js).

e) minor:
    a) Add pseudo for sidebar opener (like one left sidebar, comments)
    b) Right sidebar height to reach to the bottom (might need complete layout restructure...)

Workday:
--------
Day 1: Setup automation (npm/gulp) of created files and structure of folder/file tree (nunjucks).

Day 2:
1) Create and style header
2) Footer creation
3) Restructure files to source files
4) distribution files and have files like node modules outside of Dist.
5) Break down css into modular structure, refactor to BEM.

Day 3: Fell ill in bed

Day 4: Fell ill in bed

Day 5:
1) Page breadcrumbs creation (reading indicator)
2) Left Sidebar creation
3) Filler for content created
4) Right sidebar icons creation

Day 6:
1) fixed header (black only)
Note 1:
I spend much time trying to figure out a pure css cross browser solution. I would have liked to use a pure css solution with the 'fixed' value for the 'position' property. However it is not supported for IE and some versions of other browsers such as Edge and Chrome support it only partially. see https://caniuse.com/#search=fixed
Further, i spend much time trying to find an esc6 solution for handling the window object (the use of 'let') but let can not be defined in the window object (as i understood it).
Note 2: A known bug is that the added div 'faux-header' stays in place when the window refreshes whilst the page is not scrolled to the top. It can be (probably) fixed with a rule that would delete said div, on page refresh.

Day 7:
1) Actual right sidebar structure
2) Right sidebar with icons animation from right to Left
Note: Much time again was spend on deciding whether to use pure css solution or js (and applying a technique for each version). I opted for js because it meant that both the opener and the sidebar could be animated with one function (essentially, one handler for the same action rather than two complex css blocks).
3) Started mobile version (only structure and styled the header)
