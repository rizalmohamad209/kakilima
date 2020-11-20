import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'


export class TargetPie extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        
          series: [260, 100],
          options: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Sukse', 'Gagal'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: 'right'
                }
              }
            }]
          },
        
        
        };
      }
    
    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>
        )
    }
}

export default TargetPie
