class Nav {
    static init() {
        this.navBtn  = document.querySelector('.hamburger');
        this._addEventListeners();
    }

    static _addEventListeners() {
    	this.navBtn.addEventListener('click', e => {
      		document.body.classList.toggle('nav-in');
    	});
    }
}

Nav.init();