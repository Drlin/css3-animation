(() => {
	function Animation() {
		this.init();
		this.page = 1;
		this.curPage = document.getElementById(`page${this.page}`);
	}
	Animation.prototype = {
		init() {
			this.bindEvent();
		},
		bindEvent() {
			this.domTransform();
		},
		domTransform() {
			let dom = document.querySelector('.btn-group');
			dom.addEventListener('click', (e) => {
				let targetId = e.target.id;
				console.log(targetId === "next");
				if (targetId === "next") {
					this.next();
				} else {
					this.pre();
				}
				
			})
		},
		next() {
			if (this.page >= 6) {
				return;
			}
			let curPage = document.getElementById(`page${this.page}`);
			curPage.style.transform = 'rotateX(-90deg)';
			this.page++;
			let nextPage = document.getElementById(`page${this.page}`);
			nextPage.style.transform = 'rotateX(0deg)';
		},
		pre() {
			if (this.page <= 1) {
				return;
			}
			let curPage = document.getElementById(`page${this.page}`);
			curPage.style.transform = 'rotateX(90deg)';
			this.page--;
			let nextPage = document.getElementById(`page${this.page}`);
			nextPage.style.transform = 'rotateX(0deg)';
		}
	}
	new Animation();
})();