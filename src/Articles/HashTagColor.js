export default function HashTagColor(a,i) {
     // hashtag變色

        let ii = parseInt(a)+i
       const colors =[
           '#8fbc8f',
           '#FFD686',
           '#f7a99f',
           '#89b8f5', 
           '#dcc2ed'
       ]
   // const rand = i+ Math.ceil(Math.random()*10)%4
       return colors[ii%5] 
   }
 

