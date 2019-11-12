var penpromise= d3.json("classData.json")


//var working= function(data)
penpromise.then(function(data)
{
    
   allthedays(data)
    console.log(data)
    
    
}),

function(error)
{
    console.log("negative ghost rider")
}

 

var allthedays= function(data){

 var eachday= 
    d3.range(37)
    d3.select(".nope")
    .selectAll("span")
        .data(eachday)
        .enter()
        .append("span")
        .append("button")
        .text(function(d) {return d})
        .on("click", function(d){
        
        
        var firstPerson= function(p,day)
        {
            
           var x = day
           var y = p.quizes[d].grade
    
            return  { x:x, y:y}   }
    
 var AllQuizes = data.map(firstPerson)
    
         var xScale = THEXScale(AllQuizes)
        var  yScale = THEYScale(AllQuizes)
        drawpoints(AllQuizes, xScale, yScale)
 
 })
        
        
        
        
       
        

}













var screen={width:1000,height:1000}

var drawpoints=function(AllQuizes, xScale, yScale)
{
    
    d3.selectAll("svg *")
    .remove()
    d3.select("svg")
    .attr("height",screen.height)
    .attr("width",screen.width)
    
 
    
    d3.select('svg')
    .selectAll("circle")
    .data(AllQuizes)
    .enter()
    .append("circle")
    .attr("cx",function(p){return xScale(p.x)})
    .attr("cy",function(p){return yScale(p.y)})
    .attr("r",12)
    
}


















var THEXScale = function(data)
{
var xScale=
d3.scaleLinear()
 xScale.domain(
 [
     d3.min(data,function(p){return p.x}),
     d3.max(data,function(p){return p.x})
 ]
 )
xScale.range([0,screen.width])

 return xScale
}











var THEYScale = function(data)
{
var yScale=
d3.scaleLinear()
 yScale.domain(
 [
    d3.min(data,function(p){return p.y}),
     d3.max(data,function(p){return p.y})
 ]
 )
yScale.range([0,screen.height])
return yScale
    
}
