const locations = document.querySelectorAll(".footer--hour")



const updateTimes = function() {
	locations.forEach(location => {
		const zone = location.querySelector(".time--footer")
		const timezone = location.getAttribute("data-timezone")
		
		const now = luxon.DateTime.now().setZone(timezone)
		zone.innerHTML = now.toFormat("HH:mm:ss")
	})
}

updateTimes()

setInterval(function () {
	updateTimes()
}, 1000)
