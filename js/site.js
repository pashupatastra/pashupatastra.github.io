// NAV SCROLL

let prevScrollPos = window.pageYOffset;
				
				window.onscroll = function() {
						let currentScrollPos = window.pageYOffset;
						
						if (prevScrollPos > currentScrollPos) {
								document.getElementById("nav").style.top = "0";
						} else {
								document.getElementById("nav").style.top = "-64px";
						}
						
						prevScrollPos = currentScrollPos;
				}

