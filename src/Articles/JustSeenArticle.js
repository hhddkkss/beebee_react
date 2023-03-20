import React,{useState} from 'react'


export const getLocalJustSeen=(Aid,Apic,Atitle,Memail,Mpic)=>{
    let local = JSON.parse(localStorage.getItem('beebeejustSeenList'))
    if(!!local){
        local = local.filter((v,i)=>{
            return v.article_id!==Aid
        })

        
        if(local.length>=5){
             local= local.slice(0,4)
        }
        let newLocal= [{
            article_id:Aid,
            article_pic_main:Apic,
            title:Atitle,
            email:Memail,
            member_pic:Mpic
        },...local]
        localStorage.setItem('beebeejustSeenList',JSON.stringify(newLocal))
    }else{
        let newLocal= [{
            article_id:Aid,
            article_pic_main:Apic,
            title:Atitle,
            email:Memail,
            member_pic:Mpic
        }]
        localStorage.setItem('beebeejustSeenList',JSON.stringify(newLocal))
    }

}




 