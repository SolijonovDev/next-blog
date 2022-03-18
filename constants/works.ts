import photo from '../utilits/work1.png'
import photo2 from '../utilits/work2.png'
import photo3 from '../utilits/work3.png'

interface IWorks{
    id:number;
    img:any;
    name:string;
    year:string | number | undefined;
    skill:string | number | undefined | null;
    title:string | undefined | null;
    href?:string;
}

export const works:IWorks[]=[
    {
        id:1,
        img:photo,
        name:"Designing Dashboards",
        year:"2020",
        skill:"Dashboard",
        title:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        href:"#"
    },
    {
        id:2,
        img:photo2,
        name:"Vibrant Portraits of 2020",
        year:"2018",
        skill:"Illustration",
        title:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        href:"#"
    },
    {
        id:3,
        img:photo3,
        name:"36 Days of Malayalam type",
        year:"2018",
        skill:"Typography",
        title:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        href:"#"
    }
]