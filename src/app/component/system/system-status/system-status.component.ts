import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})
export class SystemStatusComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  private barChartbackgroundColor: any[] = [{
    backgroundColor: '#f49b42',
    borderColor: '#1D871B'
  }, { // grey
    backgroundColor: '#83b9f7',
    borderColor: '#555'
  }]

  // Pie
  public pieChartLabels:string[] = ['Single Instance', 'Duplicates'];
  public pieChartData:number[] = [500, 100];
  public pieChartType:string = 'pie';
  public pieChartColor:any[] = [
    {     backgroundColor: [
                "#f2bb80",
                "#36A2EB"  ]},
            {
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
