export function slideInFromTop(delay: number, duration: number) {
	return {
		start: { y: -100, opacity: 0 },
		end: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}
export function slideInFromBottom(delay: number, duration: number) {
	return {
		start: { y: 200, opacity: 0 },
		end: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}
export function slideInFromLeft(delay: number, duration: number) {
	return {
		start: { x: -100, opacity: 0 },
		end: {
			x: 0,
			
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}
export function slideInFromRight(delay: number, duration: number) {
	return {
		start: { x: 100, opacity: 0 },
		end: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}

export function fadeIn(delay: number, duration: number) {
	return {
		start: {opacity: 0 },
		end: {
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}