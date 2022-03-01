(function(){

    var data = [{x: 0, y: 20}, {x: 150, y: 150}, {x: 300, y: 100}, {x: 450, y: 20}, {x: 600, y: 130}]
    let line_chart_instance = d3.select('#container_line_chart')
                                .append('svg')
                                .attr('width',300)
                                .attr('height',200)

    let lineFunc = d3.svg.line()
                     .x(function(d) {return d.x})
                     .y(function(d){ return d.y})

    line_chart_instance.append('path')
                       .attr('d',lineFunc(data))
                       .attr('stroke','black')
                       .attr('fill','none')                 
})()