/* Copyright 2017 Tom Shanley
forked from http://blockbuilder.org/tomshanley/a94a879c8d28e302ac2b89228f9bd1f7
by Tom Shanley 

person icon created by William Dayabaran, obtained from the Noun Project, https://thenounproject.com/search/?q=human%20figure&i=350163
*/

let data = [   
  {
    "category": "Female",
    "subcategory": "were female",
    "position": "left",
    "percentage": 52,
	"header": "Of every 100 undergraduate students on campus in Fall 2017..."
  },
  {
    "category": "Female",
    "subcategory": "all other",
    "position": "right",
    "percentage": 48,
	"header": "Of every 100 undergraduate students on campus in Fall 2017..."
  },  
  {
    "category": "Male",
    "subcategory": "were male",
    "position": "left",
    "percentage": 47,
	"header": "Of every 100 undergraduate students on campus in Fall 2017..."
  },
  {
    "category": "Male",
    "subcategory": "all other",
    "position": "right",
    "percentage": 53,
	"header": "Of every 100 undergraduate students on campus in Fall 2017..."
  },  
  {
    "category": "Underrepresented Minorities",
    "subcategory": "were Underrepresented Minorities",
    "position": "left",
    "percentage": 18,
	"header": "Of every 100 undergraduate students on campus in Fall 2017..."
  },
  {
    "category": "Underrepresented Minorities",
    "subcategory": "all other",
    "position": "right",
    "percentage": 82,
	"header": "Of every 100 undergraduate students on campus in Fall 2017..."
  },
  {
    "category": "One-Year Retention (freshman)",
    "subcategory": "returned in Fall 2016",
    "position": "left",
    "percentage": 97,
	"header": "Of every 100 students who started as freshman entrants in Fall 2015..."
  },
  {
    "category": "One-Year Retention (freshman)",
    "subcategory": "all other",
    "position": "right",
    "percentage": 3,
	"header": "Of every 100 students who started as freshman entrants in Fall 2015..."
  }
 ]

 //there were two sets of icon vectors, one male and one female
 //replace with a new icon with no gender
 //icon created by William Dayabaran, obtained from the Noun Project
 
 let peopleIcons = [
    {
      "part1": "M23.097,14.939c4.119,0,7.47-3.351,7.47-7.469c0-4.119-3.351-7.47-7.47-7.47c-4.118,0-7.469,3.351-7.469,7.47  C15.628,11.588,18.979,14.939,23.097,14.939z",
      "part2": "M46.077,83.105l-20.659-40.92L43.776,5.821c0.498-0.986,0.103-2.189-0.884-2.687c-0.987-0.5-2.189-0.101-2.687,0.884  l-3.82,7.567c-3.823,6.866-7.948,10.385-12.261,10.46c-0.049,0.001-0.097,0.001-0.145,0.001c-7.334,0-13.514-9.668-14.018-10.478  L6.087,3.895c-0.498-0.985-1.699-1.38-2.687-0.884C2.416,3.508,2.019,4.711,2.517,5.697l18.42,36.488L0.215,83.23  c-0.498,0.986-0.103,2.189,0.884,2.688c0.289,0.146,0.597,0.215,0.9,0.215c0.73,0,1.435-0.402,1.786-1.1l5.598-11.088  c0.214-0.152,0.401-0.352,0.546-0.592c1.766-2.945,7.713-10.533,14.058-10.533c0.043,0,0.086,0,0.129,0.002  c4.318,0.07,8.449,3.594,12.277,10.475c0.143,0.256,0.342,0.453,0.563,0.615l5.551,10.996c0.352,0.697,1.056,1.1,1.787,1.1  c0.303,0,0.61-0.068,0.899-0.215C46.179,85.295,46.575,84.092,46.077,83.105z"  
    },
    /* {
      "part1": "m 46.004,21.672 c 5.975,0 10.836,-4.861 10.836,-10.836 C 56.84,4.861 51.979,0 46.004,0 40.029,0 35.169,4.861 35.169,10.836 c 0,5.975 4.86,10.836 10.835,10.836 z",
      "part2": "M 68.074,54.008 59.296,26.81 C 58.826,25.354 57.26,24.214 55.73,24.214 H 54.418 53.48 38.526 37.588 36.276 c -1.53,0 -3.096,1.14 -3.566,2.596 l -8.776,27.198 c -0.26,0.807 -0.152,1.623 0.297,2.24 0.449,0.617 1.193,0.971 2.041,0.971 h 2.25 c 1.53,0 3.096,-1.14 3.566,-2.596 l 2.5,-7.75 v 10.466 0.503 29.166 c 0,2.757 2.243,5 5,5 h 0.352 c 2.757,0 5,-2.243 5,-5 V 60.842 h 2.127 v 26.166 c 0,2.757 2.243,5 5,5 h 0.352 c 2.757,0 5,-2.243 5,-5 V 57.842 57.339 46.869 l 2.502,7.754 c 0.47,1.456 2.036,2.596 3.566,2.596 h 2.25 c 0.848,0 1.591,-0.354 2.041,-0.971 0.45,-0.617 0.556,-1.433 0.296,-2.24 z"  
    },
	{
      "part1": "m 49.437,19.672 c 5.424,0 9.836,-4.413 9.836,-9.836 C 59.273,4.413 54.861,0 49.437,0 c -5.423,0 -9.835,4.413 -9.835,9.836 0,5.423 4.411,9.836 9.835,9.836 z",
      "part2": "M 71.508,52.416 62.73,25.217 c -0.47,-1.456 -2.037,-2.596 -3.566,-2.596 h -2.127 c -0.031,0 -0.059,0.009 -0.09,0.01 -0.032,-0.001 -0.062,-0.01 -0.094,-0.01 h -14.83 c -0.058,0 -0.112,0.014 -0.169,0.017 -0.055,-0.003 -0.106,-0.017 -0.161,-0.017 h -1.654 c -1.53,0 -3.096,1.14 -3.566,2.596 l -8.777,27.198 c -0.26,0.807 -0.152,1.623 0.297,2.24 0.449,0.617 1.193,0.971 2.041,0.971 h 1.38 c 1.526,0 3.098,-1.135 3.579,-2.584 l 4.031,-12.159 v 6.562 c -0.678,0.403 -1.265,0.954 -1.616,1.572 l -6.617,11.684 c -0.414,0.73 -0.478,1.553 -0.175,2.258 0.302,0.705 0.942,1.226 1.757,1.43 l 7.232,1.809 v 29.005 c 0,2.206 1.794,4 4,4 h 0.976 c 2.206,0 4,-1.794 4,-4 V 68.348 c 0.34,0.033 0.699,0.052 1.069,0.052 0.472,0 0.925,-0.03 1.344,-0.083 v 26.886 c 0,2.206 1.794,4 4,4 h 0.976 c 2.206,0 4,-1.794 4,-4 V 66.08 l 6.542,-1.68 c 0.812,-0.208 1.45,-0.733 1.75,-1.44 0.3,-0.707 0.236,-1.53 -0.177,-2.259 L 61.468,49.017 C 61.118,48.398 60.53,47.848 59.852,47.445 V 40.56 l 4.336,12.505 c 0.499,1.437 2.08,2.562 3.6,2.562 h 1.382 c 0.848,0 1.591,-0.354 2.041,-0.971 0.449,-0.617 0.557,-1.434 0.297,-2.24 z"  
    }, */
 ]