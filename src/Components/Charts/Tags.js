import React from "react";
import Chart from "react-google-charts";

class Tags extends React.Component{

    render() {
        const tags ={

        };
        for(var i=0;i<this.props.data.length;i++){
            if(this.props.data[i].verdict==="OK") {
                for(var j=0; j<this.props.data[i].problem.tags.length;j++){
                    if (tags[this.props.data[i].problem.tags[j]] === undefined)
                    tags[this.props.data[i].problem.tags[j]]=1
                    else tags[this.props.data[i].problem.tags[j]]++;
                }
            }
        }

        const data = [['Tag','Stats']];

        for (var x in tags) {
            data.push([x,tags[x]])
        }
        var colors = [
            '#f44336',
            '#E91E63',
            '#9C27B0',
            '#673AB7',
            '#2196F3',
            '#009688',
            '#8BC34A',
            '#CDDC39',
            '#FFC107',
            '#FF9800',
            '#FF5722',
            '#795548',
            '#607D8B',
            '#E65100',
            '#827717',
            '#004D40',
            '#1A237E',
            '#6200EA',
            '#3F51B5',
            '#F50057',
            '#304FFE',
            '#b71c1c'
          ];
        var titleTextStyle = {
          fontSize: 18,
          color: '#393939',
          bold: false
        };
        const len = this.props.data.length;
        const title = 'Tags of the '+this.props.user;
        return(
            <div>
            {len>0 &&
                    <Chart
                        width={'100%'}
                        height={'500px'}
                        className="col s12 z-depth-2"
                        chartType="PieChart"
                        data = {data}
                        options={{
                            legend: {
                              position: 'right',
                              alignment: 'center',
                              textStyle: {
                                fontSize: 12,
                                fontName: 'Roboto'
                              }
                            },
                            chartArea: { width: '80%', height: '70%' },
                            title: title,
                            pieSliceText: 'label',
                            pieHole:0.5,
                            tooltip: {
                              text: 'percentage'
                            },
                            fontName: 'Roboto',
                            titleTextStyle: titleTextStyle,
                            colors: colors
                        }}
                        rootProps={{'data-testid': '2'}}
                    />
            }
            </div>
        )
    }

}
export default Tags