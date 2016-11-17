'use strict';

import $ from 'jquery';

export default class BasisMenu {
  constructor() {
    this.container = $('[data-c="menu"]');
    this.setListener();
  }

  setListener() {
    this.container.find('[aria-haspopup="true"]').each((i, e) => {
      const item = $(e);

      item.on('mouseover focus', (event) => {
        const submenu = item.children('[data-c="menu__submenu"]');
        this.show(submenu);
      });

      item.on('mouseleave', (event) => {
        const submenu = item.children('[data-c="menu__submenu"]');
        this.hidden(submenu);
      });
    });
  }

  show(submenu) {
    submenu.attr('aria-hidden', 'false');
  }

  hidden(submenu) {
    submenu.attr('aria-hidden', 'true');
  }
}
