# be-oosoom [TODO]

*be-oosoom* is a [be-decorated-based](https://github.com/bahrus/be-decorated) decorator/behavior that monitors the visibility of the element it adorns.  When the visibility changes, it:

1.  Checks if the element it adorns has property "beOosoom"
2.  Checks if any other decorators/behaviors adorning the element have virtual property "beOosoom"

For both scenarios, be-oosoom expects the beOosoom property it finds to be a string-valued key to a boolean property that is used by the component or behavior that indicates whether to be "active" or not.  be-oosoom sets the property to true when the element is visible, false when it scrolls out of view.   If the string starts with ! then the property name after the ! indicates "hibernating" mode, so be-oosoom does the opposite.


