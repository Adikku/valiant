#Valiant
####A simple and discreet push navigation.

Valiant is built on top of [Bootstrap v3.x](http://getbootstrap.com/) so this great framework is required to enable Valiant push navigation. However, it shouldn't take much tweaking to get it to look just as great without Bootstrap.

Valiant comes with a few icons from [Fontello](http://fontello.com/) so it's easy to add more of them. If you use the LESS files instead of the compiled css files, there are `@varialbes` for all colors used in the navigation, enabaling you to customize the color profile in one place and file.

[Demo](http://adrian.sofinet.se/demos/valiant/)


__Install__  
Clone this repo
<pre>git clone [https://github.com/Adikku/valiant.git]</pre>
Install all the dependencies.
<pre>npm install</pre>



__Usage__  
Place a link to the css inside the `<head>` tag in your index file (make sure you remember Bootstrap).

```
<head>
   <link rel="stylesheet" href="css/valiant-left.css">
</head>
```
Valiant push navigation needs some predifined classes to work. Check out the source code or git to get the markup structure and jQuery class-toggle snippet.