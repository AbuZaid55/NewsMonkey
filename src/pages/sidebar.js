import React ,{useState} from 'react'
import worldflag from './countrylogo/world.png'
import Indiaflag from './countrylogo/download.png'
import Arab_Emiratesflag from './countrylogo/download1.png'
import Argentinaflag from './countrylogo/download2.png'
import Austriaflag from './countrylogo/download3.png'
import Australiaflag from './countrylogo/download4.png'
import Belgiumflag from './countrylogo/download5.png'
import Bulgariaflag from './countrylogo/download6.png'
import Brazilflag from './countrylogo/download7.png'
import Canadaflag from './countrylogo/download8.png'
import Switzerlandflag from './countrylogo/download9.png'
import Chinaflag from './countrylogo/download10.png'
import Colombiaflag from './countrylogo/download11.png'
import Cubaflag from './countrylogo/download12.png'
import Czech_Republicflag from './countrylogo/download13.png'
import Egyptflag from './countrylogo/download14.png'
import Franceflag from './countrylogo/download15.png'
import United_Kingdomflag from './countrylogo/download16.png'
import Greeceflag from './countrylogo/download17.png'
import Hong_Kongflag from './countrylogo/download18.png'
import Indonesiaflag from './countrylogo/download19.png'
import Israelflag from './countrylogo/download20.png'
import Italyflag from './countrylogo/download21.png'
import Japanflag from './countrylogo/download22.png'
import South_Koreaflag from './countrylogo/download23.png'
import Lithuaniaflag from './countrylogo/download24.png'
import Latviaflag from './countrylogo/download25.png'
import Madagascarflag from './countrylogo/download26.png'
import Mexicoflag from './countrylogo/download27.png'
import Malaysiaflag from './countrylogo/download28.png'
import Nigeriaflag from './countrylogo/download29.png'
import Netherlandsflag from './countrylogo/download30.png'
import New_Zealandflag from './countrylogo/download31.png'
import Philippinesflag from './countrylogo/download32.png'
import Polandflag from './countrylogo/download33.png'
import Portugalflag from './countrylogo/download34.png'
import Romaniaflag from './countrylogo/download35.png'
import Serbiaflag from './countrylogo/download36.png'
import Ukraineflag from './countrylogo/download37.png'
import United_Statesflag from './countrylogo/download38.png'
import South_Africaflag from './countrylogo/download39.png'
function Sidebar(props){
    let [filtertoggle,setFiltertoggle]=useState(false)
    return (
        <div id="filter" className={filtertoggle?'filter1':'filter2'}>
        <i className="fa-sharp fa-solid fa-filter bg-dark" id={filtertoggle?'filterbutton':''} onClick={()=>setFiltertoggle(!filtertoggle)}></i>
            <div  id="filterbox">
                <div onClick={()=>props.setcountry("")} className={props.country===''?'active':''}><img src={worldflag} className="card-img-top rounded-2" alt='../' />World</div>
                <div onClick={()=>props.setcountry("in")} className={props.country==='in'?'active':''}><img src={Indiaflag} className="card-img-top rounded-2" alt='../' />India</div>
                <div onClick={()=>props.setcountry("ae")} className={props.country==='ae'?'active':''}><img src={Arab_Emiratesflag} className="card-img-top rounded-2" alt='../' />Arab Emirates</div>
                <div onClick={()=>props.setcountry("ar")} className={props.country==='ar'?'active':''}><img src={Argentinaflag} className="card-img-top rounded-2" alt='../' />Argentina</div>
                <div onClick={()=>props.setcountry("at")} className={props.country==='at'?'active':''}><img src={Austriaflag} className="card-img-top rounded-2" alt='../' />Austria</div>
                <div onClick={()=>props.setcountry("au")} className={props.country==='au'?'active':''}><img src={Australiaflag} className="card-img-top rounded-2" alt='../' />Australia</div>    
                <div onClick={()=>props.setcountry("be")} className={props.country==='be'?'active':''}><img src={Belgiumflag} className="card-img-top rounded-2" alt='../' />Belgium</div>    
                <div onClick={()=>props.setcountry("bg")} className={props.country==='bg'?'active':''}><img src={Bulgariaflag} className="card-img-top rounded-2" alt='../' />Bulgaria</div>    
                <div onClick={()=>props.setcountry("br")} className={props.country==='br'?'active':''}><img src={Brazilflag} className="card-img-top rounded-2"  alt='../'/>Brazil</div>    
                <div onClick={()=>props.setcountry("ca")} className={props.country==='ca'?'active':''}><img src={Canadaflag} className="card-img-top rounded-2"  alt='../'/>Canada</div>    
                <div onClick={()=>props.setcountry("ch")} className={props.country==='ch'?'active':''}><img src={Switzerlandflag} className="card-img-top rounded-2" alt='../' />Switzerland</div>    
                <div onClick={()=>props.setcountry("cn")} className={props.country==='cn'?'active':''}><img src={Chinaflag} className="card-img-top rounded-2" alt='../' />China</div>    
                <div onClick={()=>props.setcountry("co")} className={props.country==='co'?'active':''}><img src={Colombiaflag} className="card-img-top rounded-2"  alt='../'/>Colombia</div>    
                <div onClick={()=>props.setcountry("cu")} className={props.country==='cu'?'active':''}><img src={Cubaflag} className="card-img-top rounded-2"  alt='../'/>Cuba</div>    
                <div onClick={()=>props.setcountry("cz")} className={props.country==='cz'?'active':''}><img src={Czech_Republicflag} className="card-img-top rounded-2" alt='../' />Czech Republic</div>       
                <div onClick={()=>props.setcountry("eg")} className={props.country==='eg'?'active':''}><img src={Egyptflag} className="card-img-top rounded-2" alt='../' />Egypt</div>    
                <div onClick={()=>props.setcountry("fr")} className={props.country==='fr'?'active':''}><img src={Franceflag} className="card-img-top rounded-2"  alt='../'/>France</div>    
                <div onClick={()=>props.setcountry("gb")} className={props.country==='gb'?'active':''}><img src={United_Kingdomflag} className="card-img-top rounded-2" alt='../'/>United Kingdom</div>    
                <div onClick={()=>props.setcountry("gr")} className={props.country==='gr'?'active':''}><img src={Greeceflag} className="card-img-top rounded-2"  alt='../'/>Greece</div>    
                <div onClick={()=>props.setcountry("hk")} className={props.country==='hk'?'active':''}><img src={Hong_Kongflag} className="card-img-top rounded-2"  alt='../'/>Hong Kong</div>      
                <div onClick={()=>props.setcountry("id")} className={props.country==='id'?'active':''}><img src={Indonesiaflag} className="card-img-top rounded-2"  alt='../'/>Indonesia</div>      
                <div onClick={()=>props.setcountry("il")} className={props.country==='il'?'active':''}><img src={Israelflag} className="card-img-top rounded-2"  alt='../'/>Israel</div>      
                <div onClick={()=>props.setcountry("it")} className={props.country==='it'?'active':''}><img src={Italyflag} className="card-img-top rounded-2"  alt='../'/>Italy</div>    
                <div onClick={()=>props.setcountry("jp")} className={props.country==='jp'?'active':''}><img src={Japanflag} className="card-img-top rounded-2"  alt='../'/>Japan</div>    
                <div onClick={()=>props.setcountry("kr")} className={props.country==='kr'?'active':''}><img src={South_Koreaflag} className="card-img-top rounded-2"  alt='../'/>South Korea</div>    
                <div onClick={()=>props.setcountry("lt")} className={props.country==='lt'?'active':''}><img src={Lithuaniaflag} className="card-img-top rounded-2"  alt='../'/>Lithuania</div>    
                <div onClick={()=>props.setcountry("lv")} className={props.country==='lv'?'active':''}><img src={Latviaflag} className="card-img-top rounded-2"  alt='../'/>Latvia</div>    
                <div onClick={()=>props.setcountry("ma")} className={props.country==='ma'?'active':''}><img src={Madagascarflag} className="card-img-top rounded-2"  alt='../'/>Madagascar</div>    
                <div onClick={()=>props.setcountry("mx")} className={props.country==='mx'?'active':''}><img src={Mexicoflag} className="card-img-top rounded-2"  alt='../'/>Mexico</div>    
                <div onClick={()=>props.setcountry("my")} className={props.country==='my'?'active':''}><img src={Malaysiaflag} className="card-img-top rounded-2"  alt='../'/>Malaysia</div>    
                <div onClick={()=>props.setcountry("ng")} className={props.country==='ng'?'active':''}><img src={Nigeriaflag} className="card-img-top rounded-2" alt='../' />Nigeria</div>    
                <div onClick={()=>props.setcountry("nl")} className={props.country==='nl'?'active':''}><img src={Netherlandsflag} className="card-img-top rounded-2"  alt='../'/>Netherlands</div>        
                <div onClick={()=>props.setcountry("nz")} className={props.country==='nz'?'active':''}><img src={New_Zealandflag} className="card-img-top rounded-2" alt='../' />New Zealand</div>    
                <div onClick={()=>props.setcountry("ph")} className={props.country==='ph'?'active':''}><img src={Philippinesflag} className="card-img-top rounded-2"  alt='../'/>Philippines</div>    
                <div onClick={()=>props.setcountry("pl")} className={props.country==='pl'?'active':''}><img src={Polandflag} className="card-img-top rounded-2"  alt='../'/>Poland</div>    
                <div onClick={()=>props.setcountry("pt")} className={props.country==='pt'?'active':''}><img src={Portugalflag} className="card-img-top rounded-2"  alt='../'/>Portugal</div>    
                <div onClick={()=>props.setcountry("ro")} className={props.country==='ro'?'active':''}><img src={Romaniaflag} className="card-img-top rounded-2"  alt='../'/>Romania</div>    
                <div onClick={()=>props.setcountry("rs")} className={props.country==='rs'?'active':''}><img src={Serbiaflag} className="card-img-top rounded-2"  alt='../'/>Serbia</div>    
                <div onClick={()=>props.setcountry("ua")} className={props.country==='ua'?'active':''}><img src={Ukraineflag} className="card-img-top rounded-2"  alt='../'/>Ukraine</div>    
                <div onClick={()=>props.setcountry("us")} className={props.country==='us'?'active':''}><img src={United_Statesflag} className="card-img-top rounded-2" alt='../' />United States</div>    
                <div onClick={()=>props.setcountry("za")} className={props.country==='za'?'active':''}><img src={South_Africaflag} className="card-img-top rounded-2"  alt='../'/>South Africa</div>    
            </div>
        </div>
    )
}
export default Sidebar;