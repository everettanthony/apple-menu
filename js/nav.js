class Nav {
    static init() {
        this.navBtn  = document.querySelector('.nav-btn-icon');
        this._addEventListeners();
    }

    static _addEventListeners() {
    	this.navBtn.addEventListener('click', e => {
      		document.body.classList.toggle('nav-in');

     		if ( e.target.textContent === 'Open' ) {
    			e.target.textContent = 'Close';
    		}
    		else {
    			e.target.textContent = 'Open';
    		}
    	});
    }
}

Nav.init();