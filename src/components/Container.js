import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import GameBoard from "./GameBoard";
import {shuffle} from "lodash";
import { Image, Grid, Row, Col } from 'react-bootstrap';
import "./images.css";
import Score from "./Score";
import Status from "./Status";
import Title from "./Title";



class Container extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      count: 99,
      cards: [
        {
            id: 1,
            link:"https://t2.genius.com/unsafe/823x0/https%3A%2F%2Fimages.genius.com%2F73c8d0fdb7d49355b010b660ced836a4.1000x1000x1.jpg"
        }, 
        {
            id: 2,
            link:"http://dangerousuniverse.com/wp-content/uploads/2012/04/game_of_thrones_ver15-300x300.jpg"
        },
        {
            id: 3,
            link:"https://www.earnthenecklace.com/wp-content/uploads/2017/07/22Game-of-Thrones22-Season-7-Episode-2-Spoilers.png"
        },
        {
            id: 4,
            link: "https://wrat.com/wp-content/uploads/sites/27/2017/06/new-game-of-thrones-trailer-300x300.jpg"
        },
        {
            id: 5,
            link:"https://www.theexpertinstitute.com/wp-content/uploads/2013/06/game-of-thrones2-300x300.jpg"
        },
        {
            id: 6,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_MAyzKSHOnQVjgUAukoYPSINqG2_G_M0kM_1zhbh5Ypmx6Rb5w"
        },
        {
            id: 7,
            link:  "https://nyppagesix.files.wordpress.com/2013/08/cerseilannister-lenaheadey-helensloan161413-300x300.jpg?quality=90&strip=all"
        },
        {
            id: 8,
            link: "https://www.earnthenecklace.com/wp-content/uploads/2017/08/Tyrion-Lannister-Game-of-Thrones-300x300.png"
        },
        {
            id: 9,
            link:"https://pmchollywoodlife.files.wordpress.com/2014/07/peter-dinklage-as-tyrion-lannister-in-game-of-thrones-killed-in-book-6-ftr.jpg?w=600"
        },
        {
            id: 10,
            link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHMhgWJA7wr9F_EfjeSyOVELnHwBTMAefsn-gxfFxdQ66eCkx"
        },
        {
            id: 11,
            link:"https://www.earnthenecklace.com/wp-content/uploads/2016/06/Jon-Snow-HBO-300x300.jpg"
        },
        {
            id: 12,
            link:"https://www.earnthenecklace.com/wp-content/uploads/2017/07/22Game-of-Thrones22-Season-6-Recap-300x300.png"
        },
    
        ],
    score: 0,
    topScore: 0,
    clickedCards: [],
    status: false
    
};
  
  
  
    shuffleCards = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        
    }
  //trying to create a function that copys the existing click card array as empty, then pushes the cardId from the card container as the argument in the handleClicks()
    handleClicks = (cardId) => {
        const copyArray = [...this.state.clickedCards]
        copyArray.push(cardId); 
        
        this.setState({
            score: this.state.score + 1,
            //after the array is pushed with the cardId from the card component, we want the state of clickCards to now be the updated array
            clickedCards: copyArray
        })
        this.shuffleCards();
    }
  


    
    checkedGuess = () => {}
  
  
    updateScore = () => {}


    render() {
        return (
            <div>
                <NavBar>
                    <Title text="ClickyGame" />
                </NavBar>

                <Header>
                   
                    <Status status = {this.state.status} />
                    <Score score = {this.state.score} topScore={this.state.topScore} />
                </Header>

             
                {/* <JumboTron /> */}
                <GameBoard cards={this.state.cards} handleClicks={this.handleClicks} >

     
     
    


    </GameBoard>
 
            </div>
        );
    }
}


export default Container;


