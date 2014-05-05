# Ludus for Amber

Ludus is an HTML5 canvas game framework for Amber Smalltalk.

You can find documentation for all methods and a couple of example games at [the project page](http://bromagosa.github.io/Ludus/).

This repository is a move to Amber Smalltalk version 0.12.4 from the [original Ludus as an Amber branch](https://github.com/bromagosa/amber/tree/ludus) (version 0.9.1). The name stands for *game* or *leisure* in Latin.

Ludus has been ported from Amber 0.9.1 to Amber 0.12.4 by [Philippe Back](https://github.com/philippeback) and [Hannes Hirzel](https://github.com/hhzl).


## Prerequisites

1. You need a web browser with a reasonably good support for HTML5 canvas.
2. You need to have [nodejs](http://www.nodejs.org/) installed. This will give you the node package manager `npm` as well.

## Getting Started

Install [`amber`](http://amber-lang.net/) from the [npm](http://npmjs.org/) (node package manager) repository 
```
npm -g install amber-cli
```

In order to install the dependencies, you need the [`bower`](http://bower.io/) client side package manager.

```
npm -g install bower
```

In some cases you have to call `npm` with `sudo npm`.

You now can clone this repo. Finally, install the dependencies by just running:

```
cd Ludus
bower install
```

And launch the amber server.

```
amber serve 
```

for default port 4000 or with a specific port number 

```
amber serve --port 9000
```

Point your browser to:

    http://localhost:4000/games.html

Enjoy!

## See also
Another Amber Smalltalk game framework by Masashi Umezawa
https://github.com/mumez/enchant-from-amber . It wraps the [enchantjs](http://enchantjs.com/) library with Amber Smalltalk code.


Submarine game in Amber  https://github.com/johnnyt/subwars
