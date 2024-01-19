import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-association-creator',
  standalone: true,
  imports: [ NavComponent ],
  templateUrl: './association-creator.component.html',
  styleUrl: './association-creator.component.scss'
})

export class AssociationCreatorComponent {
  associationData: any = {};

  constructor(
    private api: ApiHelperService,
    private router: Router
  ) {}

  createAssociation(): void {
    this.associationData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      users: (document.getElementById('users') as HTMLInputElement).value
    };

    console.log('Creating association:', this.associationData);

    this.api.post({endpoint:'/associations', data: this.associationData})
      .then(() => {
        console.log('Association created successfully!');
        this.router.navigateByUrl('/associations');
      })
      .catch(error => {
        console.error('An error occurred during association creation:', error);
      });
  }
}