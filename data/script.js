function showTab(tab) {
	document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'))
	document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'))

	document.getElementById(tab).classList.add('active')
	event.target.classList.add('active')
}

function loadUnits() {
	const container = document.getElementById("units")
	container.innerHTML = ""

	Units.forEach(unit => {
		const card = document.createElement("div")
		card.className = "card"

		card.innerHTML = `
			<img src="${unit.Image}">
			<h2>${unit.Name}</h2>
			<div class="rarity">${unit.Rarity}</div>
			<div class="stat">Type: ${unit.Type}</div>
			<div class="stat">Damage: ${unit.Damage}</div>
			<div class="stat">Cooldown: ${unit.Cooldown}s</div>
			<div class="stat">Range: ${unit.Range}</div>
			<div class="stat"><b>Passive:</b> ${unit.Passive}</div>
			<div class="stat">${unit.PassiveDescription}</div>
		`

		container.appendChild(card)
	})
}

function loadItems() {
	const container = document.getElementById("items")
	container.innerHTML = ""

	Items.forEach(item => {
		const card = document.createElement("div")
		card.className = "card"
		card.innerHTML = `
			<h2>${item.Name}</h2>
			<div class="rarity">${item.Rarity}</div>
			<div class="stat">${item.Description}</div>
		`
		container.appendChild(card)
	})
}

loadUnits()
loadItems()
