var data = []

data['screen'] = []
data['screen']['value'] = []
data['screen']['function'] = function () {
	
}
data['screen']['canvas'] = []
data['screen']['canvas']['value'] = []
data['screen']['canvas']['function'] = function () {
	document.getElementById('canvas').fillStyle = "#E5CCCC"
	document.getElementById('canvas').getContext('2d').fillRect(0, 0, document.body.clientWidth, document.body.clientHeight)
	
	document.getElementById('canvas').width = document.body.clientWidth
	document.getElementById('canvas').height = document.body.clientHeight
}
data['screen']['width'] = []
data['screen']['width']['value'] = []
data['screen']['width']['function'] = function () {
	data['screen']['width']['value'] = document.body.clientWidth
}
data['screen']['height'] = []
data['screen']['height']['value'] = []
data['screen']['height']['function'] = function () {
	data['screen']['height']['value'] = document.body.clientHeight
}
data['screen']['paint'] = []
data['screen']['paint']['value'] = []
data['screen']['paint']['function'] = function (picture, x, y) {
	document.getElementById('canvas').getContext('2d').drawImage(picture, x, y);
}
data['screen']['pixel'] = []
data['screen']['pixel']['value'] = []
data['screen']['pixel']['function'] = function (x, y) {
	document.getElementById('canvas').getContext('2d').fillRect(x, y, 1, 1)
}

data['mouse'] = []
data['mouse']['value'] = []
data['mouse']['function'] = function () {
	
}
data['mouse']['x'] = []
data['mouse']['x']['value'] = []
data['mouse']['x']['function'] = document.addEventListener('mousemove', function(event) {
	data['mouse']['x']['value'] = event.x
})
data['mouse']['y'] = []
data['mouse']['y']['value'] = []
data['mouse']['y']['function'] = document.addEventListener('mousemove', function(event) {
	data['mouse']['y']['value'] = event.y
})
data['mouse']['z'] = []
data['mouse']['z']['value'] = []
data['mouse']['z']['function'] = function () {
	data['mouse']['z']['value'] = (data['mouse']['y']['value'] - data['screen']['height']['value'] / 2) * Math.sin(data['mouse']['angel']['x']['value'] * Math.PI / 180) / Math.cos(data['mouse']['angel']['x']['value'] * Math.PI / 180)
}
data['mouse']['left'] = []
data['mouse']['left']['click'] = []
data['mouse']['left']['click']['value'] = []
data['mouse']['left']['click']['function'] = []
data['mouse']['left']['down'] = []
data['mouse']['left']['down']['value'] = []
data['mouse']['left']['down']['function'] = document.addEventListener('mousedown', function(event) {if (event.which == 1) {
	data['mouse']['left']['click']['value'] = true
}})
data['mouse']['left']['up'] = []
data['mouse']['left']['up']['value'] = []
data['mouse']['left']['up']['function'] = document.addEventListener('mouseup', function(event) {if (event.which == 1) {
	data['mouse']['left']['click']['value'] = false
}})
data['mouse']['right'] = []
data['mouse']['right']['click'] = []
data['mouse']['right']['click']['value'] = []
data['mouse']['right']['click']['function'] = []
data['mouse']['right']['down'] = []
data['mouse']['right']['down']['value'] = []
data['mouse']['right']['down']['function'] = document.addEventListener('mousedown', function(event) {if (event.which == 3) {
	
}})
data['mouse']['right']['up'] = []
data['mouse']['right']['up']['value'] = []
data['mouse']['right']['up']['function'] = document.addEventListener('mouseup', function(event) {if (event.which == 3) {
	
}})
/*
data['mouse']['right']['contextmenu'] = []
data['mouse']['right']['contextmenu']['value'] = []
data['mouse']['right']['contextmenu']['function'] = document.addEventListener('contextmenu', function(event) {if (event.which == 3) {
	event.preventDefault()
}})
*/
data['mouse']['middle'] = []
data['mouse']['middle']['click'] = []
data['mouse']['middle']['click']['value'] = []
data['mouse']['middle']['click']['function'] = []
data['mouse']['middle']['down'] = []
data['mouse']['middle']['down']['value'] = []
data['mouse']['middle']['down']['function'] = document.addEventListener('mousedown', function(event) {if (event.which == 2) {
	data['mouse']['middle']['click']['value'] = true
}})
data['mouse']['middle']['up'] = []
data['mouse']['middle']['up']['value'] = []
data['mouse']['middle']['up']['function'] = document.addEventListener('mouseup', function(event) {if (event.which == 2) {
	data['mouse']['middle']['click']['value'] = false
}})
data['mouse']['wheel'] = []
data['mouse']['wheel']['value'] = []
data['mouse']['wheel']['function'] = document.addEventListener('wheel', function(event) {if (event.which == 2) {
	data['mouse']['wheel']['value'] = event.deltaY
}})
data['mouse']['x']['2d'] = []
data['mouse']['x']['2d']['value'] = []
data['mouse']['x']['2d']['function'] = function () {
	data['mouse']['x']['2d']['value'] = data['mouse']['x']['value']
}
data['mouse']['x']['3d'] = []
data['mouse']['x']['3d']['value'] = []
data['mouse']['x']['3d']['function'] = function () {
	data['mouse']['x']['3d']['value'] = data['mouse']['x']['value']
}
data['mouse']['x']['rotate'] = []
data['mouse']['x']['rotate']['value'] = []
data['mouse']['x']['rotate']['function'] = function () {
	
}
data['mouse']['y']['2d'] = []
data['mouse']['y']['2d']['value'] = []
data['mouse']['y']['2d']['function'] = function () {
	data['mouse']['y']['2d']['value'] = data['mouse']['y']['value']
}
data['mouse']['y']['3d'] = []
data['mouse']['y']['3d']['value'] = []
data['mouse']['y']['3d']['function'] = function () {
	data['mouse']['y']['3d']['value'] = data['mouse']['y']['value']
}
data['mouse']['y']['rotate'] = []
data['mouse']['y']['rotate']['value'] = []
data['mouse']['y']['rotate']['function'] = function () {
	
}
data['mouse']['z']['2d'] = []
data['mouse']['z']['2d']['value'] = []
data['mouse']['z']['2d']['function'] = function () {
	data['mouse']['z']['2d']['value'] = data['mouse']['z']['value']
}
data['mouse']['z']['3d'] = []
data['mouse']['z']['3d']['value'] = []
data['mouse']['z']['3d']['function'] = function () {
	data['mouse']['z']['3d']['value'] = data['mouse']['z']['value']
}
data['mouse']['z']['rotate'] = []
data['mouse']['z']['rotate']['value'] = []
data['mouse']['z']['rotate']['function'] = function () {
	
}
data['mouse']['angel'] = []
data['mouse']['angel']['value'] = []
data['mouse']['angel']['function'] = function () {
	
}
data['mouse']['angel']['x'] = []
data['mouse']['angel']['x']['value'] = 54
data['mouse']['angel']['x']['function'] = function () {

}
data['mouse']['angel']['y'] = []
data['mouse']['angel']['y']['value'] = 0
data['mouse']['angel']['y']['function'] = function () {
	
}
data['mouse']['angel']['z'] = []
data['mouse']['angel']['z']['value'] = 45
data['mouse']['angel']['z']['function'] = function () {
	
}
data['mouse']['rotate'] = []
data['mouse']['rotate']['value'] = []
data['mouse']['rotate']['function'] = function () {
	
}
data['mouse']['rotate']['x'] = []
data['mouse']['rotate']['x']['value'] = []
data['mouse']['rotate']['x']['function'] = function () {
	data['mouse']['y']['rotate']['value'] = data['screen']['height']['value'] / 2 + (data['mouse']['y']['2d']['value'] - data['screen']['height']['value'] / 2) * Math.cos(data['mouse']['angel']['x']['value'] * Math.PI / 180) + data['mouse']['z']['2d']['value'] * Math.sin(data['mouse']['angel']['x']['value'] * Math.PI / 180)
	
	data['mouse']['y']['2d']['value'] = data['mouse']['y']['rotate']['value']
}
data['mouse']['rotate']['y'] = []
data['mouse']['rotate']['y']['value'] = []
data['mouse']['rotate']['y']['function'] = function () {
	
}
data['mouse']['rotate']['z'] = []
data['mouse']['rotate']['z']['value'] = []
data['mouse']['rotate']['z']['function'] = function () {
	data['mouse']['x']['rotate']['value'] = data['screen']['width']['value'] / 2 + (data['mouse']['x']['2d']['value'] - data['screen']['width']['value'] / 2) * Math.cos(-data['mouse']['angel']['z']['value'] * Math.PI / 180) - (data['mouse']['y']['2d']['value'] - data['screen']['height']['value'] / 2) * Math.sin(-data['mouse']['angel']['z']['value'] * Math.PI / 180)
	data['mouse']['y']['rotate']['value'] = data['screen']['height']['value'] / 2 + (data['mouse']['x']['2d']['value'] - data['screen']['width']['value'] / 2) * Math.sin(-data['mouse']['angel']['z']['value'] * Math.PI / 180) + (data['mouse']['y']['2d']['value'] - data['screen']['height']['value'] / 2) * Math.cos(-data['mouse']['angel']['z']['value'] * Math.PI / 180)
	
	data['mouse']['x']['2d']['value'] = data['mouse']['x']['rotate']['value']
	data['mouse']['y']['2d']['value'] = data['mouse']['y']['rotate']['value']
}

data['keyboard'] = []
data['keyboard']['value'] = []
data['keyboard']['function'] = document.body.onkeydown = function(event) {
	//spacebar
	if (event.which == 32) {
		//console.log(data['map']['z']['3d']['value'][0][0][0][0][0])
		console.log(data['mouse']['y']['value'])
	}
	//left
	if (event.which == 37) {
		data['map']['angel']['x']['value'] += 1
		console.log(data['map']['angel']['x']['value'])
	}
	//up
	if (event.which == 38) {
		data['map']['angel']['y']['value'] += 1
		console.log(data['map']['angel']['y']['value'])
	}
	//right
	if (event.which == 39) {
		data['map']['angel']['z']['value'] += 1
		console.log(data['map']['angel']['z']['value'])
	}
	//down
	if (event.which == 40) {
		
	}
}

data['picture'] = []
data['picture']['value'] = []
data['picture']['function'] = function () {
	
}
data['picture']['load'] = []
data['picture']['load']['value'] = []
data['picture']['load']['function'] = function () {
	if (data['picture']['load']['value'][0] == undefined) {
		for (var i = 0; i <= 4; i++) {
			data['picture']['load']['value'][i] = new Image();
			data['picture']['load']['value'][i].src = 'picture/' + i + '.png';
		}
	}
}
data['picture']['width'] = []
data['picture']['width']['value'] = 400
data['picture']['width']['function'] = function () {
	//data['picture']['width']['value'] = 100
}
data['picture']['height'] = []
data['picture']['height']['value'] = 400
data['picture']['height']['function'] = function () {
	//data['picture']['height']['value'] = 100
}
data['picture']['x'] = []
data['picture']['x']['value'] = []
data['picture']['x']['function'] = function () {
	
}
data['picture']['x']['2d'] = []
data['picture']['x']['2d']['value'] = []
data['picture']['x']['2d']['function'] = function (x) {
	data['picture']['x']['2d']['value'] = x - data['picture']['width']['value'] / 2
	return data['picture']['x']['2d']['value']
}
data['picture']['x']['3d'] = []
data['picture']['x']['3d']['value'] = []
data['picture']['x']['3d']['function'] = function (x) {
	data['picture']['x']['3d']['value'] = x - data['picture']['width']['value'] / 2
	return data['picture']['x']['3d']['value']
}
data['picture']['y'] = []
data['picture']['y']['value'] = []
data['picture']['y']['function'] = function (y) {
}
data['picture']['y']['2d'] = []
data['picture']['y']['2d']['value'] = []
data['picture']['y']['2d']['function'] = function (y) {
	data['picture']['y']['2d']['value'] = y - data['picture']['height']['value'] / 2
	return data['picture']['y']['2d']['value']
}
data['picture']['y']['3d'] = []
data['picture']['y']['3d']['value'] = []
data['picture']['y']['3d']['function'] = function (y) {
	data['picture']['y']['3d']['value'] = y - data['picture']['height']['value'] / 2
	return data['picture']['y']['value']
}

data['map'] = []
data['map']['value'] = []
data['map']['function'] = function () {
	
}
data['map']['number'] = []
data['map']['number']['x'] = []
data['map']['number']['x']['value'] = 1
data['map']['number']['x']['function'] = function () {
	//data['map']['number']['x']['value'] = data['screen']['width']['value'] / data['picture']['width']['value']
	data['map']['number']['x']['value'] = 5
}
data['map']['number']['y'] = []
data['map']['number']['y']['value'] = 1
data['map']['number']['y']['function'] = function () {
	//data['map']['number']['y']['value'] = data['screen']['height']['value'] / data['picture']['height']['value']
	data['map']['number']['y']['value'] = 5
}
data['map']['width'] = []
data['map']['width']['value'] = 100
data['map']['width']['function'] = function () {
	
}
data['map']['height'] = []
data['map']['height']['value'] = 100
data['map']['height']['function'] = function () {
	
}
data['map']['x'] = []
data['map']['x']['value'] = []
data['map']['x']['function'] = function () {
	
}
data['map']['x']['2d'] = []
data['map']['x']['2d']['value'] = []
data['map']['x']['2d']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['x']['2d']['value'][i]) {
					data['map']['x']['2d']['value'][i] = []
				}
				if (!data['map']['x']['2d']['value'][i][j]) {
					data['map']['x']['2d']['value'][i][j] = []
				}
				if (!data['map']['x']['2d']['value'][i][j][k]) {
					data['map']['x']['2d']['value'][i][j][k] = []
				}
				data['map']['x']['2d']['value'][i][j][k] = data['screen']['width']['value'] / 2 + i * data['map']['width']['value']
			}
		}
	}
}
data['map']['x']['2d']['min'] = []
data['map']['x']['2d']['min']['value'] = []
data['map']['x']['2d']['min']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['x']['2d']['min']['value'][i]) {
					data['map']['x']['2d']['min']['value'][i] = []
				}
				if (!data['map']['x']['2d']['min']['value'][i][j]) {
					data['map']['x']['2d']['min']['value'][i][j] = []
				}
				if (!data['map']['x']['2d']['min']['value'][i][j][k]) {
					data['map']['x']['2d']['min']['value'][i][j][k] = []
				}
				data['map']['x']['2d']['min']['value'][i][j][k] = data['screen']['width']['value'] / 2 + i * data['map']['width']['value'] - data['map']['width']['value'] / 2
			}
		}
	}
}
data['map']['x']['2d']['max'] = []
data['map']['x']['2d']['max']['value'] = []
data['map']['x']['2d']['max']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['x']['2d']['max']['value'][i]) {
					data['map']['x']['2d']['max']['value'][i] = []
				}
				if (!data['map']['x']['2d']['max']['value'][i][j]) {
					data['map']['x']['2d']['max']['value'][i][j] = []
				}
				if (!data['map']['x']['2d']['max']['value'][i][j][k]) {
					data['map']['x']['2d']['max']['value'][i][j][k] = []
				}
				data['map']['x']['2d']['max']['value'][i][j][k] = data['screen']['width']['value'] / 2 + i * data['map']['width']['value'] + data['map']['width']['value'] / 2
			}
		}
	}
}
data['map']['x']['3d'] = []
data['map']['x']['3d']['value'] = []
data['map']['x']['3d']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['x']['3d']['value'][i]) {
					data['map']['x']['3d']['value'][i] = []
				}
				if (!data['map']['x']['3d']['value'][i][j]) {
					data['map']['x']['3d']['value'][i][j] = []
				}
				if (!data['map']['x']['3d']['value'][i][j][k]) {
					data['map']['x']['3d']['value'][i][j][k] = []
				}
				//data['map']['x']['3d']['value'][i][j][k] = data['screen']['width']['value'] / 2 + i * data['map']['width']['value']
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						if (!data['map']['x']['3d']['value'][i][j][k][m]) {
							data['map']['x']['3d']['value'][i][j][k][m] = []
						}
						if (!data['map']['x']['3d']['value'][i][j][k][m][n]) {
							data['map']['x']['3d']['value'][i][j][k][m][n] = []
						}
						data['map']['x']['3d']['value'][i][j][k][m][n] = data['screen']['width']['value'] / 2 + i * data['map']['width']['value'] - 50 + m * 5
					}
				}
				
			}
		}
	}
}
data['map']['x']['rotate'] = []
data['map']['x']['rotate']['value'] = []
data['map']['x']['rotate']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['x']['rotate']['value'][i]) {
					data['map']['x']['rotate']['value'][i] = []
				}
				if (!data['map']['x']['rotate']['value'][i][j]) {
					data['map']['x']['rotate']['value'][i][j] = []
				}
				if (!data['map']['x']['rotate']['value'][i][j][k]) {
					data['map']['x']['rotate']['value'][i][j][k] = []
				}
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						if (!data['map']['x']['rotate']['value'][i][j][k][m]) {
							data['map']['x']['rotate']['value'][i][j][k][m] = []
						}
						if (!data['map']['x']['rotate']['value'][i][j][k][m][n]) {
							data['map']['x']['rotate']['value'][i][j][k][m][n] = []
						}
					}
				}
				
			}
		}
	}
}
data['map']['y'] = []
data['map']['y']['value'] = []
data['map']['y']['function'] = function () {
	
}
data['map']['y']['2d'] = []
data['map']['y']['2d']['value'] = []
data['map']['y']['2d']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['y']['2d']['value'][i]) {
					data['map']['y']['2d']['value'][i] = []
				}
				if (!data['map']['y']['2d']['value'][i][j]) {
					data['map']['y']['2d']['value'][i][j] = []
				}
				if (!data['map']['y']['2d']['value'][i][j][k]) {
					data['map']['y']['2d']['value'][i][j][k] = []
				}
				data['map']['y']['2d']['value'][i][j][k] = data['screen']['height']['value'] / 2 + j * data['map']['height']['value']
			}
		}
	}
}
data['map']['y']['2d']['min'] = []
data['map']['y']['2d']['min']['value'] = []
data['map']['y']['2d']['min']['function'] = function () {
	for (var i = - data['map']['number']['y']['value']; i <= data['map']['number']['y']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['y']['2d']['min']['value'][i]) {
					data['map']['y']['2d']['min']['value'][i] = []
				}
				if (!data['map']['y']['2d']['min']['value'][i][j]) {
					data['map']['y']['2d']['min']['value'][i][j] = []
				}
				if (!data['map']['y']['2d']['min']['value'][i][j][k]) {
					data['map']['y']['2d']['min']['value'][i][j][k] = []
				}
				data['map']['y']['2d']['min']['value'][i][j][k] = data['screen']['height']['value'] / 2 + j * data['map']['height']['value'] - data['map']['height']['value'] / 2
			}
		}
	}
}
data['map']['y']['2d']['max'] = []
data['map']['y']['2d']['max']['value'] = []
data['map']['y']['2d']['max']['function'] = function () {
	for (var i = - data['map']['number']['y']['value']; i <= data['map']['number']['y']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['y']['2d']['max']['value'][i]) {
					data['map']['y']['2d']['max']['value'][i] = []
				}
				if (!data['map']['y']['2d']['max']['value'][i][j]) {
					data['map']['y']['2d']['max']['value'][i][j] = []
				}
				if (!data['map']['y']['2d']['max']['value'][i][j][k]) {
					data['map']['y']['2d']['max']['value'][i][j][k] = []
				}
				data['map']['y']['2d']['max']['value'][i][j][k] = data['screen']['height']['value'] / 2 + j * data['map']['height']['value'] + data['map']['height']['value'] / 2
			}
		}
	}
}
data['map']['y']['3d'] = []
data['map']['y']['3d']['value'] = []
data['map']['y']['3d']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['y']['3d']['value'][i]) {
					data['map']['y']['3d']['value'][i] = []
				}
				if (!data['map']['y']['3d']['value'][i][j]) {
					data['map']['y']['3d']['value'][i][j] = []
				}
				if (!data['map']['y']['3d']['value'][i][j][k]) {
					data['map']['y']['3d']['value'][i][j][k] = []
				}
				//data['map']['y']['3d']['value'][i][j][k] = data['screen']['height']['value'] / 2 + j * data['map']['height']['value']
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						if (!data['map']['y']['3d']['value'][i][j][k][m]) {
							data['map']['y']['3d']['value'][i][j][k][m] = []
						}
						if (!data['map']['y']['3d']['value'][i][j][k][m][n]) {
							data['map']['y']['3d']['value'][i][j][k][m][n] = []
						}
						data['map']['y']['3d']['value'][i][j][k][m][n] = data['screen']['height']['value'] / 2 + j * data['map']['height']['value'] - 50 + n * 5
					}
				}
				
			}
		}
	}
}
data['map']['y']['rotate'] = []
data['map']['y']['rotate']['value'] = []
data['map']['y']['rotate']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['y']['rotate']['value'][i]) {
					data['map']['y']['rotate']['value'][i] = []
				}
				if (!data['map']['y']['rotate']['value'][i][j]) {
					data['map']['y']['rotate']['value'][i][j] = []
				}
				if (!data['map']['y']['rotate']['value'][i][j][k]) {
					data['map']['y']['rotate']['value'][i][j][k] = []
				}
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						if (!data['map']['y']['rotate']['value'][i][j][k][m]) {
							data['map']['y']['rotate']['value'][i][j][k][m] = []
						}
						if (!data['map']['y']['rotate']['value'][i][j][k][m][n]) {
							data['map']['y']['rotate']['value'][i][j][k][m][n] = []
						}
					}
				}
				
			}
		}
	}
}
data['map']['z'] = []
data['map']['z']['value'] = []
data['map']['z']['function'] = function () {
	
}
data['map']['z']['2d'] = []
data['map']['z']['2d']['value'] = []
data['map']['z']['2d']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['z']['2d']['value'][i]) {
					data['map']['z']['2d']['value'][i] = []
				}
				if (!data['map']['z']['2d']['value'][i][j]) {
					data['map']['z']['2d']['value'][i][j] = []
				}
				if (!data['map']['z']['2d']['value'][i][j][k]) {
					data['map']['z']['2d']['value'][i][j][k] = []
				}
				data['map']['z']['2d']['value'][i][j][k] = k
			}
		}
	}
}
data['map']['z']['3d'] = []
data['map']['z']['3d']['value'] = []
data['map']['z']['3d']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['z']['3d']['value'][i]) {
					data['map']['z']['3d']['value'][i] = []
				}
				if (!data['map']['z']['3d']['value'][i][j]) {
					data['map']['z']['3d']['value'][i][j] = []
				}
				if (!data['map']['z']['3d']['value'][i][j][k]) {
					data['map']['z']['3d']['value'][i][j][k] = []
				}
				//data['map']['z']['3d']['value'][i][j][k] = k
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						if (!data['map']['z']['3d']['value'][i][j][k][m]) {
							data['map']['z']['3d']['value'][i][j][k][m] = []
						}
						if (!data['map']['z']['3d']['value'][i][j][k][m][n]) {
							data['map']['z']['3d']['value'][i][j][k][m][n] = []
						}
						data['map']['z']['3d']['value'][i][j][k][m][n] = k
					}
				}
				
			}
		}
	}
}
data['map']['z']['rotate'] = []
data['map']['z']['rotate']['value'] = []
data['map']['z']['rotate']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				if (!data['map']['z']['rotate']['value'][i]) {
					data['map']['z']['rotate']['value'][i] = []
				}
				if (!data['map']['z']['rotate']['value'][i][j]) {
					data['map']['z']['rotate']['value'][i][j] = []
				}
				if (!data['map']['z']['rotate']['value'][i][j][k]) {
					data['map']['z']['rotate']['value'][i][j][k] = []
				}
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						if (!data['map']['z']['rotate']['value'][i][j][k][m]) {
							data['map']['z']['rotate']['value'][i][j][k][m] = []
						}
						if (!data['map']['z']['rotate']['value'][i][j][k][m][n]) {
							data['map']['z']['rotate']['value'][i][j][k][m][n] = []
						}
					}
				}
				
			}
		}
	}
}
data['map']['angel'] = []
data['map']['angel']['value'] = []
data['map']['angel']['function'] = function () {
	
}
data['map']['angel']['x'] = []
data['map']['angel']['x']['value'] = 54
data['map']['angel']['x']['function'] = function () {

}
data['map']['angel']['y'] = []
data['map']['angel']['y']['value'] = 0
data['map']['angel']['y']['function'] = function () {
	
}
data['map']['angel']['z'] = []
data['map']['angel']['z']['value'] = 45
data['map']['angel']['z']['function'] = function () {
	
}
data['map']['rotate'] = []
data['map']['rotate']['value'] = []
data['map']['rotate']['function'] = function () {
	
}
data['map']['rotate']['x'] = []
data['map']['rotate']['x']['value'] = []
data['map']['rotate']['x']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				/*
				data['map']['y']['rotate']['value'][i][j][k] = data['screen']['height']['value'] / 2 + (data['map']['y']['3d']['value'][i][j][k] - data['screen']['height']['value'] / 2) * Math.cos(data['map']['angel']['x']['value'] * Math.PI / 180) + (data['map']['z']['3d']['value'][i][j][k]) * Math.sin(data['map']['angel']['x']['value'] * Math.PI / 180)
				
				data['map']['y']['3d']['value'][i][j][k] = data['map']['y']['rotate']['value'][i][j][k]
				*/
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						data['map']['y']['rotate']['value'][i][j][k][m][n] = data['screen']['height']['value'] / 2 + (data['map']['y']['3d']['value'][i][j][k][m][n] - data['screen']['height']['value'] / 2) * Math.cos(data['map']['angel']['x']['value'] * Math.PI / 180) + data['map']['z']['3d']['value'][i][j][k][m][n] * Math.sin(data['map']['angel']['x']['value'] * Math.PI / 180)
						
						data['map']['y']['3d']['value'][i][j][k][m][n] = data['map']['y']['rotate']['value'][i][j][k][m][n]
					}
				}
				
			}
		}
	}
}
data['map']['rotate']['y'] = []
data['map']['rotate']['y']['value'] = []
data['map']['rotate']['y']['function'] = function () {
	
}
data['map']['rotate']['z'] = []
data['map']['rotate']['z']['value'] = []
data['map']['rotate']['z']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				/*
				data['map']['x']['rotate']['value'][i][j][k] = data['screen']['width']['value'] / 2 + (data['map']['x']['3d']['value'][i][j][k] - data['screen']['width']['value'] / 2) * Math.cos(data['map']['angel']['z']['value'] * Math.PI / 180) - (data['map']['y']['3d']['value'][i][j][k] - data['screen']['height']['value'] / 2) * Math.sin(data['map']['angel']['z']['value'] * Math.PI / 180)
				data['map']['y']['rotate']['value'][i][j][k] = data['screen']['height']['value'] / 2 + (data['map']['x']['3d']['value'][i][j][k] - data['screen']['width']['value'] / 2) * Math.sin(data['map']['angel']['z']['value'] * Math.PI / 180) + (data['map']['y']['3d']['value'][i][j][k] - data['screen']['height']['value'] / 2) * Math.cos(data['map']['angel']['z']['value'] * Math.PI / 180)
				
				data['map']['x']['3d']['value'][i][j][k] = data['map']['x']['rotate']['value'][i][j][k]
				data['map']['y']['3d']['value'][i][j][k] = data['map']['y']['rotate']['value'][i][j][k]
				*/
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						data['map']['x']['rotate']['value'][i][j][k][m][n] = data['screen']['width']['value'] / 2 + (data['map']['x']['3d']['value'][i][j][k][m][n] - data['screen']['width']['value'] / 2) * Math.cos(data['map']['angel']['z']['value'] * Math.PI / 180) - (data['map']['y']['3d']['value'][i][j][k][m][n] - data['screen']['height']['value'] / 2) * Math.sin(data['map']['angel']['z']['value'] * Math.PI / 180)
						data['map']['y']['rotate']['value'][i][j][k][m][n] = data['screen']['height']['value'] / 2 + (data['map']['x']['3d']['value'][i][j][k][m][n] - data['screen']['width']['value'] / 2) * Math.sin(data['map']['angel']['z']['value'] * Math.PI / 180) + (data['map']['y']['3d']['value'][i][j][k][m][n] - data['screen']['height']['value'] / 2) * Math.cos(data['map']['angel']['z']['value'] * Math.PI / 180)
						
						data['map']['x']['3d']['value'][i][j][k][m][n] = data['map']['x']['rotate']['value'][i][j][k][m][n]
						data['map']['y']['3d']['value'][i][j][k][m][n] = data['map']['y']['rotate']['value'][i][j][k][m][n]
					}
				}
				
			}
		}
	}
}
data['map']['screen'] = []
data['map']['screen']['value'] = []
data['map']['screen']['function'] = function () {
	for (var i = - data['map']['number']['x']['value']; i <= data['map']['number']['x']['value']; i ++) {
		for (var j = - data['map']['number']['y']['value']; j <= data['map']['number']['y']['value']; j ++) {
			for (var k = 0; k <= 0; k ++) {
				//data['screen']['paint']['function'](data['picture']['load']['value'][3], data['picture']['x']['function'](data['map']['x']['2d']['value'][i][j][k]), data['picture']['y']['function'](data['map']['y']['2d']['value'][i][j][k]))
				//data['screen']['paint']['function'](data['picture']['load']['value'][3], data['map']['x']['2d']['value'][i][j][k], data['map']['y']['2d']['value'][i][j][k])
				//data['screen']['pixel']['function'](data['map']['x']['3d']['value'][i][j][k], data['map']['y']['3d']['value'][i][j][k])
				data['screen']['pixel']['function'](data['mouse']['x']['2d']['value'], data['mouse']['y']['2d']['value'])
				
				
				//console.log(data['map']['x']['2d']['min']['value'][i][j][k])
				
				if (data['mouse']['x']['2d']['value'] < data['map']['x']['2d']['max']['value'][i][j][k]) {
					
					if (data['mouse']['x']['2d']['value'] > data['map']['x']['2d']['min']['value'][i][j][k]) {
						if (data['mouse']['y']['2d']['value'] < data['map']['y']['2d']['max']['value'][i][j][k]) {
							if (data['mouse']['y']['2d']['value'] > data['map']['y']['2d']['min']['value'][i][j][k]) {
								data['screen']['paint']['function'](data['picture']['load']['value'][3], data['map']['x']['2d']['value'][i][j][k] - 50, data['map']['y']['2d']['value'][i][j][k] - 50)
							}
						}
					}
				}
				
				
				
				
				for (var m = 0; m <= 20; m ++) {
					for (var n = 0; n <= 20; n ++) {
						data['screen']['pixel']['function'](data['map']['x']['3d']['value'][i][j][k][m][n], data['map']['y']['3d']['value'][i][j][k][m][n])
					}
				}
				
			}
		}
	}
}

data['button'] = []
data['button']['screen'] = []
data['button']['screen']['value'] = []
data['button']['screen']['function'] = function () {
	data['screen']['function'](data['picture']['value'][1], 0, 0)
}

data['timer'] = setInterval(function () {
	data['screen']['canvas']['function']()
	data['screen']['width']['function']()
	data['screen']['height']['function']()
	
	data['mouse']['x']['2d']['function']()
	data['mouse']['x']['3d']['function']()
	data['mouse']['y']['2d']['function']()
	data['mouse']['y']['3d']['function']()
	data['mouse']['z']['function']()
	data['mouse']['z']['2d']['function']()
	data['mouse']['z']['3d']['function']()
	data['mouse']['rotate']['x']['function']()
	data['mouse']['rotate']['z']['function']()
	//data['mouse']['rotate']['y']['function']()
	
	data['picture']['load']['function']()
	
	//data['map']['number']['x']['function']()
	//data['map']['number']['y']['function']()
	data['map']['x']['2d']['function']()
	data['map']['x']['2d']['min']['function']()
	data['map']['x']['2d']['max']['function']()
	data['map']['x']['3d']['function']()
	data['map']['x']['rotate']['function']()
	data['map']['y']['2d']['function']()
	data['map']['y']['2d']['min']['function']()
	data['map']['y']['2d']['max']['function']()
	data['map']['y']['3d']['function']()
	data['map']['y']['rotate']['function']()
	data['map']['z']['2d']['function']()
	data['map']['z']['3d']['function']()
	data['map']['z']['rotate']['function']()
	
	data['map']['rotate']['z']['function']()
	data['map']['rotate']['x']['function']()
	//data['map']['rotate']['y']['function']()
	
	data['map']['screen']['function']()
	
	//data['button']['screen']['function']()
}, 40)

