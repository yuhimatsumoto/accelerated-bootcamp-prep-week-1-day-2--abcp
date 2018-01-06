var course = {
  title: "Bootcamp Prep",
  description: "an introduction to JavaScript"
}

var course = new Object({
  title: "Bootcamp Prep",
  description: "an introduction to JS"
})

course.instructor = "Sophie DeBenedetto"

// or

course["instructor"] = "Sophie DeBenedetto"


Object.assign(course, {start_date: "2017-01-01"})

Object.assign({}, course, {start_date: "2017-01-01"})

delete course["title"]

Object.assign({}, course, {description: "a kick-ass introduction to JS"})
