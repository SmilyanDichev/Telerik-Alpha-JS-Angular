import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatFormField, MatTableDataSource } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LinkService } from '../../../../../core/link/link.service';
import { Link } from '../../../../../shared/models/link/link';
import { AuthService } from './../../../../../core/auth/auth.service';
import { AddLinkComponent } from './../../../../../shared/modules/popups/add-link/add-link.component';
import { ConfirmComponent } from './../../../../../shared/modules/popups/confirm/confirm.component';
import { EditLinkComponent } from './../../../../../shared/modules/popups/edit-link/edit-link.component';

@Component({
  selector: 'admin-links-table',
  templateUrl: './admin-links-table.component.html',
  styleUrls: ['./admin-links-table.component.css'],
})
export class AdminLinksTableComponent implements OnInit {

public editLinkComponentRef: MatDialogRef<EditLinkComponent>;
public confirmComponentRef: MatDialogRef<ConfirmComponent>;

private linksData: object[];
private displayedColumns = ['id', 'name', 'target', 'iconLink', 'createdAt', 'actions'];
private dataSource;
private currentUserEmail: string;

constructor(private dialog: MatDialog,
            private authService: AuthService,
            public toastr: ToastrService,
            private linkService: LinkService) {
}

public ngOnInit(): void {
  this.currentUserEmail = this.authService.getCurrentUserEmail();
  this.getLinks();
  }

public editLinkModal(linkId: number): void {
    console.log('Edit-link Modal Opened!');
    this.editLinkComponentRef = this.dialog.open(EditLinkComponent);
    this.editLinkComponentRef
      .afterClosed()
      .subscribe((linkObj) => {
        // const convertedLinks = this.linkService.linkObjectConverter(linkObj);
        // console.log('Sending link edit to LinksService!', linkObj);
        this.linkService.editLink(linkObj)
          .subscribe(
               (reply) => {
              console.log('Link Edit request succesful! ', reply);
              this.toastr.success(`${linkObj.name} updated!`, 'Success');
            }, (error) => {
              console.log('Sending updated link data to LinkService failed!', error, linkObj);
               },
          );
      });
    }

public confirm(linkId: number): void {
    this.confirmComponentRef = this.dialog.open(ConfirmComponent);
    this.confirmComponentRef
      .afterClosed()
      .subscribe((permission) => {
        if (permission === true) {
        this.linkService.deleteLink(linkId).subscribe(
               (res) => {
              console.log('Link Deleted Succesfully!');
            }, (error) => {
              console.log('Deletion Request Failed', error);
            },
        );
      }
      });
    }

private getLinks(): void {
  this.linkService.getLinks().subscribe(
    (res: Link[]) => {
      const convertedLinks = this.linkService.linkObjectConverter(res);
      this.dataSource = new MatTableDataSource(convertedLinks);
      console.log('Link data from linkService received!', convertedLinks);
    },
    (error: HttpErrorResponse) => {
      console.log('Link data from linkService FAILED!', error);
    });
}

}

export interface ILink {
  id: number;
  name: string;
  createdAt: string;
  target: string;
  iconLink: string;
}
