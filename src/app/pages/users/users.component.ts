import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  role: string;
  status: string;
}

const ELEMENT_DATA: UserData[] = [
  {id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active'},
  {id: 2, name: 'Bob Smith', role: 'Editor', status: 'Active'},
  {id: 3, name: 'Charlie Davis', role: 'Viewer', status: 'Inactive'},
  {id: 4, name: 'Diana Evans', role: 'Editor', status: 'Active'},
];

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'role', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
}
