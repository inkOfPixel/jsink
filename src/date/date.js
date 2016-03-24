import dateJSON from "./date.json";

export default {
	monthName: _monthName,
	isDate: _isDate
}

function _monthName(date, locale) {
	var monthNameLocale;
	var monthName;
	if (!_isDate(date)) {
		throw "First argument must be a date";
	}
	if (typeof locale === "string") {
		monthNameLocale = dateJSON["monthNames"][locale];
	} else {
		monthNameLocale = dateJSON["monthNames"]["en"];
	}
	if (monthNameLocale !== undefined) {
		monthName = monthNameLocale[date.getMonth()];
	}
	return monthName;
}

function _isDate(o) {
	return Object.prototype.toString.call(o) === "[object Date]";
}
