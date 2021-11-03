import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { CategoryCard } from "../main/category-cards.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<CategoryCard []>;
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<CategoryCard>('categories').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: CategoryCard [] ) => {
            console.log("data recieved");
            console.log(data);
        })
    }
}