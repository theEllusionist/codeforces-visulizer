import React from "react";
import {Chart} from "react-google-charts";

class Levels extends React.Component{

    render() {
        const prob={
        };
        for(var i=0;i<this.props.data.length;i++){
            const str= this.props.data[i].problem.index.charAt(0);
            if(this.props.data[i].verdict==="OK") {
                if(prob[str]===undefined) {
                    prob[str]=1;
                }
                else ++prob[str];
            }
        }
         var titleTextStyle = {
          fontSize: 18,
          color: '#393939',
          bold: false
        };

        const data = [["Level","Count"]];
        const d=[]
        for (var x in prob) {
            d.push([x,prob[x]])
        }
        d.sort();

        for(i=0;i<d.length;i++){
            data.push(d[i])
        }

        // console.log(data)
        const len = this.props.data.length;
        return(
            <div>
                {len > 0 &&
                    <Chart
                          width={'100%'}
                          height={'300px'}
                          className="center col s12 z-depth-2"
                          chartType="Bar"
                          data={data}
                          style={{paddingTop:20}}
                          options={{
                              chartArea:{
                                            width: '100%',
                                            height: '350',
                                            },
                                // Material design options
                                chart: {
                                    title: 'Levels of '+ this.props.user,
                                    // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                    legend:"none",
                                        },
                                bar: { groupWidth: '95%' },
                                legend: { position: 'none' },
                              fontName: 'Roboto',
                            titleTextStyle: titleTextStyle,
                            vAxis: { format: '0' },

                          }}

                    />
                }
            </div>
        )
    }

}
export default Levels