import {Component,Input,Output,EventEmitter} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector :'multi-selector-dropdown',
    templateUrl :'./multiSelectDropdown.html',
    styleUrls : ['./multiSelectDropdown.css']
})

export class MultiSelectDropdown{
    @Input() list:any = []; 
    
    @Output() shareCheckedList = new EventEmitter();
    @Output() shareIndividualCheckedList = new EventEmitter();
    
    
    checkedList : any = [];
    currentSelected : any = {};
    showDropDown: boolean = false;

    constructor(){
        this.checkedList = [];
    }

    getSelectedValue(status:Boolean,value:String){
        if(status){
          this.checkedList.push(value);  
        }
        else{
            const index = this.checkedList.indexOf(value);
            this.checkedList.splice(index, 1);
        }
        
        this.currentSelected = {checked : status,name:value};

        //share checked list
        this.shareCheckedlist();
        
        //share individual selected item
        this.shareIndividualStatus();
    }

    shareCheckedlist(){
         this.shareCheckedList.emit(this.checkedList);
    }

    shareIndividualStatus(){
        this.shareIndividualCheckedList.emit(this.currentSelected);
    }
}
