class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		// proverqvame za podadeni callbacks
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.OnTik = callbacks.OnTik;
			this.onComplete = callbacks.onComplete;
		}

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRamaining);
		}
		// za da nqma zabavqne,
		this.tickTock();
		// s this.timer moje da se nasochi kym druga funkciq
		this.interval = setInterval(this.tickTock, 20);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tickTock = () => {
		if (this.timeRamaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRamaining = this.timeRamaining - 0.02;
			if (this.OnTik) {
				this.OnTik(this.timeRamaining);
			}
		}
	};

	get timeRamaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRamaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
}
