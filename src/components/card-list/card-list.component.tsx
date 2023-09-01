import { Monster } from '../../App';
import './card-list.style.css';
import Card from "../card/card.component";

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (       
    <div className='card-list'>
        {monsters.map((monster) => {
            const { id } = monster;
            return <Card key= {id} monster={monster}/>
        })}
    </div>
)

export default CardList;

