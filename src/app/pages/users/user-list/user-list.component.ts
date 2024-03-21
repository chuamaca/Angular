import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersService } from 'src/app/services/players.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Player } from 'src/app/commons/interfaces/player.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit{
 

  _playerService = inject(PlayersService);
  players$!:Observable<Player[]>

  searcher = new FormControl('');


  ngOnInit(){
    this._playerService.getPLayer().subscribe(res=> console.log(res));

    this.players$ = this._playerService.getPLayer();
    
    this.searcher.valueChanges.subscribe(search => {
        if(search){
          this.players$ = this._playerService.getPLayer(search);
        }else{
          this.players$ = this._playerService.getPLayer();
        }
    });
  }
}
