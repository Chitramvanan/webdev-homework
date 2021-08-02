// Given a date, return the age of the person with that birthday, in years, months, and days
const catculateAge = (birthday) => {
  var dob = birthday;
  var time_diff = Date.now() - dob.getTime();
  var age_dt = new Date(time_diff);
  var year = age_dt.getFullYear();
  var month = age_dt.getMonth();
  var date = age_dt.getDate();
  var age = Math.abs(year - 1970);
  years_to_months = age * 12 + month;
  if (month != 0) {
    months_to_days = month * 30.4;
  }
  total_days = Math.round(months_to_days + date);
  if (dob != "Invalid Date") {
    if (dob_format == "format_1") {
      return "Age: " + age + " years, " + month + " months, " + date + " days";
    } else if (dob_format == "format_2") {
      return "Age: " + age + " years, " + total_days + " days";
    } else if (dob_format == "format_3") {
      return "Age: " + years_to_months + " months, " + date + " days";
    }
  } else {
    return "Error: Invalid input provided";
  }
};

birthday = new Date("December 17, 1995");
var dob_format = "format_1";
console.log(catculateAge(birthday));
birthday = new Date("1995-12-17");
var dob_format = "format_2";
console.log(catculateAge(birthday));
birthday = new Date(1995, 11, 17);
var dob_format = "format_3";
console.log(catculateAge(birthday));
birthday = new Date("628021800000");
var dob_format = "format_4";
console.log(catculateAge(birthday));

// Date formats
// new Date('December 17, 1995')
// new Date('1995-12-17')
// new Date(1995, 11, 17)
// new Date(628021800000)

// Age: 25 years, 4 months, 3 days
// Age: 25 years, 1 day
// Age: 4 months, 10 days
// Error: invalid input provided
