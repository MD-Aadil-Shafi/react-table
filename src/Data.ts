type NameType = {
    id:number;
    title:String;
  }
  
 export interface DataType{
    id:number;
    title:string;
    subRows:NameType[];
  }
  
 export const egData = [
    {
      id:1,
      title:'Super Man',
      subRows:[
        {
          id:1,
          title:'Clark Kent'
        },
      ],
    },
    {
      id:2,
      title:'Bat Man',
      subRows:[
        {
          id:1,
          title:'Bruce Wayne'
        },
      ],
    },
    {
      id:3,
      title:'Ant Man',
      subRows:[
        {
          id:1,
          title:'Scott Lang'
        },
      ],
    },
    {
      id:4,
      title:'Wonder Women',
      subRows:[
        {
          id:1,
          title:'Diana Prince'
        },
      ],
    },
    {
      id:5,
      title:'Flash',
      subRows:[
        {
          id:1,
          title:'Barry Alan'
        },
      ],
    },
  ]