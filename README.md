# Ludus for Amber

Ludus is an HTML5 canvas game framework for Amber Smalltalk.

You can find documentation for all methods and a couple of example games at [the project page](http://bromagosa.github.io/Ludus/).

This repository is a move to Amber Smalltalk version 0.12.4 from the [original Ludus as an Amber branch](https://github.com/bromagosa/amber/tree/ludus) (version 0.9.1). The name stands for *game* or *leisure* in Latin.

Ludus has been ported from Amber 0.9.1 to Amber 0.12.4 by [Philippe Back](https://github.com/philippeback) and [Hannes Hirzel](https://github.com/hhzl).


## Prerequisites

1. A web browser with reasonably good support for HTML5 canvas.
2. [nodejs](http://www.nodejs.org/). This will give you the node package manager `npm` as well.
3. A global install of the [`amber`](http://amber-lang.net/) [npm](http://npmjs.org/) package
4. A global install of the [`bower`](http://bower.io/) client side package manager in order to install the dependencies

The `amber` and `bower` packages can be installed with the following command (In some cases you have to call `npm` with `sudo npm`):

    npm install --global amber-cli bower

or the same thing, but less typing:

    npm i -g amber-cli bower

## Getting Started

Clone the repo, and start the amber server:

    git clone https://github.com/bromagosa/Ludus.git
    cd Ludus
    amber serve

Point your browser to:

    http://localhost:4000/dev.html

Enjoy!

The default port is 4000. Use --port to specify a custom port:

    amber serve --port 9000


## See also
Another Amber Smalltalk game framework by Masashi Umezawa
https://github.com/mumez/enchant-from-amber . It wraps the [enchantjs](http://enchantjs.com/) library with Amber Smalltalk code.


Submarine game in Amber  https://github.com/johnnyt/subwars
