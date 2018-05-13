function telephoneCheck(str) {
	// Good luck!
	return str.replace(/\D/, '').length < 10 ||
		str.replace(/\D/, '').length > 11 ? false :
		/(?:1)?\d{3}\d{3}\d{4}/.test(str);
}