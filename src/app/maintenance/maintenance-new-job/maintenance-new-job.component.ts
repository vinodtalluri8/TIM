import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-maintenance-new-job',
  templateUrl: './maintenance-new-job.component.html',
  styleUrls: ['./maintenance-new-job.component.css']
})
export class MaintenanceNewJobComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  jobName;
  target;
  technicalDl;
  problemSolving;
  technicalName;
  errorLogFile;
  classification;
  description;
  system;
  priority;
  status;
  selectedSource;
  businessDl;
  dimension;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
    this.itemsPath = [
      { label: 'Maintenance'},
      {  label: 'New Job'
      }
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


  disable() {
    if (!this.jobName || !this.target || !this.technicalDl || !this.problemSolving || !this.technicalName || !this.errorLogFile || !this.classification || !this.description || !this.system || !this.priority || !this.status || !this.selectedSource || !this.businessDl || !this.dimension) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'jobName' : this.jobName,
        'target' : this.target,
        'technicalDl' : this.technicalDl,
        'problemSolving' : this.problemSolving,
        'technicalName' : this.technicalName,
        'errorLogFile' : this.errorLogFile,
        'classification' : this.classification,
        'description' : this.description,
        'system' : this.system,
        'priority' : this.priority,
        'status' : this.status,
        'selectedSource' : this.selectedSource,
        'businessDl' : this.businessDl,
        'dimension' : this.dimension
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
    this.jobName = '';
    this.target = '';
    this.technicalDl = '';
    this.problemSolving = '';
    this.technicalName = '';
    this.errorLogFile = '';
    this.classification = '';
    this.description = '';
    this.system = '';
    this.priority = '';
    this.status = '';
    this.selectedSource = [];
    this.businessDl = '';
    this.dimension = '';
  }

}
