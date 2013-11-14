Bug description
=====================

	Above I'm looping over an ordinary js-array twice. The first time I'm just looping through it and outputting <code>&#123;&#123; this &#125;&#125;</code>. The array looks like this: <code>['this', 'is', 'an', 'array', 'that', 'we\'re', 'looping', 'through']</code>. I also use a handelbars helper to log <code>&#123;&#123; this &#125;&#125;</code> and typeof <code>&#123;&#123; this &#125;&#125;</code>. typeof <code>&#123;&#123; this &#125;&#125;</code> should return string cause that's what it is. Check your console to see the output.
	<br /><br />
	The second time I'm looping over the (same) array I've put an <code>&#123;&#123;#if&#125;&#125;</code> handlebars helper around each step. The helper just returns true, and thus displaying <code>&#123;&#123; this &#125;&#125;</code>. It looks good in the HTML, but if I use this in a handlebars-helper it's no longer a string, but an Object made up of the strings letters. The string 'somestring' turns into an Object like this: <code>{0: 's', 1: 'o', 2: 'm', 3: 'e', 4: 's', 5: 't', 6: 'r', 7: 'i', 8: 'n', 9: 'g' }</code>.
	<br /><br />
	This is really annoying, as it's really difficult to test the type of the variable. If I want to check if <code>&#123;&#123;#if&#125;&#125;</code> is a string in a Handlebars helper I will be out of luck. :( Please help!
