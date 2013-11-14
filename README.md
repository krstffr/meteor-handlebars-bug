# Bug description

In this example I'm looping over an ordinary js-array twice. The first time I'm just looping through it and outputting {{ this }}. The array looks like this: ['this', 'is', 'an', 'array', 'that', 'we\'re', 'looping', 'through']. I also use a handelbars helper to log {{ this }} and typeof {{ this }}. typeof {{ this }} should return string cause that's what it is. Check your console to see the output. 

The second time I'm looping over the (same) array I've put an {{#if}} handlebars helper around each step. The helper just returns true, and thus displaying {{ this }}. It looks good in the HTML, but if I use this in a handlebars-helper it's no longer a string, but an Object made up of the strings letters. The string 'somestring' turns into an Object like this: {0: 's', 1: 'o', 2: 'm', 3: 'e', 4: 's', 5: 't', 6: 'r', 7: 'i', 8: 'n', 9: 'g' }. 

This is really annoying, as it's really difficult to test the type of the variable. If I want to check if {{#if}} is a string in a Handlebars helper I will be out of luck. :( Please help!