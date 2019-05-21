import React from 'react';
// import { Card, Jumbotron } from 'reactstrap';
import { Card, CardText, CardBody, Jumbotron } from 'reactstrap';
import Contact from '../Contact/Contact';
// import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
// import HomeField from '../HomeField/HomeField';
import homeImage from '../images/ABPitching.jpg'
import AlannaImage from '../images/Alanna_teaching.JPG'
import Scroll from '../Scroll/Scroll';
import './ABPitching.css';

const ABPitching = () => {
  const contact1="Email: abpitching@gmail.com"
  const contact2="Phone: 330-606-9887"
  const fieldName="AB Pitching, Hitting and Fitness, LLC"
  const fieldAddress1="2420 Wedgewood Dr"
  const fieldAddress2="Akron, Ohio 44312"
  const googleMapLink="https://goo.gl/maps/sTjniTviwCv"
  
  return (
    <div className="ABPitching" >
      <Jumbotron style={{ backgroundImage: `url(${homeImage})`, width: '40vw', height: '40vw', maxWidth: '600px', maxHeight: '600px', border: 'none' }}> 
      </Jumbotron>
      <div>
        <img src={AlannaImage} alt="home field"/>
        <Card className = "ma3 events" style = {{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', width: '75vw' }} >
          <Scroll  >
            <p>Akron’s is rich in fastpitch softball success, and no other school in the state has enjoyed it like Springfield High School. With its total of nine state championships. The Springfield Spartans are the most successful fastpitch program in Ohio and tied for #6 all-time for state championships by a single school in the entire country.</p>
            <p>From 1992-1995 they would set a record for team and individual achievement that has yet to be equaled. With an overall won-lost mark of 114-5, the Spartans of coach Ray Fowler won four consecutive Division I championships. (Since 1988 they had played in eight consecutive Div. I title games, winning seven of them.) Leading the team all four of those seasons was one of the state’s greatest high school softball pitchers, Alanna Overholt, Alanna Barker.</p>
            <p>In her four years with the Spartans, Alanna set a state record with 93 victories, against only 3 loses. In each of her four high school seasons she was the winning pitcher in both the Division I semi-final and championship game, allowing only 5 earned runs in 57 innings in those games, two of those victories were no-hitters.</p>
            <p>During her senior season, Alanna was simply brilliant as she pursued the state record for most career victories. Needing 28 wins to tie the old mark of 90, she was the starting pitcher in all 32 of her team’s games. She won 31 of the 32 to set a new record (broken  in '99-2002 by Molly Binz of Kenton Ridge High School with 108), but even her performance in the game that she lost was spectacular. In that 1-0 loss to Marlington High School, Alanna pitched a no-hitter, but unfortunately lost the game on an error and a passed ball.</p>
            <p>Alanna lives and breathes softball and is passionate about teaching girls the rewards of hard work, being a great teammate and role model to others. Alanna is just as committed to mentoring and nurturing girls to become caring and giving members of the communities that they live in.</p>
          </Scroll>
        </Card>
      </div>
      
      <div  >
        <Contact contact1={contact1} contact2={contact2} />
        <Card style={{ backgroundColor: '#6c757d00', borderColor: '#6c757d00' }}>
          {/* <CardTitle className="tc" tag="h1">Home Field</CardTitle> */}
          <CardBody>
            <CardText ><a href={googleMapLink} target="_blank" 
                rel="noopener noreferrer" 
                className="gmap abpitching">
                
              <CardText tag="h2">{fieldName}</CardText>
              <CardText tag="h2">{fieldAddress1}</CardText>
              <CardText tag="h2">{fieldAddress2}</CardText>
            </a></CardText>
              Click for Directions
            
          </CardBody>
        </Card>
        {/* <HomeField
          fieldName={fieldName}
          fieldAddress1={fieldAddress1}
          fieldAddress2={fieldAddress2}
          googleMapLink={googleMapLink}
          fieldImage={fieldImage}
        /> */}
      </div> 
    </div>
  );
}

export default ABPitching;
