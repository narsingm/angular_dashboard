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
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['id', 'name', 'role', 'status', 'actions'];
  dataSource = ELEMENT_DATA;

  stats = [
    { title: 'Total Users', value: '1,245', icon: 'people', color: '#1976d2' },
    { title: 'Revenue', value: '$34,500', icon: 'attach_money', color: '#388e3c' },
    { title: 'Issues', value: '12', icon: 'bug_report', color: '#d32f2f' },
    { title: 'Active Sessions', value: '142', icon: 'timeline', color: '#f57c00' }
  ];
}
