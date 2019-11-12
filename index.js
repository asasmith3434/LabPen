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
        
        
        var firstPerson= function(data,day)
        {
            var obj= {}
            obj.x= day
            obj.y= data.quizes[d].grade
            return obj
         
           }
    
 var AllQuizes = data.map(firstPerson)
    
   
 
 var xScale = THEXScale(AllQuizes)
    var  yScale = THEYScale(AllQuizes)
        drawpoints(AllQuizes, xScale, yScale)
 
 })
        
        
        
        
       
        

}













var screen={width:800,height:800}

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
    .attr("cx",function(d){return xScale(d.x)})
    .attr("cy",function(d){return yScale(d.y)})
    .attr("r",12)
    .attr("fill", function(d){ return "blue"})
    
}


















var THEXScale = function(data)
{
var xScale=
d3.scaleLinear()
 xScale.domain(
 [
     d3.min(data,function(d){return d.x}),
     d3.max(data,function(d){return d.x})
 ]
 )
xScale.range([100,screen.width-50])

 return xScale
}











var THEYScale = function(data)
{
var yScale=
d3.scaleLinear()
 yScale.domain(
 [
    d3.min(data,function(d){return d.y}),
     d3.max(data,function(d){return d.y})
 ]
 )
yScale.range([100,screen.height-400])
return yScale
    
}
