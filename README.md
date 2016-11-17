# getbasis-menu
This is a css module for The Basis.

## Basis
* Repository: https://github.com/getbasis/basis/
* Documents : http://getbasis.github.io/

## Get Started

### Install
```
$ npm install getbasis
$ npm install getbasis-menu
```

### Stylus
```
@import 'node_modules/getbasis/src/stylus/basis';
@import 'node_modules/getbasis-menu/src/stylus/object/component/menu';
```

### JavaScript
```
import $ from 'jquery';
import BasisMenu from 'node_modules/getbasis-menu/src/js/menu.js';
new BasisMenu();
```

### HTML
```
<ul class="_c-menu _c-menu--bar _c-menu--auto" data-c="menu">
  <li class="_c-menu__item"><a href="#">menu 1</a></li>
  <li class="_c-menu__item"><a href="#">menu 2</a></li>
  <li class="_c-menu__item" aria-haspopup="true">
    <a href="#">menu 3</a>
    <ul class="_c-menu__submenu" data-c="menu__submenu" aria-hidden="true">
      <li class="_c-menu__subitem"><a href="#">menu 3</a></li>
      <li class="_c-menu__subitem" aria-haspopup="true">
        <a href="#">menu 4</a>
        <ul class="_c-menu__submenu" data-c="menu__submenu" aria-hidden="true">
          <li class="_c-menu__subitem"><a href="#">menu 5</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

## Browser support
Modern Browser and IE10+

## License
MIT License
