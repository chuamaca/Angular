import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, query, where } from '@angular/fire/firestore'
import {collection} from '@firebase/firestore'
import { Player } from '../commons/interfaces/player.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private firestore : Firestore) { }

    addPlayer(player : Player) {
      const playerRef = collection(this.firestore,'players');
      return addDoc(playerRef, player)
    }

    getPLayer(filter =''){
      const playerRef= collection(this.firestore,'players');
      let q=query(playerRef);
      if (filter){
        q=query(playerRef,where('name','==',filter));
      }
      return collectionData(q) as unknown as Observable<Player[]>;


    }
}
