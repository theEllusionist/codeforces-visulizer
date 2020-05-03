import React from "react";
import Chart from "react-google-charts";

class LanguageChart extends React.Component{

    render() {
        const lang ={
        }
        for(var i=0;i<this.props.data.length;i++){
            if (lang[this.props.data[i].programmingLanguage] === undefined)
                    lang[this.props.data[i].programmingLanguage]=1
        else lang[this.props.data[i].programmingLanguage]++;
        }
        const data = [['Task','Stats']]

        for (var x in lang) {
            data.push([x,lang[x]])
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
        const len = this.props.data.length
        const title = 'Languages of the '+this.props.user;
        return(
            <div>
            {len>0 &&
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        className="col s12 m6 l6 z-depth-2"
                        chartType="PieChart"
                        // style={{paddingTop:20}}
                        data = {data}
                        options={{
                            chartArea:{
                            width: '100%',
                            height: '350',
                            },
                            fontName: 'Roboto',
                            title: title,
                            legend: 'none',
                            pieSliceText: 'label',
                            titleTextStyle: titleTextStyle,
                            slices: colors,
                            is3D: true,
                        }}
                        rootProps={{'data-testid': '3'}}
                    />
            }
            </div>
        )
    }

}
export default LanguageChart