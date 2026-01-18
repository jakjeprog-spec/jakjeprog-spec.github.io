function showTab(tabId, btn) {
	document.querySelectorAll(".tab-content").forEach(el => {
		el.classList.remove("active")
	})

	document.querySelectorAll(".tab").forEach(el => {
		el.classList.remove("active")
	})

	document.getElementById(tabId).classList.add("active")
	btn.classList.add("active")
}

function loadUnits() {
	const container = document.getElementById("units")
	container.innerHTML = ""

	if (!window.Units || Units.length === 0) {
		container.innerHTML = "<p>No units added yet.</p>"
		return
	}

	Units.forEach(unit => {
		const card = document.createElement("div")
		card.className = "card"

		card.innerHTML = `
			<img src="${unit.Image}">
			<h2>${unit.Name}</h2>
			<div class="rarity ${unit.Rarity.toLowerCase()}">${unit.Rarity}</div>

			<div class="stats">
				<div>💥 Damage: ${unit.Damage}</div>
				<div>⏱ Cooldown: ${unit.Cooldown}s</div>
				<div>📏 Range: ${unit.Range}</div>
				<div>💰 Cost: ${unit.PlacePrice}</div>
			</div>

			<div class="passive">
				<b>${unit.Passive}</b><br>
				${unit.PassiveDescription}
			</div>
		`

		container.appendChild(card)
	})
}

function loadItems() {
	const container = document.getElementById("items")
	container.innerHTML = "<p>Items coming soon.</p>"
}

loadUnits()
loadItems()
