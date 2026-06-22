# Etch-a-Sketch

Digital Etch-a-Sketch "game" powered by pure HTML, CSS, and JavaScript; from The Odin
Project's Foundations course.

Like the previous project, this project's primary focus was JavaScript: specifically DOM
manipulation, events (bubbling, and delegation, as well). At the same time, it also relies on
CSS to work hand-in-hand with JavaScript. I chose a very simple UI design just to bring the
project to life a little; very much inspired by retro Apple-inspired web design technqiues:
clean, elegant, and minimalist.

Generating the grid dynamically with JavaScript brought me an "aha!" moment; that is, the moment
that event delegation clicked for me. I realized attaching an event listener to every single grid
cell created could get expensive. Consider 100 x 100. That would be not just thousands of listeners,
but 10,000, in fact. Utilizing event.target outside of the for loop in the `generateSketchGrid()`
function solved this potential issue by attaching only a single listener on the grid container itself.

I won't lie, this project was kind of intimidating to me at first, given the fact that I've not coded
anything cool or productive in a very long time. I still "get" JavaScript, but right now, it's more
about adapting to new syntax and practices. I'm surely making progress, and my level of confidence in
this project compared to the previous Rock, Paper, Scissors! project has boosted. 😎

I think I'm ready to move on to the new lesson.
