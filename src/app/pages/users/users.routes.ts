import { Component } from "@angular/core"
import { Routes } from "@angular/router"
import { UserListComponent } from "./user-list/user-list.component"
import { UserAddComponent } from "./user-add/user-add.component"
import { UserEditComponent } from "./user-edit/user-edit.component"


export const userRoutes : Routes=[
    {
    path:'',title:'User List',component : UserListComponent
    },
    {
        path:'add',title:'User Add',component: UserAddComponent
    },
    {
        path:'edit',title:'User Edit', component:UserEditComponent
    }   
]