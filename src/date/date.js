import dateJSON from "./date.json";

export default {
	areSameDate: _areSameDate,
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

function _areSameDate(a, b) {
	if (_isDate(a) && _isDate(b)) {
		return a.getUTCFullYear() === b.getUTCFullYear()
			&& a.getUTCMonth() === b.getUTCMonth()
			&& a.getUTCDate() === b.getUTCDate();
	}
	return false;
}
