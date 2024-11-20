// Countdown timer script
					const musicCountdownElement = document.getElementById('music-countdown');
					const musicReleaseDay = 5; // 5 = Friday
					function updateMusicCountdown() {
						const now = new Date();
						const nextRelease = new Date();
						nextRelease.setDate(now.getDate() + ((7 + musicReleaseDay - now.getDay()) % 7));
						nextRelease.setHours(0, 0, 0, 0);
						const timeDiff = nextRelease - now;
						const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
						const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
						const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
						musicCountdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
						if (timeDiff <= 0) {
							musicCountdownElement.textContent = 'Release Today!';
						} else {
							setTimeout(updateMusicCountdown, 1000);
						}
					}
					updateMusicCountdown();