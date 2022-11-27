import { AfterViewInit, Component, Inject, OnInit, TemplateRef, ViewChild, ViewContainerRef  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BILL } from '../bill.const';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})
export class BillDetailComponent implements OnInit  {
    // @ts-ignore
    selectedBill : BILL;
    pdfDisplay=true;
     totalBill = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: BILL,
    private _dialog: MatDialog,
    private vref:ViewContainerRef,
  ) { }
  ngOnInit(): void {
    this.selectedBill = this.data;
    this.selectedBill.foods.forEach((food)=>{
      this.totalBill += food.price
    })
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      console.log(canvas);
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.output('dataurlnewwindow');
    });
  }
}

