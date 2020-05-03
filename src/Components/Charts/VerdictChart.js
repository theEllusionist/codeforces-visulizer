import React from "react";
import Chart from "react-google-charts";

class VerdictChart extends React.Component{

    render() {
        const mp ={
            "OK":0,
            'WRONG_ANSWER':0,
            'TIME_LIMIT_EXCEEDED':0,
            'MEMORY_LIMIT_EXCEEDED':0,
            'RUNTIME_ERROR':0,
            'COMPILATION_ERROR':0,
            'SKIPPED':0,
            'CHALLENGED':0,
            "PARTIAL":0,
            "IDLENESS_LIMIT_EXCEEDED":0,

        };
        for(var i=0;i<this.props.data.length;i++){
            mp[this.props.data[i].verdict]++;
        }
        var verSliceColors = [];
        verSliceColors.push({ color: '#4CAF50' });
        verSliceColors.push({ color: '#f44336' });
        verSliceColors.push({ color: '#2196F3' });
        verSliceColors.push({ color: '#673AB7' });
        verSliceColors.push({ color: '#FF5722' });
        verSliceColors.push({ color: '#607D8B' });
        verSliceColors.push({ color: '#EEEEEE' });
        verSliceColors.push({ color: '#E91E63' });
        verSliceColors.push({});
        var titleTextStyle = {
          fontSize: 18,
          color: '#393939',
          bold: false
        };
        // console.log(mp);
        const len = this.props.data.length;
        return(
            <div>
            {len>0 &&
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        className="col center s12 z-depth-2"
                        // style={{paddingTop:20}}
                        chartType="PieChart"

                        data={[
                            ['Task', 'Stats'],
                            ['WA', mp.WRONG_ANSWER],
                            ['TLE', mp.TIME_LIMIT_EXCEEDED],
                            ['MLE', mp.MEMORY_LIMIT_EXCEEDED],
                            ['AC', mp.OK],
                            ['Partial', mp.PARTIAL],
                            ['ILE', mp.IDLENESS_LIMIT_EXCEEDED],
                            ['RE', mp.RUNTIME_ERROR],
                            ['Sk',mp.SKIPPED],
                            ['C',mp.CHALLENGED],

                        ]}
                        options={{
                            slices: verSliceColors,
                            fontName: 'Roboto',
                            chartArea:{
                            width: '100%',
                            height: '350',
                            },
                            title: 'Verdict of the '+this.props.user,

                            titleTextStyle: titleTextStyle,
                            legend: 'none',
                            pieSliceText: 'label',
                            is3D: true,
                        }}
                        rootProps={{'data-testid': '2'}}
                    />
            }
            </div>
        )
    }

}
export default VerdictChart