
interface IPosts{
    id:number;
    name:string;
    text:string | null;
    data:string | number | null | undefined;
    title:string | null;
}

export const posts:IPosts[]=[
    {
        id:1,
        name:"Making a design system from scratch",
        data:"12 Feb 2020",
        text:"Design, Pattern",
        title:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
    ,
    {
        id:2,
        name:"Creating pixel perfect icons in Figma",
        data:"12 Feb 2020",
        text:"Figma, Icon Design",
        title:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
]