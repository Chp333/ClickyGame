import React from "react";
import CardBody from "./CardBody";
import {shuffle} from "lodash";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 99,
    cards: [
      "https://t2.genius.com/unsafe/823x0/https%3A%2F%2Fimages.genius.com%2F73c8d0fdb7d49355b010b660ced836a4.1000x1000x1.jpg",
      "https://www.earnthenecklace.com/wp-content/uploads/2016/06/Jon-Snow-HBO-300x300.jpg",
      "http://dangerousuniverse.com/wp-content/uploads/2012/04/game_of_thrones_ver15-300x300.jpg",
      "https://www.earnthenecklace.com/wp-content/uploads/2017/07/22Game-of-Thrones22-Season-7-Episode-2-Spoilers.png",
      "https://wrat.com/wp-content/uploads/sites/27/2017/06/new-game-of-thrones-trailer-300x300.jpg",
      "https://www.theexpertinstitute.com/wp-content/uploads/2013/06/game-of-thrones2-300x300.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_MAyzKSHOnQVjgUAukoYPSINqG2_G_M0kM_1zhbh5Ypmx6Rb5w",
      "http://seryhumano.com/web/wp-content/uploads/2017/08/Game-of-Thrones-300x300.jpg",
      "https://nyppagesix.files.wordpress.com/2013/08/cerseilannister-lenaheadey-helensloan161413-300x300.jpg?quality=90&strip=all",
      "https://www.earnthenecklace.com/wp-content/uploads/2017/08/Tyrion-Lannister-Game-of-Thrones-300x300.png",
      "https://pmchollywoodlife.files.wordpress.com/2014/07/peter-dinklage-as-tyrion-lannister-in-game-of-thrones-killed-in-book-6-ftr.jpg?w=600",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHMhgWJA7wr9F_EfjeSyOVELnHwBTMAefsn-gxfFxdQ66eCkx",
      "https://www.earnthenecklace.com/wp-content/uploads/2017/07/22Game-of-Thrones22-Season-6-Recap-300x300.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4Q6rlfCbJp0WiyqMQKJR2WwnM46Huykqp3bZkEkXhaADh02r",
      "https://i.gifer.com/fetch/w300-preview/23/2380fa5642370126b315526f3212f1df.gif",
      "http://www.gomeeki.com/wp-content/uploads/2016/02/Reasons-People-Love-Game-Thrones-Jon-Snow-Video-300x300.jpg",
      "https://www.threezerohk.com/wp-content/uploads/2016/10/A-mouseon-20160818-Hound-SClegane-D-3883-2-cover-300x300.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rxt4B0d8SPJkSPOYDTK2N8Fy9jDFVUpNuGW30LcEVo-UBbOQzg",
      "https://i.gifer.com/fetch/w300-preview/8d/8d2b0546704338ce39fd5924ec5d0df7.gif",
      "https://i.gifer.com/fetch/w300-preview/1d/1dd2942960e8bbb45415533f1bbb9d8c.gif",
      "https://i2-prod.mirror.co.uk/incoming/article11090110.ece/ALTERNATES/s1200/Bran-Stark-on-Game-of-Thrones.jpg",
      "https://fsmedia.imgix.net/99/27/f5/56/bdb8/439b/99ea/28caa25b5505/bran-stark-in-game-of-thrones-season-7.png?rect=22%2C0%2C1229%2C614&dpr=2&auto=format%2Ccompress&w=650",
      "https://cdn4.lostateminor.com/wp-content/uploads/2017/09/lost-at-e-minor-bran-stark-freshman-805x427.jpg",
      "https://i.pinimg.com/originals/4f/ce/6e/4fce6ee319edde2ec6b35219fdd6e87f.jpg",
      "https://i.gifer.com/fetch/w300-preview/2a/2aa1cddc6eac8cc4efe8b944571d06cb.gif",
      "https://imagesvc.timeincapp.com/v3/fan/image?url=https://winteriscoming.net/wp-content/blogs.dir/385/files/2019/01/Sansa-Stark-hair.jpg&c=sc&w=1240&h=1207",
      "https://img.zergnet.com/1932463_300.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqqK7k6_k0b8bx3YKin3hNrqzbZKICzN3LDHlx7V9_kho0TENKg",
      "https://i.gifer.com/fetch/w300-preview/c9/c9c9be00e391d8a8516623f9980d399b.gif",
      "https://i.gifer.com/fetch/w300-preview/04/04bc92c8480afc5c11f12327cf7d9ca7.gif",
      "https://s-media-cache-ak0.pinimg.com/originals/a0/da/d5/a0dad5d84d077bc23b69e4a4a5fa186b.jpg",
      "https://i.gifer.com/fetch/w300-preview/bc/bc921b25b0ab83d31a0dde98b58f33cc.gif",
      "https://uinterview.com/wp-content/uploads/cms/uinterview/news/e7494536f4ff6fd2d94ff1139d80f682.jpg",

 
      ],
  score: 0,
  topScore: 0,
  clickedCards: [],
  guessedCorrectly: false
  };



  shuffleCards = () => {



  }

  handleClicks = () => {}

  checkedGuess = () => {}


  updateScore = () => {}


  


  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <CardBody
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
