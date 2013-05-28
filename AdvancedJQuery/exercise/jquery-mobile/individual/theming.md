<!--
{
	"title": "Lab",
	"sidebar": false,
	"theme": "jquery-mobile",
	"plugins": [ "jquerymobiledefaulttheme" ]
}
-->
---

<!-- { "section": "Lab" } -->

# Lab

* Use jQuery Mobile's ThemeRoller and create a custom theme with 3 different color swatches
* Download and install your theme into the app you've been building
* Use all three swatches somewhere in your application
* Using custom CSS, override the default theme style on one page
  * Increase the font size of all text in the body
	* Change the background color of the header

---

<!-- { "layout": "phone" } -->

# Bug Example

```html
<!-- #hidden -->
<!-- #treatment phone -->
<body>
<div data-role="page" id="a" data-theme="a">

  <div data-role="header" data-theme="a">
    <h1>Header</h1>
  </div><!-- /header -->

  <div data-role="content">

    <ul data-role="listview">
	    <li><a href="http://jquery.com">jQuery</a></li>
	    <li><a href="http://html5rocks.com">HTML5</a></li>
			<li><a href="http://jquerymobile.com">jQuery Mobile</a></li>
		</ul>

    <fieldset data-role="fieldcontain">
      <label for="txtInput">Text input:</label>
      <input type="text" id="txtInput" name="txtInput" value="">
    </fieldset>
    <div data-role="fieldcontain">
      <label for="selectToggle">Select toggle:</label>
      <select name="selecttoggle" id="selectToggle" data-role="slider">
        <option value="off">Off</option>
        <option value="on">On</option>
      </select>
    </div>
  </div><!-- /content -->
</div><!-- /page -->
</body>
<!-- /hidden -->
```

---
