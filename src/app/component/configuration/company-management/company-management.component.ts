import { Company } from './../../../shared/domain/model/company';
import { CompanyService } from './../../../shared/service/configuration-service/company.service';
/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:24:56 
 * @Last Modified by:   Supun Dharmarathne 
 * @Last Modified time: 2017-04-03 16:24:56 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})
export class CompanyManagementComponent implements OnInit {

  companyList : Company[] = [];
  constructor(private companyService :CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(
      (response)=>{
        this.companyList = Company.fromJsonArray(response);
      }
    );
  }

}
