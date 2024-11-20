// Countdown timer script
					const countdownElement = document.getElementById('countdown');
					const releaseDay = 5; // 5 = Friday
					function updateCountdown() {
						const now = new Date();
						const nextRelease = new Date();
						nextRelease.setDate(now.getDate() + ((7 + releaseDay - now.getDay()) % 7));
						nextRelease.setHours(0, 0, 0, 0);
						const timeDiff = nextRelease - now;
						const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
						const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
						const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
						countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
						if (timeDiff <= 0) {
							countdownElement.textContent = 'Release Today!';
						} else {
							setTimeout(updateCountdown, 1000);
						}
					}
					updateCountdown();