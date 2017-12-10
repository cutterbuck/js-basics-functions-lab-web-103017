// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
	return dist > 42 ? dist - 42 : 42 - dist
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264
}

function distanceTravelledInFeet(start, end) {
	let feet = (end - start) * 264;
	return feet < 0 ? (feet * -1) : feet
}

function calculatesFarePrice(start, end) {
	let dist = distanceTravelledInFeet(start, end)
	if (dist > 2500) {
		return "cannot travel that far"
	} else if (dist < 400) {
		return 0;
	}else if (dist >= 400 && dist <= 2000) {
		return dist * 0.02;
	} else if (dist > 2000 && dist < 2500) {
		return 25;
	}
}
