import React from "react";
import {Chart} from "react-google-charts";

class HeatMap extends React.Component{

   render() {
       const mp={};
       for(var i=0;i<this.props.data.length;i++){
            var date = new Date(this.props.data[i].creationTimeSeconds * 1000); // submission date
            date.setHours(0, 0, 0, 0);
           if(this.props.data[i].verdict==="OK"){
                if (mp[date.valueOf()] === undefined) mp[date.valueOf()] = 1;
                else mp[date.valueOf()]++;
           }
         }
        const data=[[{ type: 'date', id: 'Date' }, { type: 'number', id: "Submissions"  }]];
        for(var x in mp ) {
            data.push([new Date(parseInt(x)),mp[x]]);
        }
        var y=0,a=0,b=0;
        if(this.props.data.length>0){
            a=new Date(this.props.data[0].creationTimeSeconds * 1000).getYear();
        }
        if(this.props.data.length>0){
            b=new Date(this.props.data[this.props.data.length-1].creationTimeSeconds * 1000).getYear();
        }
        y=a-b;
        y=Math.abs(y) + 1;
       return(
           <div>
               {this.props.data.length>0&&
                   <Chart
                      width={"100%"}
                      height={y*140+30}
                      className="center col s12 z-depth-2"
                      chartType="Calendar"
                      // loader={<div>Loading Chart</div>}
                       style={{overflow:"auto"}}
                      data={
                        data
                      }
                      options={{
                          colorAxis: {
                              minValue: 0,
                              colors: ['#ffffff', '#0027ff', '#00127d']
                            },
                            calendar: {
                              cellSize: 15
                            },
                            title: 'Submissions HeatMap of '+this.props.user,
                      }}
                      // rootProps={{ 'data-testid': '1' }}
                    />
               }
           </div>
       )
   }

}
export default HeatMap