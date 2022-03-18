import fc from '../utilits/fb.svg'
import ins from '../utilits/ins.svg'
import twt from '../utilits/twt.svg';
import lin from '../utilits/in.svg';

interface INetwork{
    id:number;
    icon:any;
    href:string;
}

export const network:INetwork[]=[
    {
      id:1,
      icon:fc,
      href:"https://www.facebook.com/"
    },
    {
        id:2,
        icon:ins,
        href:"https://www.instagram.com/"
    },
    {
        id:3,
        icon:twt,
        href:"https://www.twitter.com/"
    },
    {
        id:4,
        icon:lin,
        href:"https://www.linkedin.com/in/qodirjon-solijonov-869ba8219/"
    }
]