const fluidType = (minType: number, maxType: number, minScreen: number, maxScreen: number, lineHeightMultiplier: number) => {
  // 32px + (96 - 32) * ((100vw - 300px) / (2400 - 300))
  const fontSize = `calc(${minType}px + (${maxType} - ${minType}) * ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen})))`
  const lineHeight = `calc((${minType}px + (${maxType} - ${minType}) * ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen}))) * ${lineHeightMultiplier})`
  return {
    fontSize,
    lineHeight
  }
}

const formatDate = (date: any, locale: string, short?: string) => {
  if (short) {
    return new Date(date).toLocaleString(locale, { 'month': 'numeric', 'year': 'numeric' })
  }
  return new Date(date).toLocaleString(locale, { 'day': 'numeric', 'month': 'long', 'year': 'numeric' })
}

const isExternalLink = (url: string) => {
  const EXTERNAL_URL_RE = /^[a-z]+:/i;
  return EXTERNAL_URL_RE.test(url)
}

const getContrast = function (hexcolor: string){

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};

export {
  fluidType,
  formatDate,
  isExternalLink,
  getContrast
}