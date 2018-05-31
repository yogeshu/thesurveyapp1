Project Name - Online Survey application using
AngularJS
(you can also give it a name of your choice)
A free easily customizable custom survey creator
Project Description -
Surveys are very important in this data driven world. Most of the survey creating and
integrating applications used nowadays are less user friendly.
 The Aim of the project is to create an online survey management application through
which you can use to create survey and also to collect answers from survey
This project should be a Single Page application. You are allowed to use any kind
of angular module, libraries or tool you want.
APIs will be given to you from edwisor.com
Technologies to be used ​- HTML5, CSS , Javascript, AngularJS
Features of the platform -
1) Survey Management Part managed by Admin(you)
2) Survey running part used by End User
1) Survey Management Part
a) A view to create a survey - In this view admin should be able to create a survey.
Give it a tile, subtitle and description. You can use API number 1 for this purpose
b) A view to view all surveys - In this view admin should be able to view a list of all
surveys. API number 2 can be used here
c) A view to see details of a particular survey. You have to display all the data you
are getting except the _id or _v field. API number 3 can be used here
d) Edit a particular survey - This view should allow to edit details like title, subtitle
and description for a particular survey. API number 4 can be used.
e) Delete a particular survey - Admin should be able to delete a particular survey
from both the views in point 1(b) and 1(c). API number - 5
f) Create a question in survey - Admin should be able to create a question in a
survey through this view. You can use API number 6 for this
g) Create an option for a survey - Each question in survey can have multiple
choices/options to choose from. You can use API number 10 for creating an
option
h) Admin should be able to delete options and questions also. Check API doc for
the required APIs
2) Survey running part - User end
a) View to display a survey by Id - user will be directly given this link to
start the survey. You can include a welcome screen with survey title
and description
b) View of each question in which user should be able to select an
option.
c) Once the user has selected the answer, you have to send that
answer to API 12 and then the screen should display the next
question in the survey
d) User should have option to skip the question. Number “0” should be
passed as answer in that
e) At the end of the survey, display a Thank you message.
