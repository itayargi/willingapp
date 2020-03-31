import React, { Component } from 'react'
import dataFile from '../excel/convertcsv.json'

export default class ReadFromJson extends Component {

    render() {
        
        const findWord = (word)=>{
            return dataFile.find(word)
        }
        const commandSearch=(command)=>{
            
            const dataBase=dataFile;
            const selectedCommand= dataBase.find((item)=>{
                if(item.title==command) return true;
            })
            return selectedCommand;
        }
        const checkifwork= commandSearch("onboarding_01_head")
        return (
            <div>
              {console.log(checkifwork)}
            </div>
        )
    }
}
