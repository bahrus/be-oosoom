# be-oosoom 

<a href="https://nodei.co/npm/be-oosoom/"><img src="https://nodei.co/npm/be-oosoom.png"></a>

Size of package, including custom element behavior framework (be-decorated):

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-oosoom?style=for-the-badge)](https://bundlephobia.com/result?p=be-oosoom)

Size of new code in this package:

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-oosoom?compression=gzip">

*be-oosoom* is a [be-decorated-based](https://github.com/bahrus/be-decorated) decorator/behavior that monitors the visibility of the element it adorns.  When the visibility changes, it:

1.  Checks if the element it adorns has property "beOosoom"
2.  Checks if any other decorators/behaviors adorning the element have virtual property "beOosoom"

For both scenarios, be-oosoom expects the beOosoom property it finds to be a string-valued key to a boolean property that is used by the component or behavior to indicate whether to be "actively engaged" or not.  be-oosoom sets the property to true when the element is visible, false when it scrolls out of view (or gets hidden via a details section being closed, for example).   If the string starts with ! then the property name after the ! indicates "hibernating" mode, so be-oosoom does the opposite.


