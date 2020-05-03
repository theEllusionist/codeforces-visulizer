import React from "react";
import {Chart} from "react-google-charts";

class ProblemRating extends React.Component{

    render() {
        const prob={
            "400":0,
            "500":0,
            "600":0,
            "700":0,
            "800":0,
            "900":0,
            "1000":0,
            "1100":0,
            "1200":0,
            "1300":0,
            "1400":0,
            "1500":0,
            "1600":0,
            "1700":0,
            "1800":0,
            "1900":0,
            "2000":0,
            "2100":0,
            "2200":0,
            "2300":0,
            "2400":0,
            "2500":0,
            "2600":0,
            "2700":0,
            "2800":0,
            "2900":0,
            "3000":0,
            "3100":0,
            "3200":0,
            "3300":0,
            "3400":0,
            "3500":0,
            "3600":0,
            "3700":0,
            "3800":0,
            "3900":0,
            "4000":0,
        };
         var titleTextStyle = {
          fontSize: 18,
          color: '#393939',
          bold: false
        };
        for(var i=0;i<this.props.data.length;i++){
            const str= this.props.data[i].problem.rating;
            if(this.props.data[i].verdict==="OK") {
               if(str!==undefined){
                    if(prob[str]===undefined) {
                    prob[str]=1;
                }
                    else ++prob[str];
               }
            }
        }

        const data = [["Rating","Count"]];
        // const d=[]
        for (var x in prob) {
            data.push([x,prob[x]])
        }
        const len = this.props.data.length;
        return(
            <div>
                {len > 0 &&
                    <Chart
                          width={'100%'}
                          height={'300px'}
                          className="center col s12 z-depth-2"
                          chartType="Bar"
                          style={{paddingTop:20}}
                          data={data}
                          options={{
                              chartArea:{
                                            width: '100%',
                                            height: '350',
                                            },
                                // Material design options
                                chart: {
                                    title: 'Problem ratings of '+ this.props.user,
                                    // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                    legend:"none",
                                        },
                                bar: { groupWidth: '95%' },
                                legend: { position: 'none' },
                              titleTextStyle: titleTextStyle,

                          }}

                    />
                }
            </div>
        )
    }

}
export default ProblemRating