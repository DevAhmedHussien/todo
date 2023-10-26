 
 
    import { Button } from '@mui/material';
    import logo from './kk.png'
    export default function WhowIam() {
      return (
       <div style={{ background:'#b58868' ,width: "60%",margin:'100px auto' , flexDirection:'column',display:'flex' , justifyContent:'center', alignItems:'center'
        , gap:50 ,border:'4px solid #827717',borderRadius:"20px",
        boxShadow:"7px 6px 47px 24px #b3b3b3" }}> 
       <div>
            <img style={{width:"100%"}} src={logo}/>
        </div>
        <div style={{ display:'flex' , flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <h2 style={{fontSize:'40px' , width:"100%"}}>Ahmed Hussien</h2>
            <h4  style={{textAlign:"center", width:"100%"    , marginBottom: "14px"}}>Junior Frontend Developer</h4>
            <Button   variant="contained"  href="./ahmedresume .pdf"  download
             style={{textAlign:"center", width:"50%"    , marginBottom: "14px"}}>Download CV</Button>
        </div>
       
       </div>
      );
    }
