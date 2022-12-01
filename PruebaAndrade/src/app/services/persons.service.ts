import { Injectable } from '@angular/core';
import { Person } from '../domain/person';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  lstPersons = new Array()
  persons:any;

  private personsCollection: AngularFirestoreCollection<Person>;

  constructor(private afs: AngularFirestore) {
    this.personsCollection = afs.collection<Person>('personas');
  }

  getPerson(){
    return this.lstPersons;
  }

  getPersonFire(){
    return this.personsCollection.valueChanges();
  }

  deletePersonsFire(persons: Person){
    this.personsCollection.doc<Person>(persons.uid).delete();
    removed: this.personsCollection;
  }
}
