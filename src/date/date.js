import dateJSON from "./date.json";

export default {
	areSameDay: _areSameDay,
	isDate: _isDate,
	monthName: _monthName
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

function _areSameDay(a, b) {
	return a.getFullYear() === b.getFullYear()
		&& a.getMonth() === b.getMonth()
		&& a.getDate() === b.getDate();
}
