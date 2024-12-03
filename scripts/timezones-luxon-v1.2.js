const locations = document.querySelectorAll(".footer--hour")



const updateTimes = () => {
	locations.forEach(location => {
		const zone = location.querySelector("span")
		const timezone = location.getAttribute("data-timezone")
		
		const now = luxon.DateTime.now().setZone(timezone)
		zone.innerHTML = now.toFormat("tt")
	})
}

updateTimes()

setInterval( function () { 
	updateTimes() 
}, 1000)
