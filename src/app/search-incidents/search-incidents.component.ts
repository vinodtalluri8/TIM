import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MockDataService } from "../services/mock-data.service";

@Component({
  selector: 'app-search-incidents',
  templateUrl: './search-incidents.component.html',
  styleUrls: ['./search-incidents.component.css']
})
export class SearchIncidentsComponent implements OnInit {

mockDropDownData;
  mockMultiDropDownData;
  selectedJobName;
  priority;
  jobStatus;
  fromDate;
  selectedSource;
  selectedBusinessDl;
  toDate;
  classification;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
    this.itemsPath = [
      { label: 'Search Incidents'}
      ];
  }

  ngOnInit() {
    this.preloadData();
  }

  preloadData() {
    this.mockService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
    this.mockService.getMultiDropdownData().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }

      changeJobName(event) {
      if (event === 'none') {
        this.selectedJobName = [];
      } else {
        this.selectedJobName = event;
      }
    }

      changeSource(event) {
      if (event === 'none') {
        this.selectedSource = [];
      } else {
        this.selectedSource = event;
      }
    }
      changeBusinessDl(event) {
      if (event === 'none') {
        this.selectedBusinessDl = [];
      } else {
        this.selectedBusinessDl = event;
      }
    }


  disable() {
    if (!this.selectedJobName || !this.priority || !this.jobStatus || !this.fromDate || !this.selectedSource || !this.selectedBusinessDl || !this.toDate || !this.classification) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'selectedJobName' : this.selectedJobName,
        'priority' : this.priority,
        'jobStatus' : this.jobStatus,
        'fromDate' : this.fromDate,
        'selectedSource' : this.selectedSource,
        'selectedBusinessDl' : this.selectedBusinessDl,
        'toDate' : this.toDate,
        'classification' : this.classification
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
  this.selectedJobName = [];
  this.priority = '';
  this.jobStatus = '';
  this.fromDate = new Date();
  this.selectedSource = [];
  this.selectedBusinessDl = [];
  this.toDate = new Date();
  this.classification = '';
  }

}
