# Built-in Style

### Intro

Vant contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="bvan-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.
</div>

<div class="bvan-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted.
</div>

<div class="bvan-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="bvan-hairline--top"></div>

<!-- border bottom -->
<div class="bvan-hairline--bottom"></div>

<!-- border left -->
<div class="bvan-hairline--left"></div>

<!-- border right -->
<div class="bvan-hairline--right"></div>

<!-- border top & bottom -->
<div class="bvan-hairline--top-bottom"></div>

<!-- full border -->
<div class="bvan-hairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="bvan-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="bvan-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="bvan-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="bvan-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="bvan-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
