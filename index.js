const defchars = 'abcdefghijklmnopqrstuvwxyz-_.'

function getRandInt(max){
    return Math.floor(Math.random() * max);
}

function generateToken(length=5, chars=defchars){
		let uchars = chars.split('')
		let result = '';
		for(i=0;i<length;i++){
			if(getRandInt(2) === 0) {
				result += uchars[getRandInt(uchars.length)]
			} else {
				result += uchars[getRandInt(uchars.length)].toUpperCase()
			}
		}
		return result
}
module.exports = {
	generateToken
}
