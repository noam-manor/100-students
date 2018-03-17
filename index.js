/* Copyright 2017 Tom Shanley
forked from http://blockbuilder.org/tomshanley/a94a879c8d28e302ac2b89228f9bd1f7
by Tom Shanley 

person icon created by William Dayabaran, obtained from the Noun Project, https://thenounproject.com/search/?q=human%20figure&i=350163
*/

const width = 920
const height = 440
const margin = { top: 10, bottom: 10, left: 10, right: 10 }
const radius = 10;
const gap = 3;

const noOfDots = 100

let selectedCategory = "Female"

let nestedData = d3
  .nest()
  //.key(function (d) {return d.category }).sortKeys(d3.ascending)
  .key(function (d) {return d.category })
  .sortValues(function(a,b) { return a.sort - b.sort; } ) //added this to sort by the "sort" field in the data
  .entries(data)

/* console.log(nestedData) */

/* const select = d3.select('#select-div')
.append('select')
.attr('id', 'category-select')

select
  .selectAll('option')
  .data(nestedData)
  .enter()
  .append('option')
  .attr('value', function (d) {
    return d.key
  })
  .text(function (d) {
    return d.key
  }) */

let positions = ["left", "right"]

function  dispatchButton(buttonselection) {
        selectedCategory = buttonselection;
		update()
    }
/* 
select.on("change", function (d) {
      selectedCategory = d3.select(this).property("value");
      update()
  })
 */
let colour = d3.scaleOrdinal()
  .range(["#3B7EA1", "#FDB515"])
  .domain(positions)

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

const g = svg
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

let nodes = []

let xScale = d3.scalePoint()
    .range([0, width])
    .domain(positions)
    .padding(0.5)


//changed this so that if the number is smaller in the right group it wouldn't drop one person	
for (var i = 0; i < noOfDots; i++) {
//for (var i = 0; i < noOfDots - 1; i++) {
  node = {};
  nestedData.forEach(function (d) {
    node[d.key] = i < d.values[0].percentage ? d.values[0].position : d.values[1].position
  })
  nodes.push(node)
}

var simulation = d3
  .forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(5))
  .force('x', d3.forceX().x(function (d) {
      return xScale(d[selectedCategory])
    })
  )
  .force('y', d3.forceY().y((height/2) + 10))
  .force('collision', d3.forceCollide().radius(function (d) {
      return radius + gap
    })
  )
  .stop()

runSimulation()

let nestByPosition = d3.nest()
    .key(function (d) {
        return d.position
    })
    .sortKeys(d3.ascending)
    .entries(data)

var title = g.append("g")
    .attr("class", "title")
    .selectAll("text")
    .data(nestByPosition)
    .enter()
    .append("g")
    .attr("transform", function(d) {
        return  "translate(" + width/2 + "," + 250 + ")";
    }) 


title.append("text")
    .attr("class", "title")
    	.attr("y", -220)
	.attr("font-family", "Indie Flower")
    .style("fill", "#00B0DA")
	.text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].header
    })
	
var labels = g.append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(nestByPosition)
    .enter()
    .append("g")
    .attr("transform", function(d) {
        return  "translate(" + xScale(d.key) + "," + 50 + ")";
    }) 


labels.append("text")
    .attr("class", "label label-subcategory")
    .attr("y", 38)
    .style("fill", function(d){
        return colour(d.key)
    })
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].subcategory
    })

labels.append("text")
    .attr("class", "label label-percentage")
	.attr("y", 22)
    .style("font-weight", "bold")
    .style("fill", function(d){
        return colour(d.key)
    })
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].percentage
		//return d.values[index].percentage + "%"
    })

//updateHeadlineText()

var people = g.append("g")
    .attr("class", "people")
    .selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .attr("transform", function(d, i){
        return "translate(" + d.x + "," + d.y + ") scale(0.2)";
    })
    .style("opacity", function(d){
        return (Math.random() / 2) + 0.5
    })
    .style('fill', function (d) {
        return colour(d[selectedCategory]) })

 people.append("path")
    .attr("d", function(d,i){
        return peopleIcons[(i % 1)].part1
		//return peopleIcons[(i % 2)].part1 this was used to draw two icons, male and female
    })

people.append("path")
    .attr("d", function(d,i){
        return peopleIcons[(i % 1)].part2
		//return peopleIcons[(i % 2)].part2 this was used to draw two icons, male and female
    }) 
/*     
people.append("svg:image")
    .attr("xlink:href", function(d, i ){
        let filename = "person" + ((i % 2) + 1) + ".svg"
        return filename;
    })
    .attr("width", 20)
    .attr("height", 20)
    .style("opacity", function(d){
        return (Math.random() / 2) + 0.4
    })
    .style('fill', function (d) {
        return colour(d[selectedCategory]) })


 var circles = g.append("g")
    .attr("class", "circles")
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', radius)
    .style('fill', function (d) {
        return colour(d[selectedCategory]) })
    .attr('cx', function (d) {
        return d.x
    })
    .attr('cy', function (d) {
        return d.y
    }) */


function update() {

    simulation.force('x', d3.forceX().x(function (d) {
        return xScale(d[selectedCategory])
      })
    )

    simulation.alpha(1)
    runSimulation()

	
	

//remove title

	title.selectAll(".title")
	.style("opacity", 0)

//fade in title and update text - synchronize with the appearance of the dots, which have a delay specified. 
	
	title.selectAll(".title").transition()
	.duration(2000)
	.delay(function(d, i){
		return i * 5
	})
	.style("opacity", 1)
	.text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].header
    })


//remove labels
	
	labels.selectAll(".label-subcategory")
	.style("opacity", 0)
	
	labels.selectAll(".label-percentage")
	.style("opacity", 0)

//fade in labels and update text - synchronize with the appearance of the dots, which have a delay specified. 
	
    labels.selectAll(".label-subcategory").transition()
	.duration(2000)
	.delay(function(d, i){
		return i * 5
	})
	.style("opacity", 1)
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].subcategory
    })

    labels.selectAll(".label-percentage").transition()
	.duration(2000)
	.delay(function(d, i){
		return i * 5
	})
	.style("opacity", 1)
    .text(function(d){
        let index = d.values.findIndex(findCategory)
        return d.values[index].percentage
		//return d.values[index].percentage + "%"
    })

    // updateHeadlineText()

    people.transition()
        .duration(1000)
        .delay(function(d, i){
            return i * 5
        })
        .attr("transform", function(d){
            return "translate(" + d.x + "," + d.y + ") scale(0.2)";
        })
        .style('fill', function (d) {
            return colour(d[selectedCategory]) })
        /*.attr('cx', function (d) {
            return d.x
          })
        .attr('cy', function (d) {
            return d.y
          })
        .style('fill', function (d) {
            return colour(d[selectedCategory]) })*/

}

function runSimulation() {
    for (var i = 0; i < 120; i++) {
        simulation.tick()
    }
};

function findCategory(d) {
    return d.category == selectedCategory
};



