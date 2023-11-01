import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogBackendDataService {

  constructor(private firestore: AngularFirestore) { }

  loadCategory(){
    return  this.firestore.collection('categories').snapshotChanges().pipe(
      map(data =>{
        return data.map (response =>{
          const data  =  response.payload.doc.data();
          const id = response.payload.doc.id;
          return { id, data}
        })
      })
    )
  }

  loadPost(){
    return  this.firestore.collection('PostsForm', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(data =>{
        return data.map (response =>{
          const data  =  response.payload.doc.data();
          const id = response.payload.doc.id;
          return { id, data}
        })
      })
    )
  }

  loadLatest(){
    return  this.firestore.collection('PostsForm', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(data =>{
        return data.map (response =>{
          const data  =  response.payload.doc.data();
          const id = response.payload.doc.id;
          return { id, data}
        })
      })
    )
  }

  singlePost(id){
    return  this.firestore.collection('PostsForm', ref => ref.where('categorys.categoryId', '==', id)).snapshotChanges().pipe(
      map(data =>{
        return data.map (response =>{
          const data  =  response.payload.doc.data();
          const id = response.payload.doc.id;
          return { id, data}
        })
      })
    )
  }

  singleCategory(id){
    return  this.firestore.collection('PostsForm').doc(id).valueChanges()
     
  }

  similarpostCateogry(id) {
    return  this.firestore.collection('PostsForm', ref => ref.where('categorys.categoryId', '==', id).limit(4)).snapshotChanges().pipe(
      map(data =>{
        return data.map (response =>{
          const data  =  response.payload.doc.data();
          const id = response.payload.doc.id;
          return { id, data}
        })
      })
    )
  }


  subscription(sub){
    this.firestore.collection('Subscription').add(sub).then(()=>{     
    }).catch((err)=>{
      console.log('error! error!! retreat!!! ')
    })
  }

  checkEmail(email){
  return  this.firestore.collection('Subscription', ref => ref.where('email', '==', email)).get()
  }
  }

