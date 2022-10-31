let isIgnite = true

function changeCard(event) {
     const card = event.currentTarget
    const backgroundImage = isIgnite 
    ? "url(./assets/bg-explore.svg)"
    : "url(./assets/bg-ignite.svg)"
    isIgnite =!isIgnite
    card.style.backgroundImage = backgroundImage

}