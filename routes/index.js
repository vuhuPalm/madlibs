  var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    noun0: "Friday",
    noun1: "Dog",
    noun2: "John",
    noun3: "Ikea",
    noun4: "Tree",
    noun5: "Pumpkin",
    noun6: "Mason",
    noun7: "Bacon",
    noun8: "Baskets",
    verb1: "Run",
    verb0: "Suitcase",
    verb2: "Sing",
    adjective1: "Stinky",
    adjective2: "Big",
    adjective0: "Cat"
  });
});


/*POST form data*/
  router.post('/story', function(req, res){
    let body = req.body;
    let newStory = getStory(body);
    res.render('story', {
      newStory: newStory
    });
  })
module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData) {
  return `On ${formData.noun0} , we are going over to  ${formData.noun2} 's house for Easter brunch. Did you know that brunch is really a combination of  ${formData.noun1}  and  ${formData.noun3} ? They are going to cook my favorite  + five + , and I hope they make the  + six +   + seven +. For dessert,  + eight +   is bringing  + nine +  pie with  + ten +.`
}

function generateStory2(formData) {
  return `Make sure your lunch ${formData.verb0} is filled with nutritious ${formData.adjective1} food. Do not go to the ${formData.adjective2} food stand across the street from school. The hamburgers they serve are fried in ${formData.noun1} and are made of ${formData.adjective0} meat.`
}

function generateStory3(formData) {
  return `Red, ${formData.adjective1} apples! Today we are going to ${formData.verb1} apples. I am going to ${formData.verb2} the most. My ${formData.noun1} and I are having an ${formData.noun3} picking contest this year.`
}