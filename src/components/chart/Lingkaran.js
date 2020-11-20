import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'



export class Lingkaran extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Bintang 1', 'Bintang 2', 'Bintang 3', 'Bintang 4', 'Bintang 5'],
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

export default Lingkaran
