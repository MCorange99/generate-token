const chars = 'abcdefghijklmnopqrstuvwxyz-_.'.split('')

function getRandInt(max){
    return Math.floor(Math.random() * max);
}

function generateToken(length=5){
		let result = '';
		for(i=0;i<length;i++){
			if(getRandInt(2) === 0) {
				result += chars[getRandInt(chars.length)]
			} else {
				result += chars[getRandInt(chars.length)].toUpperCase()
			}
		}
		return result
}
module.exports = {
	generateToken
}