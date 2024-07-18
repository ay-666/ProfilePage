
import './App.css';
import './Card.css';

function App() {
  return (
    <>
    <Card fullName="John Doe" age="32" city="London"></Card>
    </>
  );
}

function Card({fullName,age,city}){
  return <div className = "card">
    <div className='topSection'>
      <PhotoContainer ></PhotoContainer>
      <div className="personalInfo">
      <div id='nameNage'>
      <span style={{fontWeight:'bold', fontSize:'20px',color:'black',padding:"5px"}}>{fullName}</span>
      <span style={{fontSize:'20px',color:'grey'}}>{age}</span>
      </div>
      <p >{city}</p>
      </div>
    </div>
    <div className='bottomSection'>
      <ProfileMetric count="80" metric="Followers" ></ProfileMetric>
      <ProfileMetric count="806" metric="Likes"></ProfileMetric>
      <ProfileMetric count="1.4" metric="Photos"></ProfileMetric>
    </div>
  </div>
}

function PhotoContainer(){
  return <div className= "photoContainer"> 
  <img src="https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&" alt="Imgg" ></img>
  </div>
}

function ProfileMetric({count,metric}){
  return <div className="profileMetric">
    <div style={{fontSize:'20px',fontWeight:'bold',marginBottom:'8px'}}>{count}K</div>
    <div style={{color:'grey'}}>{metric}</div >

  </div>
}
export default App;
