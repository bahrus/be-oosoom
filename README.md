# be-oosoom

xtal-vlist started out using be-intersectional to help materialize / dematerialize content, but that proved beyond the pay grade of yours truly to get right.  I might go back to it.

The virtual list actually performs quite well now with lazy loading (using be-lazy), where no content is removed from the DOM tree even as one scrolls far away.  Still, it seems dumping content might help on a resource strapped device.

So this is another attempt to get it right, but in a different way.

be-oosoom adorns DOM on the live DOM tree, and when it scrolls out of view, 

1.  gets the dimensions of the content, 
2.  clones the content into a template, 
3.  sets the template to the same size, adorns the template with be-lazy.
4.  replaces the content with the template.


