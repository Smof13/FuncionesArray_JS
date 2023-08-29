function comer(plantas){
    let plants = plantas.split(" ");
    let conejo = plants.indexOf("🐇")
    let prohibido = plants.indexOf("⛔")
    let sobreviviente = plants.slice(0,conejo) + plants.slice(prohibido+1,plantas.length - 1)
    console.log(plants)
    console.log(sobreviviente)
}

comer("🌱 🥕 🌱 🐇 🌱 🌱 🌱 🥕 🥕 ⛔ 🥕 ❤️ 🥕 🌱 🥕 🦖")
