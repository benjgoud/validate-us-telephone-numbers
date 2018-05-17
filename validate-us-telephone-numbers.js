function telephoneCheck(str) {
	// Good luck!
	return str.replace(/\D/g, '').length < 10 ||
		str.replace(/\D/g, '').length > 11 ? false :
		/^(?:1 ?)?(?:\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/.test(str);
}